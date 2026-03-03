import { useState } from 'react';

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [view, setView] = useState('HomePage');

  return (
    <div id="sidebar" className="sidebar">
      <div id="navigation-bar" className="navigation-bar">
        <nav>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            Menu
            <span className={`indicator ${isExpanded ? 'down' : 'right'}`}>
              &#9650;
            </span>
          </button>

          {isExpanded && (
            <ul>
              <li>
                <button
                  onClick={() => {
                    setView('HomePage');
                  }}
                >
                 {'Go to Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView('ImageUpload');
                  }}
                >{'Go to Upload'}</button>
              </li>
              <li>{view}</li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
