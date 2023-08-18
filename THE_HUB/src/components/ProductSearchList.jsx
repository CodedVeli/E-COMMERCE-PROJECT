import SearchShow from "./SearchShow";

const ProductSearchList = ({searchResults}) => {
const renderedSearch = searchResults.map((searchResult) =>{
    return <SearchShow key={Image.id} searchResult={searchResult} />
})

    return (
        <div className="flex flex-wrap justify-center mx-auto gap-10">
            {renderedSearch}
        </div>
    );
};

export default ProductSearchList;