import { IoSearch } from "react-icons/io5";


const SearchBox = () => {
    return(
        <div className="searchBox position-relative d-flex align-items-center w-100">
            <IoSearch className="mr-2"/>
            <input type="text" placeholder="Search here..." id='search'/>
        </div>
    )
}

export default SearchBox;