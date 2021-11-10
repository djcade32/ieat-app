import "./App.css";
import profilePic from "./images/profile-pic-1.jpg";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <h2>
            IE<i className="fas fa-cookie-bite logo-cookie"></i>T
          </h2>
        </div>
        <i className="fas fa-bars fa-2x hamburger-menu"></i>
      </nav>
      <div className="header">
        <img className="profile-pic" src={profilePic} alt="profile" />
        <div className="user-info">
          <h2 className="username">Mike Abel</h2>
          <p className="user-location">
            <em>Washington, D.C.</em>
          </p>
        </div>
      </div>
      <div className="user-stats">
        <button className="stat-button">
          <p className="stat-number">34</p>
          <p className="stat-title">visited</p>
        </button>
        <button className="stat-button">
          <p className="stat-number">10</p>
          <p className="stat-title">not visited</p>
        </button>
      </div>

      <div className="visited-places-container">
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
        <div className="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="far fa-star star"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
