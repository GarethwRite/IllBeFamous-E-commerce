import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage' >
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>ABSTRaCT</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>IMPRESSIONism</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>POP-ArT</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>SURREALisM</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>MODErM ART</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>

);

export default HomePage;