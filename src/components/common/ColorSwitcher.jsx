const ColorSwitcher = () => {
    return (
      <div className="color-scheme-wrap active">
        <button className="switchIcon"><i className="fa-solid fa-palette"></i></button>
        <h4 className="color-scheme-wrap-title"><i className="far fa-palette"></i> Color Switcher</h4>
        <div className="color-switch-btns">
          {/* Color buttons from your HTML */}
        </div>
      </div>
    );
  };
  
  export default ColorSwitcher;