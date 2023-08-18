import React from 'react';
import './HeroSection.css';
import Button from '@mui/material/Button'; 

export default function HeroSection() {

    return(
        <div>
            <div className='hero--container'>

                <div className='hero--layout'>
                    <div className='hero--centre'>

                        <p className='hero--header'>Hi, I'm John Smith</p>
                        <div className='hero--box'>

                        <p className='hero--description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>

                        <Button variant="contained" className='hero--button' href='/projects'>Projects</Button>
                        </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}