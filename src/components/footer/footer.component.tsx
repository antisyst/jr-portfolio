import './footer.styles.scss';
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return(
        <div className='footer-last-child-element-bottom text-center'>
             <Fade bottom>
            <h3 className='color-white font-chakra '>Designed & Developed by <a href='' className='color-third font-bold font-nippo user-s-no'>Ramazan Azimli</a></h3>
            <p className='color-third font-nippo font-bold text-center'>Copyright 2023 ©</p>
            </Fade>
        </div>
    )
}