import React from 'react';

const CategoryShow = ( {category} ) => {
    return (
        
        <div className='bg-gray-50 rounded-[1rem]'>
            <img src={category.image}className=' scale-50 w-60 h-60' alt={category.title}/>
            <h2 className=' w-40 truncate'>{category.title}</h2>
            <h2 className=' font-bold'>${category.price}</h2>
            <h2>{category.category}</h2>
            <div className=' flex justify-end p-2'>
            <span  class="material-symbols-rounded">
add_shopping_cart
</span>
</div>
        </div>
    );
};

export default CategoryShow;