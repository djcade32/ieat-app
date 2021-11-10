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
        <h2 className="username">Mike Williams</h2>
        <div className="user-stats">
          <div className="stat">
            <p>34</p>
            <p>visited</p>
          </div>
          <div className="stat">
            <p>10</p>
            <p>not visited</p>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button className="visited-button toggle-button">Visited</button>
        <button className="to-visit-button toggle-button">To Visit</button>
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
