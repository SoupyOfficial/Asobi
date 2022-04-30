import React from 'react';
import { Dropdown } from 'react-bootstrap'
import Login from './Login'
import Register from './Register';
import '../App.css'
import LoggedInName from './LoggedInName';
import Asobi from '../Asobi.png';
import AsobiTransparent from "../Asobi-logos (4)/Asobi-logos_transparent.png";

//var search = '';

const app_name = 'asobi-1'
function buildPathToSearch()
{
    if (process.env.NODE_ENV === 'production') 
    {
        return 'https://' + app_name +  '.herokuapp.com/search';
    }
    else
    {        
        return 'http://localhost:3000/search';
    }

}

function NavBar() {    

  return (

    <>
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      
    </><nav>

        <div className="logo">
          <img src={Asobi} href="/home" />
        </div>

        <ul className="navLinks">

          <li>

            <a href="/home">
              Home
            </a>
          </li>

        </ul>

        <div style={{display:"flex", alignItems:"center"}}>
            <form className='navSearch' id='search-form' method='get' action={buildPathToSearch()}>
              <input className='navSearchBar' id='search-input' type="search" name='search-key' placeholder='&#x1F50D;' /><br />
              <button type='submit'> Search </button>
            </form>

            <div className="navbar-nav ms-auto">
              {/* Check Login Status */}
              <div className='LoggedIn'>
                {localStorage.getItem('user_data') ? <LoggedInName /> :
                  <div className="navbar-nav ms-auto" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px 10px"
                  }}>

                    {/* Login Button */}
                    <a className='loginButton' href='/login'>Login</a>

                    {/* Register Button */}
                    <a className='registerButton' href='/register'>Register</a>
                  </div>}
              </div>
            </div>
        </div>

      </nav>
      </>
  )
}

export default NavBar;