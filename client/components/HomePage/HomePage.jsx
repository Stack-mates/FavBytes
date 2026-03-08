import Map from './Map';
import ByteList from './ByteList';

export default function HomePage({
  user,
  dishes,
  setView,
  setSelectedLocation,
}) {
  return (
    <div id="homePage" className="homePage">
      <div id="byteList-container" className="byteList-container">
        <div id="byteList" className="byteList">
          <ByteList dishes={dishes} user={user} />
        </div>
      </div>
      <div id="map" className="map">
        <Map
          dishes={dishes}
          user={user}
          setView={setView}
          setSelectedLocation={setSelectedLocation}
        />
      </div>
    </div>
  );
}
