import React from "react";

export default function Pagination({pagination, onPageChange}) {
    if (!pagination) return null;

    const {page, prev, next, last} = pagination;

    const handlePageChange = (pageNum) => {
        onPageChange(pageNum);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex justify-center mt-8 space-x-2">
            <button
                disabled={!prev}
                onClick={() => handlePageChange(prev)}
                className={`px-4 py-2 border rounded ${!prev ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Prev
            </button>

            {[...Array(last)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-4 py-2 border rounded ${pageNumber === page ? 'bg-gray-200 font-bold' : ''}`}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            <button
                disabled={!next}
                onClick={() => handlePageChange(next)}
                className={`px-4 py-2 border rounded ${!next ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Next
            </button>
        </div>
    );
};