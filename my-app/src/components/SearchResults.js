import React from 'react';
// import { DropdownButton,Dropdown } from 'react-bootstrap';

const SearchResults = ({ getSearchResults }) => {
    return(
        <div className="container">
            <script src="https://use.fontawesome.com/660860b5b2.js"></script>
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Search iTunes</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Search Term</label>
                            <input type="text" name="term" id="term" className="form-control" placeholder="Search Term" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="btn-group open">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter by Media
                            </button>
                            <select id="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <option className="dropdown-item">Media Type</option>
                                <option className="dropdown-item" value="music">Music</option>
                                <option className="dropdown-item" value="movie">Movie</option>
                                <option className="dropdown-item" value="podcast">Podcast</option>
                            </select>
                            {/* <ul class="dropdown-menu">
                                <li> movie </li>
                                <li> podcast </li>
                                <li> music </li>
                                <li> musicVideo </li>
                                <li> audioBook </li>
                                <li> shortFilm </li>
                                <li> tvShow </li>
                                <li> software </li>
                                <li> ebook </li>
                                <li> all </li>
                            </ul> */}
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => getSearchResults(document.getElementById("term").value,
                    document.getElementById("dropdown-menu").value)} className="btn btn-danger">
                        <i className="fa fa-search" aria-hidden="true"></i> Search
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default SearchResults