import './showcase.styles.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';
import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export default function Showcase() {
    return(
        <div className='showcase-extended text-center'>
            <br /><br />
            <div className='showcase-extended-cont flex-column align-start justify center'>
            <Slide top>
            <p className='custom-showcase_p m-0 color-white font-nippo  font-bold'>Hi, my name is</p>
            </Slide>
               <Fade>
                    <h1 className='m-0 text-left color-third custom-showcase_h1 font-nippo'>
                    James Robert
                    </h1>
                </Fade>
               <Fade>
                <h2 className='text-left color-white font-nippo custom-showcase_h3 m-0'>I build things for <span> the Backend Development</span>.</h2>
                </Fade>
               <Fade left>
                <a href="" className='text-d-no user-s-no showcase-router-button font-nippo font-bold color-advanced'>Check Resume</a>
                </Fade>
            </div>
            <BsChevronDoubleDown className='scroll-frame-svg'/>
        </div>
    )
}