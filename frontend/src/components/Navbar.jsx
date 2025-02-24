import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import pimage from "../assets/profile-pictures/profile_icon.png"
import { StoreContext } from "../context/StoreContext.jsx";
const Navbar = ({ setShowLogin }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className="cursor-pointer" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer" onClick={() => navigate("/Contact")}>Contact</li>
            <li className="cursor-pointer" onClick={() => navigate("/About")}>About</li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
              : <div className='relative group navbar-profile'>
                <img className="cursor-pointer" src={pimage} alt="" />
                <ul className="absolute right-0 hidden group-hover:flex flex-col gap-2 bg-[#0f0e0e] p-3 rounded-md border border-tomato outline-white list-none z-10 navbar-profile-dropdown">
                  <li className="flex items-center gap-2 cursor-pointer hover:text-tomato" onClick={logout}><p>Logout</p></li>
                </ul>
              </div>
            }
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="cursor-pointer" onClick={() => navigate("/")}>Home</li>
              <li className="cursor-pointer" onClick={() => navigate("/Contact")}>Contact</li>
              <li className="cursor-pointer" onClick={() => navigate("/About")}>About</li>
            </ul>
            <div className="flex space-x-6">
              {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                : <div className='relative group navbar-profile'>
                  <img className="cursor-pointer" src={pimage} alt="" />
                  <ul className="absolute right-0 hidden group-hover:flex flex-col gap-2 bg-[#0f0e0e] p-3 rounded-md border border-tomato outline-white list-none z-10 navbar-profile-dropdown">
                    <li className="flex items-center gap-2 cursor-pointer hover:text-tomato" onClick={logout}><p>Logout</p></li>
                  </ul>
                </div>
              }
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
