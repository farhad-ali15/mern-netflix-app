import {
  ArrowDropDownRounded,
  Notifications,
  Search,
} from "@mui/icons-material";
import "./Navbar.scss";
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthAction";

function Navbar() {
  const Navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    Navigate("/login");
  };
  const { dispatch } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
          />

          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainlinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainlinks">Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kids</span>
          <Notifications className="icon" />
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAgwMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAYFB//EADQQAAICAgADBAgDCQAAAAAAAAABAgMEESExUQUSMkETIlJhcYGRwRRCYiMzNFNysdHh8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+woaQDSAYwGgBDAYCAoAJAoAJEUIBMRQmBDQihMCQGAAikKIwKQ0JDAYwAAHoCtAToNFaEwJFooQEiZTEBImhtCYEgAwBFIWhoCkNISGgGgnKNcXOySjFc22Kycaq5Tm9RittmvTTLIlG/Jjw511PlFdX7wH6a+/+GrUIfzLd8fgivwtsv3mZc/6NRRtGDIzMfGerrNP2UtsCPwbXhyslfGe/sJxzKuKlC+PSS7svryFX2piTfd9I4v9UdG5zXVMDXoyIXNxW42R51z4NGVkZOPC5J8YzjxjOPOJjxrpTcqrkldDnrlJdUBmZLKJYCZJTEwFoAAAKQhoBlCGBrWr0+VCl+CtKc15N+S+5uGphes8ix85WtfJcEbaAo5GybsslOb3KTbZ1yOSuTjbOMtd5SaeuWwIOg7EnKeDqT8M2lvp/wAznzoOxNxwl3talJuPwA3zUzoutRyoL1qeL98fNG4ROKlFxfJrTAlNSSae0+KYnyMHZ7bwq0+cfVfyejOwEyWUyWAgAAGNCGgKKRBQGDs/hXbH2bpp/X/Zmblv7GvX+yzrIPw3JTj8Vwf2NmdldS3ZOMV+p6ArvSTa0eH23U4Xxt8rFx4eaPQu7Wxq/BKVj6RX3Z4+dmTzLFKUVGMeEY9AMFUJW2wrjwc2ls6eEVXXCMVwitLh0OXjJxkpRemntPoe1j9tVtJZEHF+1HigPRcpcevwGnvh9THVl492vR3QbflvT+hOba6sabj45erBdW+QGPs/jiKXlKUpfVszsmmtVUwrX5YpFMBMllMlgIAAoBolFIgpDQhoDHlUu2tOD7tkH3oP3nP5dlluROVyalvXd9n3HSo1c7Bryl3vBauUuvxA54DNkYt2O9WwevaXFGEAACoQlZJRhFyk/JLbAk9vs+NuRCq3I8FS1Xv8z6sxYXZTTU8r5V/5PV4JaS0uiACWUyQBkjZIAAbABIohFIChkplAUhkoYD+Jgnh4s3uVEN+5a/sZhgay7PxE9qlfNtmeEIVx7tcYxXSK0UIBiAQAxAxADJY2S2AhiAAGiRoCxkpjAoZIwGMkewGINiAbEAgGyWMQCJY2xAACAAGAAMYAA0MAABgAAIAAAEAAIAAlgAAIAAD/2Q=="
            alt=""
          />
          <div className="profile">
            <ArrowDropDownRounded className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
