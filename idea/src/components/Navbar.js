import NavbarOne from "./NavbarOne";
import NavbarThree from "./NavbarThree";
import NavbarTwo from "./NavbarTwo";

function Navbar() {
    return (
      <div className="navbarContainer">
        <div>
          <NavbarOne />
        </div>
        <div>
          <NavbarTwo />
        </div>
        <div>
          <NavbarThree />
        </div>
      </div>
    );
}

export default Navbar;