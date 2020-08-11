import React from 'react';
import './css/layout.css';
import './css/global.css';

function Navbar() {
    return(
        <nav class="navbar">
            <div class="container">
                <a href="#">Hulk</a>
                <a href="#" class="logo is-active">Mavel</a>
                <a href="#">Venom</a>
            </div>
        </nav>
    )
    
}
export default Navbar