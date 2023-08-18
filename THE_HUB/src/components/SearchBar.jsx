import { useState } from 'react'

function SearchBar( {onSubmit} ){
 const [term, setTerm] = useState('')
const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term)

}

const handleChange = (event) => {
    setTerm(event.target.value)
  };



return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label></label>
            <div className='flex justify-center mx-auto'>
            <input className=' rounded-[0.5rem] focus:ring-5 focus:ring-blue-600 border border-gray-400 ' placeholder='     Enter Search' value={term} onChange={handleChange} />
            <button className=' bg-red-500 rounded-[0.5rem] font-serif text-white hover:bg-red-600 hover:shadow-md' onClick={onSubmit}>Search</button>
            </div>
        </form>
    </div>
)
}
export default SearchBar;