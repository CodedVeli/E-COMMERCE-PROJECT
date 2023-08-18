import { useEffect, useState, useCallback } from 'react'
import DashBoard from './components/Dashboard'
import SearchBar from './components/SearchBar'
import FetchProductsApi from './Apis/Api'
import ProductList from './components/ProductsList'
import CategoryApi from './Apis/CategoryApi'
import CategoryList from './components/CategoryList'
import SearchTerm from './Apis/SearchApi'
import ProductSearchList from './components/ProductSearchList'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [count, setCount] = useState(0)
  const [searchResults, setSearchResult] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

    const fetchProducts = useCallback(async() => {
      const result = await FetchProductsApi()
      setProducts(result)
      //console.log(result)
    }, []);

    useEffect(() => {
      fetchProducts()
    }, [fetchProducts]);


    const fetchCategories = useCallback(async() => {
      const result = await CategoryApi()
      setCategories(result)
      //console.log(result)
    }, [])

    useEffect(() => {
      fetchCategories()
    }, [fetchCategories])

    const cartClick = () => setCount(count +1)


    const handleSubmit = async(term) => {
      const result = await SearchTerm(term);
      setSearchResult(result)
      console.log(result)
    }

    const addToCart = (products) => {
      setShoppingCart([...shoppingCart, products])
      console.log(addToCart)
    };


   

  return (
    <main className=' h-screen mx-auto my-10 space-y-10'>

      <div className=" md:fixed z-10 top-2 left-0 min-w-full space-y-5">
    <DashBoard count={count}/>
    <SearchBar onSubmit={handleSubmit}/> 
    </div>
    <ProductList  products={products} cartClick={addToCart}  />
    <ProductSearchList searchResults={searchResults} />
    <label className=' flex justify-center font-Berkshire font-extrabolqd text-4xl border border-red-600 rounded-[1rem] bg-red-600 mx-72'><h1>Jewerly</h1></label>
    <CategoryList categories={categories}/>      
    </main>
  )
}

export default App
