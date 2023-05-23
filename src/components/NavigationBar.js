import "../styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <div className="logo">Anime Streamer</div>
      <form className="search-form">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <button type="submit" id="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="userlogo">
        <i className="fa fa-user-circle"></i>
      </div>
    </nav>
  );
};

export default NavigationBar;
