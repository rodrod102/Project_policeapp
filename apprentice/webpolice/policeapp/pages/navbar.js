import Link from "next/link";
const Navbar = ({ handleClickabout,handleClickhome,handleClickaffiliate}) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">ภูธรภาค8</a>
        <button onClick={() => handleClickhome()}>หน้าแรก</button>
        <button onClick={() => handleClickabout()}>หน่วยงานที่เกี่ยวข้อง</button>
        <button onClick={() => handleClickaffiliate()}>หน่วยงานในสังกัด</button>
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
