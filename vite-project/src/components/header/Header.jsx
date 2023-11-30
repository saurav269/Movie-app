import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/movix-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  
  //FOR NAVIGATION PURPOSE
  const navigationHandler=(type)=>{
    if(type === 'movie'){
      navigate("/explore/movie")
    }else if(type === "tv"){
      navigate("explore/tv")
    }else if(type === ""){
      navigate("/")
    }
    setMobileMenu(false)
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };


  //For serach query
  const serachQueryHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false)
      },1000)
    }
  };



  //FOR NAVBAR TRANSITIONING
  const controlNavbar=()=>{
    //console.log(window.scrollY)
    if(window.scrollY > 200){
      if(window.scrollY >  lastScrollY && !mobileMenu) {
        setShow("hide")
      }else{
        setShow("show")
      }
    }else{
      setShow("top")
    }
    setLastScrollY(window.scrollY)
  }

  //USE FOR SCROLLING FROM TOP
  useEffect(() => {
    window.scrollTo(0,0)
  },[location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar) 
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  },[lastScrollY])



  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" onClick={() => navigationHandler("")}/>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch  onClick={openSearch}/>
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {/* //CREATING HAMBURGER AND CLOSE MENU FOR RESPONSIVENESS */}
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

    { showSearch &&  <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={serachQueryHandle}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;
