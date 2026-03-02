import Map from './Map';

export default function HomePage() {
  
  return (
    <div id="homePage" className="homePage">
      <h1>This is the Homepage!</h1>
      <div className="map">
        <Map />
      </div>
    </div>
  );
}
