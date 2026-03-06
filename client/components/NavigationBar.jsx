export default function NavBar({
  view,
  setView,
  isShowingGallery,
  onToggleGallery,
}) {
  return (
    <div id="sidebar" className="sidebar">
      <div id="navigation-bar" className="navigation-bar">
        <nav>
          {/* HomePage button */}
          <button
            className="nav-button-style"
            onClick={() => {
              setView('HomePage');
            }}
          >
            {'Go Home'}
            <br /> {'🏠'}
          </button>
          {/* ImageUpload Button */}
          <button
            className="nav-button-style"
            onClick={() => {
              setView('ImageUpload');
            }}
          >
            {'Go to Upload'}
            <br /> {' 📤'}
          </button>
          {/* ImagePage button */}
          <button
            className="nav-button-style"
            onClick={() => {
              setView('ImagePage');
            }}
          >
            {'Go to Image'}
            <br /> {' 🖼️'}
          </button>
          {/* Page view */}
        </nav>
        {view}
      </div>
    </div>
  );
}
