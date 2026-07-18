import React from "react";

function Pagination(props) {
     let paginationButtons = [];



  for (let index = props.page -2; index <= props.page + 2; index++) {
    if (index > 0 && index <= props.totalPages) {
        paginationButtons.push(
             <button className={props.page !== index ? `rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2` :
                `rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-mist-50 hover:text-white hover:bg-slate-800 hover:border-slate-800 text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 bg-slate-700 text-cyan-50`}
                onClick={() => props.onPageChange(index)} key={`pagaintion-btn-${index}`}>
                {index}
            </button>
        );

    }

  } 


  return (
       <section data-template="pagination" data-view="default" className='c-pagination'>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-1">
                    {/* <button className="hidden md:flex rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        disabled={props.page === 1}
                        onClick={() => props.onPageChange(1)}>
                        First
                    </button> */}
                    <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        onClick={() => props.onPageChange(props.page - 1)}>
                        Prev
                    </button>
              
                    {paginationButtons}
                    <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        disabled={props.page === props.totalPages}
                        onClick={() => props.onPageChange(props.page + 1)}
                    >
                        Next
                    </button>
                    {/* <button className="hidden md:flex min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        onClick={() => props.onPageChange(props.totalPages)}
                        disabled={props.page === props.totalPages}
                    >
                        Last
                    </button> */}
                </div>
            </div>
        </section>
  );
}

export default Pagination;
