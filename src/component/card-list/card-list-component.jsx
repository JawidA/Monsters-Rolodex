import "./card-list-style.css";
import CardContaner from "../card-contaner/card-contaner-component";

function CardList(props) {
  const { monstersProp } = props;

  return (
    <div className="card-list">
      {monstersProp.map((item) => {
        return <CardContaner itemValues={item} />;
      })}
    </div>
  );
}

// class CardList extends Component {
//   render() {
//     const { monstersProp } = this.props;

//     return (
//       <div className="card-list">
//         {monstersProp.map((item) => {
//           return <CardContaner itemValues={item} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
