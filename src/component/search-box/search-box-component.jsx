import { Component } from "react";
import "./search-box-style.css";

function SearchBox(props) {
  const { onChangeProp, className, placeholder } = props;
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type="search"
      onChange={onChangeProp}
    />
  );
}

// class SearchBox extends Component {
//   render() {
//     const { onChangeProp, className, placeholder } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         placeholder={placeholder}
//         type="search"
//         onChange={onChangeProp}
//       />
//     );
//   }
// }

export default SearchBox;
