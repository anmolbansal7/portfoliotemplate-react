import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='The Lean Programmer | Public speaker | YouTuber | Blogger | Uplifting the student community in the field of tech and personal growth'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Sub Heading 1</h3>
                    <p className='about-details'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque id voluptatibus aperiam veritatis optio unde impedit deserunt, dolores enim vero, commodi eligendi quisquam non, dolor qui sequi. Voluptatibus, at aut.
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Sub Heading 2</h3>
                    <p className='about-details'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem, saepe maxime porro eum itaque, dolorem culpa beatae labore vel non repellat soluta ex minus inventore impedit voluptate assumenda nulla.
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Sub Heading 3</h3>
                    <p className='about-details'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea non numquam quidem eum est delectus corporis, voluptatum deserunt cumque molestias blanditiis modi dicta dolor aliquid quaerat itaque eos quae qui.
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
