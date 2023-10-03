import { useState, useEffect } from "react";
import CardList from "./component/card-list/card-list-component";
import SearchBox from "./component/search-box/search-box-component";
import "./App.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respons) => respons.json())
      .then((user) => {
        setMonsters(user);
      });
  }, []);

  const onChangeSearch = (event) => {
    const searchInputValue = event.target.value.toLowerCase();
    setSearchInput(searchInputValue);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchInput);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchInput]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="search-box-monster"
        placeholder="Search Monsters"
        onChangeProp={onChangeSearch}
      />

      <CardList monstersProp={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((respons) => respons.json())
//       .then((user) => {
//         this.setState(() => {
//           return {
//             monsters: user,
//           };
//         });
//       });
//   }

//   // If we put this code in the input-onChange event listener, it will cause our code to be slow.
//   // Because everytime render() get runned the function will alos be runned, now we are running it only when it is need and called.
//   onChangeSearch = (event) => {
//     let searchString = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchString };
//     });
//   };

//   render() {
//     // Using destructuring to make the code more readable and better
//     const { monsters, searchString } = this.state;
//     const { onChangeSearch } = this;

//     const filteredMonsters = monsters.filter((item) => {
//       return item.name.toLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           className="search-box-monster"
//           placeholder="Search Monsters"
//           onChangeProp={onChangeSearch}
//         />

//         <CardList monstersProp={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
