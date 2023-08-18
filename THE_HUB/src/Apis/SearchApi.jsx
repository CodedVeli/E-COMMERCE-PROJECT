import axios from 'axios';

const SearchTerm = async(term) => {

    const response = await axios.get(`https://dummyjson.com/products/search?q=${term}`,{
        params: {
            query: term,
        }
    });
    return response.data.products
}
export default SearchTerm;