import { React, useState } from 'react';
import HomePage from './HomePage/HomePage';
import Gallery from './Gallery/Gallery';
import LogIn from './LogIn';
import ImagePage from './ImagePage/ImagePage';
import NavBar from './NavigationBar';
import ImageUpload from './ImageUpload/ImageUpload';

function MainView({ view }) {
  return view === 'ImageUpload' ? (
    <ImageUpload />
  ) : view === 'ImagePage' ? (
    <ImagePage />
  ) : (
    <HomePage />
  );
}

export default function App() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);
  const [view, setView] = useState('HomePage');

  return (
    <div id="app-container" className="app-container">
      <LogIn />

      <div id="content-row" className="content-row">
        <>
          {isShowingSidebar && <NavBar setView={setView} view={view} />}
          <div id="main-area" className="main-area">
            <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
              Toggle Sidebar Here
            </button>

            <div id="main-view" className="main-view">
              <MainView view={view} />
            </div>
          </div>
        </>
      </div>
      <div id="gallery-section" className="gallery-section">
        <Gallery />
      </div>
    </div>
  );
}
