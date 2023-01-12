import React from 'react'

function Pagination({totalRestos,RestosPerPage,setCurrentPage,currentPage,}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalRestos / RestosPerPage); i++) {
        pages.push(i);
    }

  return (
      <div className='m-10 flex justify-center'>
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                <li>
                    <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                {pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <a    onClick={() => setCurrentPage(page)} className={currentPage==page ? "px-3 py-2 cursor-pointer leading-tight font-bold text-green-500 bg-green-100 border border-gray-300 hover:bg-green-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } >{page}</a>
                        </li>
                    );
                })}
                <li>
                    <a href="#"  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination