    import axios from 'axios'
    

        const FetchProductsApi = async() => {
            const response = await axios.get('https://dummyjson.com/products');

          return response.data.products
        }

    
    export default FetchProductsApi;