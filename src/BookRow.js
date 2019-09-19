import React from 'react'
import logo from "./img/Girl_Reading.png";

class BookRow extends React.Component {
  bookInfo() {
    console.log("See more Info")
    const info = this.props.book.volumeInfo.infoLink
      window.open(info, "_blank");
  };

    render() {

        return  <table key={this.props.book.id}>
        <tbody>
          <tr>
            <td id="bookImage">
            <img width="166px" height="auto" alt="cover" src={this.props.book.volumeInfo.imageLinks ? this.props.book.volumeInfo.imageLinks.thumbnail : logo}></img> 
            </td>
            <td id="grid">
            <h3>{this.props.book.volumeInfo.title }</h3> 
            <p>Author: {this.props.book.volumeInfo.authors }</p>
            <p>Description: {this.props.book.volumeInfo.description ? this.props.book.volumeInfo.description.slice(0,150)+"......" : this.props.book.volumeInfo.description}</p>
            <input className="seeMore" type="button" onClick={this.bookInfo.bind(this)} value="See More" />
            </td>
          </tr>
        </tbody>
      </table>
    }
  } 

export default BookRow;