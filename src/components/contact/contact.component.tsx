import './contact.styles.scss';
import React from 'react';
import Slide from 'react-reveal/Slide';

export default function Contact() {
    return(
        <div className='router-element-contact-last-child text-center' id='contact'>
            <Slide bottom>
            <h1 className='text-center first-content-element color-third font-nippo font-bold'>Contact</h1>
            </Slide>
            <Slide bottom>
            <h2 className='text-center color-third font-chakra'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h2>
            </Slide>
            <Slide bottom>
            <a href="mailto:ramazannazimli@gmail.com" className='text-center user-s-no user-d-no custom-last-say-button font-nippo font-bold'>Say Anything</a>
            </Slide>
        </div>
    )
}