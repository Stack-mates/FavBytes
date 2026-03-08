

export default function ByteList({ dishes =[]}) {


  const renderedDishes = dishes.map((dish) => (
    <div key={dish._id}>
      <h3>{dish.name}</h3>
      <img src={dish.imageUrl} alt={dish.name} />
    </div>
  ))

  return (
    <div id="byteList" className="byteList">
      <ul>{renderedDishes}</ul>
    </div>
  );
}

// import { useState, useEffect } from 'react';

// export default function ByteList({ user }) {
//   const [dishes, setDishes] = useState([]);
//   const [selectedDish, setSelectedDish] = useState(null);
//   console.log(user);
//   useEffect(() => {
//     fetch('/api/dishes')
//       .then((res) => res.json())
//       .then((data) => setDishes(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const renderedDishes = dishes.map((dish) => {
//     console.log(dish);
//     return (
//       <li key={dish.id}>
//         <div id="dish" className="dish">
//           <div id="dish-name" className="dish-name">
//             {dish.name} from: {dish.restaurantName}
//           </div>
//           <br />
//           <div id="dish-description" className="dish-description">
//             {dish.description}rating:{dish.stars}
//           </div>
//           <br />
//           <div id="dish-image" className="dish-image">
//             <img src={dish.imageUrl} alt={dish.name} />
//           </div>
//         </div>
//       </li>
//     );
//   });
//   return (
//     <div id="byteList" className="byteList">
//       <ul>{renderedDishes}</ul>
//     </div>
//   );
// }
