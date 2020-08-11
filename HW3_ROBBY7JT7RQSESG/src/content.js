import React from 'react';

import './css/global.css';
import './css/layout.css';
import './css/components.css';
import './css/sample-wallpaper.css';

import Venom from './img/venom-1.jpg'
import Hulk from './img/hulk-1.jpg'
import Venom2 from './img/venom-2.jpg'
  


function Content() {
    return(
        <header class="header">
            <div class="container">
                <h1 class="title">Mavel's Fearless</h1>
                <p class="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                molestias earum eveniet.</p>
                <div class="search-bar">
                    <input type="search" placeholder="Search" />
                </div>

                <div class="sample-wallpaper">
          
                    <article class="wallpaper">
                        <img src={Venom} alt="Wallpaper #1" class="wallpaper" />
                    </article>

          
                    <article class="wallpaper">
                        <img src={Hulk} alt="Wallpaper #1" class="wallpaper" />
                    </article>

                    <article class="wallpaper">
                        <img src={Venom2} alt="Wallpaper #1" class="wallpaper" />
                    </article>
        </div>
      </div>
    </header>

    )
    
}
export default Content