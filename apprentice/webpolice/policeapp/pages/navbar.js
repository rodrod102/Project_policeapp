const Navbar = ({
  handleClickabout,
  handleClickhome,
  handleClickaffiliate,
  handleClicksidebar,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
      <div className="container-fluid">
        <a className="navbar-brand">ภูธรภาค8</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-color "
                type="button"
                onClick={() => handleClicksidebar()}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-color"
                onClick={() => handleClickhome()}
              >
                หน้าแรก
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-color"
                onClick={() => handleClickabout()}
              >
                หน่วยงานที่เกี่ยวข้อง
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-color"
                onClick={() => handleClickaffiliate()}
              >
                หน่วยงานในสังกัด
              </button>
            </li>
          </ul>
        </div>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
