import React from "react";
import Main from '../images/mainlogo.png';
import cart from '../images/shopping-cart.png';
import user from '../images/user.png';

function Navbar(){
    return(
    <div>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:"pink", height:"20px"}}>
        <a class="navbar-brand" className="floatingbanner" href="/">Free shipping for orders above Rs.999</a> 
    </nav>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">
        <img src={Main} className="main"></img>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-suto">
          <li class="nav-item">
            <a class="nav-link" href="#">DRESSES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">JEWELERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHIRTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SUNGLASSES</a>
          </li>
        </ul>
        <a className="new" href="/BoutiqueGPT">Prompt Designing</a>
        <aside>
        <input class="form-control mr-sm-2" id="searchbar" type="search" placeholder="What am i wearing next ..." aria-label="Search" />
        <a href="/">
          <img src={cart} className="icon"></img>
        </a>
        <a href="/login">
          <img src={user} style={{right:"10px"}} className="icon"></img>
        </a>
        </aside>
        
      </div>
    </nav>
    </div>
    );
}

export default Navbar;