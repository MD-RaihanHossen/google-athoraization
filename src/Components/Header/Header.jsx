import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 justify-around  mt-10">
                <NavLink to='/'><button className=" btn mx-5">Home</button></NavLink>
                <NavLink to='/google'><button>Athor Google</button></NavLink>
                <NavLink to='/contract'><button>Contract </button></NavLink>
            </div>
        </div>
    );
};

export default Header;