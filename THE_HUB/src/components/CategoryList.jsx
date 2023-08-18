import React from 'react';
import CategoryShow from './CategoryShow';

const CategoryList = ({categories}) => {

    const renderCategories = categories.map((category) => {
        return <CategoryShow category={category} key={category.id} />
    })
    return (
        <div className=' flex flex-wrap justify-center mx-auto gap-10'>
            {renderCategories}
            </div>
    );
};

export default CategoryList;