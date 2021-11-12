import "./App.css";
import profilePic from "./images/profile-pic-1.jpg";

import placeImg1 from "./images/place-img-1.jpg";
import placeImg2 from "./images/place-img-2.jpg";
import placeImg3 from "./images/place-img-3.jpg";

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
      <hr className="header-hr" />

      <div className="visited-places-container">
        <div className="place-container">
          <img
            className="place-image"
            src={placeImg3}
            alt="tatte bakery & cafe"
          />
          <div className="place-info-wrapper">
            <h2 className="place-name">Tatte Bakery & Cafe</h2>
            <div className="place-location-wrapper">
              <i class="fas fa-map-marker-alt location-marker"></i>
              <p className="place-location">
                <em>1200 New Hampshire Ave NW, Washington, DC</em>
              </p>
            </div>
            <div className="stat-wrapper">
              <p className="place-category">Cafe</p>
              <p className="place-price">$$</p>
              <div className="place-rating">
                <p className="rating-number">4.5</p>
                <i className="far fa-star star"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="place-container">
          <img
            className="place-image"
            src={placeImg2}
            alt="The Executive Diner"
          />
          <div className="place-info-wrapper">
            <h2 className="place-name">The Executive Diner</h2>
            <div className="place-location-wrapper">
              <i class="fas fa-map-marker-alt location-marker"></i>
              <p className="place-location">
                <em>1400 Duke St, Alexandria, VA</em>
              </p>
            </div>
            <div className="stat-wrapper">
              <p className="place-category">Diner</p>
              <p className="place-price">$</p>
              <div className="place-rating">
                <p className="rating-number">3.5</p>
                <i className="far fa-star star"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="place-container">
          <img className="place-image" src={placeImg1} alt="Misha's" />
          <div className="place-info-wrapper">
            <h2 className="place-name">Misha's</h2>
            <div className="place-location-wrapper">
              <i class="fas fa-map-marker-alt location-marker"></i>
              <p className="place-location">
                <em>917 King St, Alexandria, VA</em>
              </p>
            </div>
            <div className="stat-wrapper">
              <p className="place-category">Cafe</p>
              <p className="place-price">$$</p>
              <div className="place-rating">
                <p className="rating-number">4</p>
                <i className="far fa-star star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   <div className="visited-places-container">
    //     <div className="place-container">
    //       <img className="place-image" src={placeImg} alt="" />
    //       <h2 className="place-name">Tate Bakery & Cafe</h2>
    //       <p className="place-location">Washington, DC</p>
    //       <p className="place-category">Cafe</p>
    //
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
