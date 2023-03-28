import './skills.styles.scss';
import { DiJava, DiPython, DiPhp, DiMysql, DiPostgresql, DiSqllite, DiLaravel, DiSymfonyBadge, DiRubyRough, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { BsServer } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'
import { SiFlask } from 'react-icons/si'
import { BsGit } from 'react-icons/bs';
import { TbBrandFramerMotion, TbBrandDjango } from 'react-icons/tb';
import Slide from 'react-reveal/Slide';
 
export default function Skills() {
    return(
        <div className='home-element-skills-component-router text-center'>
            <Slide left>
            <h1 className='first-content-element color-third font-bold font-nippo text-left'>Skills</h1>
            </Slide>
            <div className="router-skills-container-custom_element flex-row flex-wrap align-center justify-center">
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiPython/>
                    <h2 className='font-nippo font-bold'>Python</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiJava/>
                    <h2 className='font-nippo font-bold'>Java</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <IoLogoJavascript/>
                    <h2 className='font-nippo font-bold'>JavaScript</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiPhp/>
                    <h2 className='font-nippo font-bold'>PHP</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiMysql/>
                    <h2 className='font-nippo font-bold'>MySQL</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiPostgresql/>
                    <h2 className='font-nippo font-bold'>PostgreSQL</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiSqllite/>
                    <h2 className='font-nippo font-bold'>litSQL</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiLaravel/>
                    <h2 className='font-nippo font-bold'>Laravel</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiSymfonyBadge/>
                    <h2 className='font-nippo font-bold'>Symfony</h2>
                </div>
                </Slide>
               <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiRubyRough/>
                    <h2 className='font-nippo font-bold'>Ruby</h2>
                </div>
                </Slide>
                <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <TbBrandDjango/>
                    <h2 className='font-nippo font-bold'>Django</h2>
                </div>
                </Slide>
                <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <SiFlask/>
                    <h2 className='font-nippo font-bold'>Flask</h2>
                </div>
                </Slide>
                <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiNodejsSmall/>
                    <h2 className='font-nippo font-bold'>NodeJS</h2>
                </div>
                </Slide>
                <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <DiMongodb/>
                    <h2 className='font-nippo font-bold'>MongoDB</h2>
                </div>
                </Slide>
                <Slide bottom>
                <div className="router-skills_item flex-column justify-center align-center color-third">
                    <BsServer/>
                    <h2 className='font-nippo font-bold'>Server</h2>
                </div>
                </Slide>
            </div>
        </div>
    )
}