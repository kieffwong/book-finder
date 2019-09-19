import React, { Component } from 'react';
import './App.css';
import logo from "./img/Girl_Reading.png";
import BookRow from "./BookRow.js";
import $ from 'jquery'

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {}
  this.performSearch("Programming 2019")
  }

  performSearch(searchTerm) {
    console.log("google book API")
    const googleBookApi = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm
    $.ajax({
      url: googleBookApi,
      success: (searchResults) => { 
console.log("Fetch Data successfully!")
console.log(searchResults)
const results = searchResults.items

var bookRows = []

results.forEach((book) => {
  console.log(book.volumeInfo.title)
  console.log(book.volumeInfo.authors)
  //results.filter(book => book.volumeInfo.title  !== "Undefined")
  const bookRow = <BookRow key={book.id} book={book} /> 
  bookRows.push(bookRow)
})

this.setState({bookRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to Fetch data")
      }

    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)

  }
  render () {

  return (
    <div className="App">
       <table className="titleBar">
         <tbody>
         <tr>
           <td>
             <img width="100" src={logo} alt="reading" />
           </td>
           <td width="auto">
             <h1>Book Finder</h1>
           </td>
         </tr>
         </tbody>
       </table>
        <input  onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search"></input>
       <div id="col"> {this.state.bookRows}  </div>
    </div>
  );
  }
}

export default App;
