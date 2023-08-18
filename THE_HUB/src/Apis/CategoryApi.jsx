import axios from "axios";

const CategoryApi = async() => {

        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')

        
    
    return response.data
};

export default CategoryApi;