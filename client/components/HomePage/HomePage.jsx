import Map from './Map';

export default function HomePage({ isActive = true, setIsActive }) {
  console.log(!isActive ? 'homepage is active' : 'homepage isnot active');
  return (
    <div id="homePage" className="homePage">
      <div id="map" className="map">
        <Map />
      </div>
    </div>
  );
}
