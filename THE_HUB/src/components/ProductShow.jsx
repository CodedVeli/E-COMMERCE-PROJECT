import React from 'react';

const ProductShow = ({product, cartClick}) => {
    return (
        <div className=' bg-gray-100 rounded-[1rem]'  >
            <div className=' group hover:bg-gray-40 hover:shadow-md hover:border-transparent'>
            <img src={product.thumbnail} className='mx-auto my-30 scale-50 h-60 w-60  ' alt={product.title}/>
            <h2 className=' w-44 truncate font-Castoro'>{product.title}</h2>
            <h2 className=' font-bold'>${product.price}</h2>
            <h2 className='font-Castoro'>Category: {product.category}</h2>
            </div> 
            <button onClick={cartClick(product)} className=' bg-amber-500 rounded-[0.5rem] mx-auto px-16 flex justify-center hover:bg-amber-600'><h1 className=' flex justify-center'>ADD TO  CART</h1>
           
</button>
            
            
        </div>
    );
};//flex flex-wrap justify-center mx-auto gap-10 my-40

export default ProductShow;