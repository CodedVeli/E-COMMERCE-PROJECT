import React from 'react';

const SearchShow = ({searchResult}) => {
    return (
        <div className=' bg-gray-50 rounded-[1rem]'>
            <img src={searchResult.thumbnail} className='mx-auto my-30 scale-50 h-60 w-60 ' alt={searchResult.title}/>
            <h2 className=' w-44 truncate'>{searchResult.title}</h2>
            <h2 className=" font-bold"> {searchResult.price}</h2>
            <h2>{searchResult.category}</h2>
        </div>
    );
};

export default SearchShow;