import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { TbMenu } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.styles.scss";
import Fade from 'react-reveal/Fade';
import { motion, useScroll, useSpring } from "framer-motion";
import ImportLogo from "../../logo";

function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  return (
   <div className="navigation-element-top-cont flex-row align-center justify-between">
    <div>
      <Link to='/'>
      <ImportLogo/>
      </Link>
    </div>
    <div>
      <Fade top>
        <Link to='/' className="text-d-no user-s-no font-nippo font-bold custom-nav-router-element">Resume</Link>
      </Fade>
    </div>
   </div>
  );
}

export default Navbar;