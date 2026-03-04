import Map from './Map';

export default function HomePage({ isActive = true, setIsActive }) {
  return (
    <div id="homePage" className="homePage">
      <div id="map" className="map">
        <Map />
      </div>
    </div>
  );
}
