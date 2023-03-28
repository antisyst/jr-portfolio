import './about.styles.scss';
import * as React from "react";
import qrCode from '../../qr.code.svg';
import { motion } from "framer-motion";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



export default function About() {
    
    return(
        <div className='about-router-home-component text-center'>
            <Slide left>
            <h1 className='text-left color-third font-nippo first-content-element font-bold'>About</h1>
            </Slide>
            <div className='about-container-custom'>
            <Fade left>
                <div className='text-left'>
                    <p className='text-left color-third font-nippo '>
                    I have been in the field of Backend Development since childhood. I quickly learn and apply new technologies. I love working with new technologies. I am completely proficient in Backend Development. I'm always learning new things, even as you read this :) My goal is to give the best experience and work. So far I have completed all projects flawlessly and 100% successfully.
                    </p>
                </div>
                </Fade>
                <Fade right>
                <div className='second-about-element'>
                </div>
                </Fade>
            </div>
        </div>
    )
}