import * as React from "react";
import { motion } from "framer-motion";

export default function ImportLogo() {
    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      };
    return(
      <svg width="121.5" height={70} viewBox="0 0 121.5 70" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm" fill="#ffffff" style={{stroke: '#ffffff', strokeWidth: '0.25mm', fill: '#ffffff'}}><path d="M 85.5 70 L 85.5 49.3 L 99.3 49.3 L 101.5 51.5 L 101.5 70 L 121.5 70 L 121.5 48.6 L 114 41.1 L 121.1 34 L 121.1 10.9 L 110.2 0 L 65.5 0 L 65.5 70 L 85.5 70 Z M 38.6 70 L 49.5 59.1 L 49.5 0 L 29.5 0 L 29.5 52 L 20 52 L 20 38.5 L 0 38.5 L 0 59.1 L 10.9 70 L 38.6 70 Z M 101.1 31.1 L 98.9 33.3 L 85.5 33.3 L 85.5 16 L 101.1 16 L 101.1 31.1 Z" vectorEffect="non-scaling-stroke" /></g></svg>
    )
}