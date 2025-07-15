const SearchPopup = ({ onClose }) => {
    return (
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose" onClick={onClose}>
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit"><i className="fal fa-search"></i></button>
        </form>
      </div>
    );
  };
  
  export default SearchPopup;