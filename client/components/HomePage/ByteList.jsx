export default function ByteList({ dishes = [] }) {
  if (!dishes.length) {
    return (
      <div id="byteList" className="byteList">
        <p style={{ color: 'white' }}>No dishes yet — add your first! 🍽️</p>
      </div>
    );
  }

  return (
    <div id="byteList" className="byteList">
      {dishes.map((dish) => (
        <div
          key={dish._id}
          className="byte-card"
          style={{
            marginBottom: '12px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '8px',
              backgroundColor: '#222',
            }}
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <h3 style={{ margin: '6px 0 2px' }}>{dish.name}</h3>
          <p style={{ margin: 0 }}>{dish.restaurantName}</p>
          {dish.location?.address && (
            <p style={{ fontSize: '0.8em', opacity: 0.7, margin: '2px 0 0' }}>
              📍 {dish.location.address}
            </p>
          )}
        </div>
      ))}
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
