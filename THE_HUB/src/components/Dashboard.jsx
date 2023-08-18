
const DashBoard = ({count}) => {
    return (
        <header>
       <nav className=" flex flex-center justify-between bg-amber-500 p-4 border rounded-[0.5rem]  ">
        
        <h1 className=" flex justify-start font-Anton text-2xl">THE HUB</h1>

        <p className=" flex justify-center font-Berkshire text-xl">Welcome to '<p className=" font-Anton">  THE HUB </p>' shopping site... </p>

        <h1 className=" "><span class="material-symbols-rounded">
account_circle
</span></h1>
        <h2 className=" relative"><span className=" absolute top-0 right-0 -mt-2 -mr-2">{count}</span><span class="material-symbols-rounded">
shopping_cart
</span></h2>       
       </nav>
       </header>     
    );
};

export default DashBoard;

