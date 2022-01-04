import logo from './itunes-logo.jpg';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getSearchResults } from './services/UserService';
import { Results } from './components/Results';
import SearchResults from './components/SearchResults';

function App() {
  const [results, setResults] = useState([])
  const [numberOfResults, setNumberOfResults] = useState(0)

  const fetchSearchResults = () => {
    getSearchResults()
      .then(results => {
        console.log(results);
        setResults(results);
        setNumberOfResults(results.resultCount);
      });
  }

  useEffect(() => {
    getSearchResults()
      .then(results => {
        console.log(results)
        setResults(results);
        setNumberOfResults(results.length)
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* Image Source: https://tse1.mm.bing.net/th?id=OIP.hCRFEZUAam_GWUSSbj0_dAHaHa&pid=Api */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container mrgnbtm">
        <div className="row">
            <div className="col-md-8">
                <SearchResults
                  numberOfResults={numberOfResults}
                  getSearchResults={fetchSearchResults}
                  >
                </SearchResults>
            </div>
          </div>
          <div className="row mrgnbtm">
            <div className='loading'></div>
            <Results results={results}></Results>
          </div>
        </div>
    </div>
  );
}

export default App;
