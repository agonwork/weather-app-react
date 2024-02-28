import { FaSearch } from "react-icons/fa";

/*Ignore the commented code below for now as it's gonna be fixed to show 
  the error when the city you searched for is not valid
*/

// export function NotFound() {
//     return (
//         <div>
//             <img src="src/assets/404.png" alt="" />
//             <p>Invalid location!</p>
//         </div>
//     )
// }

export default function Search({ search, setSearch, handleSearch }) {

    // function submitValue(event) {
    //     const element = document.getElementById('search')
    //     handleChange('asdasdasd')


    return (
            
        <div className="search-engine">
            <input type="text"
                placeholder="City Name"
                value={search}
                onChange={(event) => setSearch(event.target.value)} />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
}