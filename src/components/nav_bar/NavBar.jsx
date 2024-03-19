import logo from "../../assets/logo.png";
import logo_text from "../../assets/logo-text.png";

const NavBar = () => {
    const navItems = <>
        <li><a>Blog</a></li>
        <li><a>Offer</a></li>
        <li><a>Airlines</a></li>
        <li><a>About</a></li>
    </>
    return (
        <div className="navbar bg-base-100 bg-opacity-90 fixed z-50">
            <div className="navbar-start lg:pl-28">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <img src={logo} className="w-8" />
                    <img src={logo_text} className="h-6" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end lg:pr-28">
                <button className="btn btn-primary">Sign in</button>
            </div>
        </div>
    );
};

export default NavBar;