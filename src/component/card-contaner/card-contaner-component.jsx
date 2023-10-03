import "./card-contaner-style.css";

function CardContaner(props) {
  const { name, id, email } = props.itemValues;

  return (
    <div className="card-contaner" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

// class CardContaner extends Component {
//   render() {
//     const { name, id, email } = this.props.itemValues;
//     return (
//       <div className="card-contaner" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=200x200`}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default CardContaner;
