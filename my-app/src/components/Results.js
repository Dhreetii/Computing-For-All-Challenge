import React from 'react';

export const Results = ({results}) => {

    console.log("results: " + Object.entries(results));
    console.log('results count: ', results.resultCount)
    if (results === 0 || results.resultCount === 0) return (
      <div className="container">
        <p>No Matching Results found.</p>
      </div>
    )

    const ResultRow = (result) => {
        return(
              <tr>
                  <td>{result.artistName}</td>
                  <td>{result.trackName}</td>
                  <td>{result.trackViewUrl}</td>
              </tr>
          )
    }

    const resultTable = results["results"].map((result) => ResultRow(result));
    const numResults = results.resultCount;

    return(
        <div className="container">
            <h2>Users</h2>
            <p>Showing {numResults} results</p>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Artist Name</th>
                    <th>Track Name</th>
                    <th>Track URL</th>
                </tr>
                </thead>
                <tbody>
                    {resultTable}
                </tbody>
            </table>
        </div>
    )
}
