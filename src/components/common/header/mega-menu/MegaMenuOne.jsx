import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../../../../assets/images/BannerLogo.png"

const MegaMenuOne = () => {
  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo d-flex justify-content-center" >
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brnad */}

      <li className="nav-item  dropdown mega-dropdown">
        {/* <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        > */}
        <Link to="/"  className="nav-link"> Home</Link>
        {/* </button> */}
        {/* <ul className="dropdown-menu">
          <li className="pb-20">
            <div className="row gx-3">
              {homeDropdownData.map((val) => (
                <div
                  className={`col-lg-2 mt-15 border-0 text-center home-sub-menu ${val.cursorEvent}`}
                  key={val.id}
                >
                  <Link to={val.routeLink} className="d-block img-meta">
                    <img src={val.img} alt="homeimage" className="tran4s" />
                    <div className={val.comingSoonClass}>
                      <span>{val.comingSoon}</span>
                    </div>
                  </Link>
                  <CustomLink to={val.routeLink} className="dropdown-item">
                    <span>{val.title}</span>
                  </CustomLink>
                </div>
              ))}
            </div> */}
        {/* End .row */}
        {/* </li>
        </ul> */}
      </li>
      {/* End Home dropdown */}

      <li className="nav-item dropdown mega-dropdown-md">
        {/* <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        > */}
        <Link to='/founder'  className="nav-link">Founder</Link>
        {/* </button> */}
        {/* <ul className="dropdown-menu">
          <li>
            <div className="row">
              {pagesMegaMenuData.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul> */}
      </li>
      {/* End about dropdown */}

      <li className="nav-item dropdown mega-dropdown-sm">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          routeLink="/course"
        >
          Courses
        </button>
        <ul className="dropdown-menu">
          <li>
              {/* {elementsMegaMenuData.map((item) => (
                <div key={item.id}> */}
                  <div className="menu-column">
                    {/* <h6 className="mega-menu-title">{item.title}</h6> */}
                    <ul className="style-none mega-dropdown-list">
                      {/* {item.menuList.map((list, i) => ( */}
                      <li>
                          <CustomLink
                            to="/course"
                            className="dropdown-item"
                          >
                            <span>Courses</span>
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to="/nanneri"
                            className="dropdown-item"
                          >
                            <span>Nanneri</span>
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to="/trust-course"
                            className="dropdown-item"
                          >
                            <span>Trust Course</span>
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to="/first-sem"
                            className="dropdown-item"
                          >
                            <span>First Sem</span>
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to="/second-sem"
                            className="dropdown-item"
                          >
                            <span>Second Sem</span>
                          </CustomLink>
                        </li>

                        <li>
                          <CustomLink
                            to="/teachers-practice-course"
                            className="dropdown-item"
                          >
                            <span>Teachers Practice Course</span>
                          </CustomLink>
                        </li>
                        
                        <li>
                          <CustomLink
                            to="/guru-practice-course"
                            className="dropdown-item"
                          >
                            <span>Guru Practice Course</span>
                          </CustomLink>
                        </li>
                      {/* ))} */}
                    </ul>
                  </div>
                {/* </div>
              ))} */}
            {/* End .row */}
          </li>
        </ul>
      </li>
      {/* End elements dropdown */}

      {/* <li className="nav-item dropdown mega-dropdown">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Portfolio
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row justify-content-between">
              {portfolioMegaMenuData.map((item) => (
                <div className="col-lg-2" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li> */}
      {/* End portfolio dropdown */}



      {/* <li className="nav-item dropdown mega-dropdown-sm">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Shop
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {shopDropdownData.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li> */}
      {/* End shop dropdown */}

      <li className="nav-item dropdown mega-dropdown-md">
       
        <Link to='/testimonial'  className="nav-link">Testimonial</Link>
       
      </li>     

         <li className="nav-item dropdown mega-dropdown-md">
       
        <Link to='/life-in-gyanodhayam'  className="nav-link">Life in Gyanodhayam</Link>
       
      </li>       

        <li className="nav-item dropdown mega-dropdown-md">
       
        <Link to='/gallery'  className="nav-link">Gallery</Link>
       
      </li>       

        <li className="nav-item dropdown mega-dropdown-md">
       
        <Link to='/media'  className="nav-link">media & Press</Link>
       
      </li>                  

      {/* <li className="nav-item dropdown mega-dropdown-sm">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Media & Press
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {blogDropdownData.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li> */}
      {/* End blog dropdown */}
    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
