import React from 'react';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <span>Tray Dev</span>
            <div className="social">
                <a href="https://www.facebook.com/tray.pearce"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/ilike3p/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/tray-pearce-04018a20/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/ilike3p"><img src="/github.png" alt="" /></a>

            </div>
        </div>
        <div/>
    )
}

export default Navbar