import { Link, useLocation } from "react-router-dom";
import logo from "../assets/lvc-icon-removebg-preview.png";
import search from "../assets/white-search-logo.png";
import search2 from "../assets/Search-logo-no-background.png";
import "../style.css";
import { useEffect, useState,useRef  } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const handleNavAction = (e) => {
  const Bootstrap = window.bootstrap;
  if (!Bootstrap) return;

  const nav = document.getElementById("navbarNav");
  const ddToggle = document.getElementById("itServicesDropdown");
  const careersDdToggle = document.getElementById("careersDropdown");

  // IT Services dropdown toggle
  if (e?.currentTarget?.id === "itServicesDropdown" && ddToggle) {
    Bootstrap.Dropdown.getOrCreateInstance(ddToggle).toggle();
    return;
  }
  if (e?.currentTarget?.id === "careersDropdown" && careersDdToggle) {
    Bootstrap.Dropdown.getOrCreateInstance(careersDdToggle).toggle();
    return;
  }

  //Close dropdown and navbar on any other link click
  if (ddToggle) {
    Bootstrap.Dropdown.getOrCreateInstance(ddToggle).hide();
  }
  if (nav) {
    Bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false }).hide();
  }
  if (careersDdToggle) {
    Bootstrap.Dropdown.getOrCreateInstance(careersDdToggle).hide();
  }
  if (nav) {
    Bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false }).hide();
  }
};

const toggleNav = () => {
  const nav = document.getElementById("navbarNav");
  if (!nav || !window.bootstrap) return;
  window.bootstrap.Collapse.getOrCreateInstance(nav, {
    toggle: false,
  }).toggle();
};

const searchData = [
  {
    name: "Who We Are",
    link: "/about",
    location: "Who We Are page",
  },
  {
    name: "Insights",
    link: "/insights",
    location: "Insights page",
  },
  {
    name: "Blog",
    link: "/blog",
    location: "Blog page",
  },
  {
    name: "Projects",
    link: "/projects",
    location: "Projects page",
  },
  {
    name: "Services",
    link: "/services",
    location: "Services page",
  },
  {
    name: "Products",
    link: "/products",
    location: "Products page",
  },
  {
    name: "Careers",
    link: "/careers",
    location: "Careers page",
  },
  {
    name: "internships",
    link: "/careers-intern",
    location: "Careers page",
  },
  {
    name: "Contact Us",
    link: "/contact",
    location: "Contact Us page",
  },
  {
    name: "FairJob",
    link: "https://www.lvcfairjob.com/",
    location: "Projects and Home pages",
  },
  {
    name: "LVC Academy",
    link: "https://www.lvcacademy.com/",
    location: "Home page",
  },
  {
    name: "Spotlight Media",
    link: "https://www.lvcspotlightmedia.com/",
    location: "Home page",
  },
];

const Header = () => {
  const [res, setRes] = useState("");
  const location = useLocation();
  const inputRef = useRef(null);

  const searchBarVals = (e) => {
    setRes(e.target.value);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

useEffect(() => {
  const modal = document.getElementById("search-bar-modal");

  if (!modal) return;

  modal.addEventListener("shown.bs.modal", () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
}, []);
  return (
    <header>
      {/* search bar modal, needs to be up top so it doesn't have any interference when appearing*/}
      <div
        className="modal fade"
        id="search-bar-modal"
        tabIndex="-1"
        aria-labelledby="searchBarModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            id="modal-content"
            className="modal-content"
            style={{ background: "#1e2222" }}
          >
            {/* <div className="modal-body"> */}
            {/* <div className="search-bar-container"> */}
            <div className="search-bar-wrapper">
              <img
                className="img-in-search-bar"
                alt="interactive search logo"
                src={search2}
              />

              <input
                className="search-bar"
                ref={inputRef}
                style={{outline:"none",border:"none",color:"white",fontSize:"18px",}}
                type="text"
                value={res}
                onChange={searchBarVals}
                placeholder="Search Here..."
              />

              <p className="search-close" data-bs-dismiss="modal">
                ✕
              </p>
            </div>
            {/* </div> */}
            {/* search bars suggestions when user types, filters for characters used in res useState */}
            <div className="search-dropdown">
              {searchData
                .filter((data) => {
                  let searchTerm = res.toLowerCase();
                  let title = data.name.toLowerCase();
                  return searchTerm && title.startsWith(searchTerm);
                })
                .map((data) => {
                  return (
                    <Link
                      className="suggested-search-link"
                      to={data.link}
                      onClick={() => setRes("")}
                    >
                      <div
                        data-bs-dismiss="modal"
                        className="suggested-search-dropdown"
                        style={{ paddingLeft: "50px" }}
                      >
                        {data.name}
                      </div>
                      <div
                        data-bs-dismiss="modal"
                        className="suggested-search-dropdown"
                        style={{ textAlign: "left" }}
                      >
                        <p
                          style={{
                            color: "rgba(74, 74, 74, 1)",
                            margin: "0px",
                          }}
                        >
                          Found in the {data.location}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg custom-navbar  sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={handleNavAction}>
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>

          {/* search bar button that opens search modal */}
          <button
            className="search-bar-button"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#search-bar-modal"
          >
            <img src={search} alt="search bar" id="search-bar-logo" />
          </button>

          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered navigation links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={handleNavAction}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/insight"
                  className="nav-link"
                  onClick={handleNavAction}
                >
                  Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link" onClick={handleNavAction}>
                  Blog
                </Link>
              </li>
              {/* NEED TO DO: Add a projects component/page */}
              <li className="nav-item dropdown">
                <button
                  id="itServicesDropdown"
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  aria-expanded="false"
                  onClick={handleNavAction}
                >
                  IT Services
                </button>

                {/* IMPORTANT: menu is a child of the same li.nav-item.dropdown */}
                <ul
                  className="dropdown-menu"
                  aria-labelledby="itServicesDropdown"
                >
                  <li>
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={handleNavAction}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="dropdown-item"
                      onClick={handleNavAction}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link"
                  onClick={handleNavAction}
                >
                  Products
                </Link>
              </li>
              {/* NEED TO DO: Add a careers component/page */}
              <li className="nav-item dropdown">
                {/* <Link to="/careers" className="nav-link" onClick={handleNavAction}>
                  Careers
                </Link> */}

                <button
                  id="careersDropdown"
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  // onClick={handleNavAction}
                >
                  Careers
                </button>

                <ul className="dropdown-menu" aria-labelledby="careersDropdown">
                  <li>
                    <Link
                      to="/careers"
                      className="dropdown-item"
                      onClick={handleNavAction}
                    >
                      Full Time Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers-intern"
                      className="dropdown-item"
                      // onClick={handleNavAction}
                    >
                      Internships
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={handleNavAction}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
