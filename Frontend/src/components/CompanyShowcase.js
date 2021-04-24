import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import Bismilla from "../logos/logos/bismilla.jpg";
import Venus from "../logos/logos/venus.png";
import Three from "../logos/logos/ThreeStar.png";
import Room from "../logos/logos/Room.png";
const CompanyShowcase = () => {
  return (

    <div id="grid" className="showcase">
    <div> <Link to="/bismilla">
           <img src={Bismilla} alt="Snow" id="prod-img" />
         </Link></div>
    <div>
    <Link to="/bismilla">
           <img src={Venus} alt="Forest" id="prod-img" />
         </Link>
    </div>
    <div>
    <Link to="/bismilla">
          <img src={Room} alt="Mountains" id="prod-img" />
         </Link>
    </div>
    <div>
    <Link to="/bismilla">
           <img src={Three} alt="Mountains" id="prod-img" />
         </Link>
    </div>
    </div>



    // <div className="container showcase">

    // <div className="row ">
    //   <div className="col col-lg-3 col-md-6 col-sm-12">
    //     <Link to="/bismilla">
    //       <img src={Bismilla} alt="Snow" id="prod-img" />
    //     </Link>
    //   </div>
    //   <div className="col col-lg-3 col-md-6 col-sm-12">
    //     <Link to="/bismilla">
    //       <img src={Venus} alt="Forest" id="prod-img" />
    //     </Link>
    //   </div>
    //   <div className="col col-lg-3 col-md-6 col-sm-12">
    //     <Link to="/bismilla">
    //       <img src={Room} alt="Mountains" id="prod-img" />
    //     </Link>
    //   </div>
    //   <div className="col col-lg-3 col-md-6 col-sm-12">
    //     <Link to="/bismilla">
    //       <img src={Three} alt="Mountains" id="prod-img" />
    //     </Link>
    //   </div>
    // </div>
  
    // </div>
  );
};

export default CompanyShowcase;
