import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage' >
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>ABSTRACT</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>IMPRESSIONISM</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>POP-ART</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>SURREALISM</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'>MODERM ART</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>

);

export default HomePage;