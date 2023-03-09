import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const Favorites = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const search = (searchTermInput: string) => {
        console.log("satya", searchTermInput);
        setSearchTerm(searchTermInput);
    }

    return (<>
        <Header search={search} />
        <h2>
            Favorites under Movies Coming
        </h2>
        <MovieList category={"movies-coming"} faved={true} searchTerm={searchTerm} />
        <h2>
            Favorites under Movies in theaters
        </h2>
        <MovieList category={"movies-in-theaters"} faved={true} searchTerm={searchTerm} />
        <h2>
            Favorites under Top Rated India
        </h2>
        <MovieList category={"top-rated-india"} faved={true} searchTerm={searchTerm} />
        <h2>
            Favorites under Top rated movies
        </h2>
        <MovieList category={"top-rated-movies"} faved={true} searchTerm={searchTerm} />


    </>)
}
export default Favorites;