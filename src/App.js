import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p className="header-title-top">Discover the</p>
        <h1 className="header-title-bottom">beauty of the world</h1>
        <div className="input-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            className="search-input"
            type="text"
            placeholder="Search places"
          />
        </div>
      </div>
      <div className="visited-places-container">
        <p className="visited-title-header">Visited</p>
        <div class="place-container">
          <h2 className="place-name">Tate Bakery & Cafe</h2>
          <p className="place-location">Washington, DC</p>
          <div className="place-rating">
            <p className="rating-number">4.5</p>
            <i className="fas fa-star star"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
