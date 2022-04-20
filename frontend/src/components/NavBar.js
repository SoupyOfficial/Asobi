import React from 'react';
import { Dropdown } from 'react-bootstrap'
import Login from './Login'
import Register from './Register';
import '../App.css'
import LoggedInName from './LoggedInName';
import Asobi from '../Asobi.png';

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

            <form className='navSearch' id='search-form' method='get' action={buildPathToSearch()}>
              <input className='navSearchBar' id='search-input' type="search" name='search-key' placeholder='&#x1F50D;' /><br />
              <button type='submit'> Search </button>
            </form>

          </li>

        </ul>

        <div className="navbar-nav ms-auto">
          {/* Check Login Status */}
          <div className='LoggedIn'>
            {localStorage.getItem('user_data') ? <LoggedInName /> :
              <div className="navbar-nav ms-auto" style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
              }}>

                {/* Login Button */}
                <Dropdown align='end'>
                  <Dropdown.Toggle style={{ borderRadius: 10, margin: 5 }}>Login</Dropdown.Toggle>
                  <Dropdown.Menu style={{
                    backgroundColor: '#fff0', borderWidth: '0', minWidth: '50vh', borderRadius: 10,
                    borderColor: '484848', padding: '0px'
                  }}>
                    <Login />
                  </Dropdown.Menu>
                </Dropdown>

                {/* Register Button */}
                <Dropdown align='end' style={{ position: 'sticky' }}>
                  <Dropdown.Toggle style={{ borderRadius: 10, margin: 5, backgroundColor: '#fff0' }}>Sign Up</Dropdown.Toggle>
                  <Dropdown.Menu style={{ backgroundColor: '#fff0', borderWidth: '0', minWidth: '50vh', padding: '0px' }}>
                    <Register style={{ flexGrow: '1', minWidth: '100vh' }} />
                  </Dropdown.Menu>
                </Dropdown>
              </div>}
          </div>
        </div>

      </nav>
      </>
  )
}

export default NavBar;