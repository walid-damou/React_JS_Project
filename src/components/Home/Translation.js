import React from 'react'
import { useEffect, useState } from 'react';

const Translation = () => {

    const [listOfLanguages, setListOfLanguages] = useState([]);
    const [error, setError] = useState("")
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '8dfb8eedd2msh896a546d905615cp16bce2jsn560a4916bf62',
    //             'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com'
    //         }
    //     };

    //     fetch('https://dnaber-languagetool.p.rapidapi.com/v2/languages', options)
    //         .then(response => response.json())
    //         .then(response => setListOfLanguages(response))
    //         .catch(err => console.error(err));
    // }, []);



    const translat = async () => {
        const selectElement = document.querySelector('#language');
        const selectedValue = selectElement.value;


        const textToTranslat = document.querySelector('#textToTranslat');
        const textToTranslatValue = textToTranslat.value;

        const translatedText = document.querySelector('#translatedText');

        if (selectedValue === 'Choose a language') {
            setError("Please fill in the language you want to translate to.")
            return
        }
        if (textToTranslatValue.length === 0) {
            setError("Please fill in the text you want to translate.")
            return
        }

        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         'X-RapidAPI-Key': '8dfb8eedd2msh896a546d905615cp16bce2jsn560a4916bf62',
        //         'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        //     },
        //     body: `[{ "Text": "${textToTranslatValue}"}]`
        // };
        // fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ar&api-version=3.0&from=${selectedValue}&profanityAction=NoAction&textType=plain`, options)
        //     .then(response => response.json())
        //     .then(response => translatedText.value = response[0].translations[0].text)
        //     .catch(err => console.error(err));
    }

    return (<section className='my-12 mx-5 md:mx-20' >
        <h1 className="text-darkGrey font-bold text-4xl text-center my-12" > Text Translation </h1> {
            error && < h3 className='text-sm text-red-600 my-2 text-center' > {error} </h3>}

        <div className='w-full flex flex-col space-y-4' >
            <div>
                <select name="language"
                    id="language"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[200px] p-2.5 " >

                    <option selected > Choose a language </option> {
                        listOfLanguages.map((lng) => (<option value={lng.code} > {lng.name} </option>))
                    }
                </select>
            </div>

            <div className='flex flex-col md:flex-row items-end justify-between' >
                <div class="w-full h-[274px] mb-4 border border-gray-300  bg-[#F3F6FB] " >
                    <div class="px-4 py-2 bg-white" >
                        <textarea id='textToTranslat'
                            rows="4"
                            class="resize-none h-48 w-full px-0 text-sm text-gray-900 bg-white border-0"
                            placeholder="Text to translate..."
                            required >
                        </textarea>
                    </div>
                    <div class="flex items-center justify-end px-3 py-2" >
                        < button onClick={translat}
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-mainColor rounded-lg" >
                            Translate
                        </button>
                    </div>
                </div>
                <div class="w-full h-[274px] mb-4 border border-gray-300 bg-[#F3F6FB]" >
                    <div class="px-4 py-2 bg-white" >
                        <textarea id="translatedText"
                            rows="4"
                            class="resize-none h-48 w-full px-0 text-sm text-gray-900 bg-white border-0 text-right"
                            placeholder="Translated text here"
                            required >
                        </textarea>
                    </div>
                </div>
            </div>
        </div>

        { /* <textarea id='textToTranslat' className="resize-none  h-48 p-4  border-gray-400" placeholder="Enter text to translate" /> */}

        { /* <textarea className="resize-none w-full h-48  p-4  border-gray-400 text-right bg-gray-50" placeholder={result} /> */}

        { /* <button onClick={translat} className="self-center w-[100px] py-2 px-2 rounded-md bg-mainColor text-white font-semibold mt-4">Translate</button> */}

    </section>
    )
}

export default Translation