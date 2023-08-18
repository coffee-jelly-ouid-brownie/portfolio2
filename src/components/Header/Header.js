import React from 'react';
import Icon from '../../images/icon.png'
import './Header.css';
import { Link } from 'gatsby';

export default function Header() {
    return(
        <div>
            <header className='header--active'>
                <div className='header--base'>
                    <div className='header--icon'>
                        <img src={Icon} alt='Carys Leung'/>
                    </div>
                    
                
                    <div className='header--navbar'>
                        
                            <Link className='header--home' to='#'>Home</Link>
                            <a className='header--about'>About</a>
                    </div>
                </div>
            </header>
        </div>
    )
}