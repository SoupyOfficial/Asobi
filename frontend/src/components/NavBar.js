import React from 'react';
import { Navbar, Dropdown } from 'react-bootstrap'
import Login from './Login'
import Register from './Register';
import '../App.css'
import LoggedInName from './LoggedInName';
import Asobi from '../Asobi.png';
import PageTitle from './PageTitle';

function NavBar() {    

  return (
    <>
    <head>
      <link rel='stylesheet' href='NavBar.css'></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
    </head>

    <body>
      <nav style=
        {{ 
          display:"flex",
          flexDirection: "row",
          alignItems:"center",
          padding:"5px 10px",
          
          //alignSelf: "stretch",
          //justifyContent:"left", 
          
          minHeight:"8vh",
          backgroundColor: "#484848",
          fontFamily:"Poppins, sans-serif",
          fontSize: "28px"
        }}>

        <div class="logo">
          <img src={Asobi} alt={PageTitle} style={{ height:"3rem", width: "10rem"}}/>
        </div>

        <ul class="navLinks" style=
          {{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            padding: "3px",

            flex: "none",
            flexGrow: "1",
            margin: "0px 5px",
          }}>

          <li style=
          {{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px",

            flex: "none",
            alignSelf: "stretch",
            flexGrow: "0",
            margin: "0px 3px",
            }}> 
            
            <a href="/profile" style=
            {{
              flex: "none",
              order: "0",
              flexGrow: "0",
              margin: "0px 5px",
              
              color:"#AAAAAA", 
              textDecoration:"none", 
              display:"block",
              padding:"8px",
            }}>
              Home
            </a>
            
            <a href="/search" style=
            {{
              flex: "none",
              order: "1",
              flexGrow: "0",
              margin: "0px 5px",
              
              color:"#AAAAAA", 
              textDecoration:"none", 
              display:"block",
              padding:"8px",
            }}>
              Search
            </a>

            <a href="/movie" style=
            {{
              flex: "none",
              order: "2",
              flexGrow: "0",
              margin: "0px 5px",
              
              color:"white", 
              textDecoration:"none", 
              display:"block",
              padding:"8px",
            }}>
              Movies
            </a>

            <a href="/discover" style=
            {{
              flex: "none",
              order: "3",
              flexGrow: "0",
              margin: "0px 5px",
              
              color:"white", 
              textDecoration:"none", 
              display:"block",
              padding:"8px",
            }}>
              Discover
            </a>

          </li>

        </ul>

        <div className="navbar-nav ms-auto">
              {/* Check Login Status */}
            <div className='LoggedIn'>
                    {localStorage.getItem('user_data') ? <LoggedInName/> : 
                  
                <div className="navbar-nav ms-auto" style=
                {{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "0px",
                }}>
                    {/* Login Button */} 
                  <Dropdown align='end'>
                    <Dropdown.Toggle style={{ borderRadius:10, margin: 5 }}>Login</Dropdown.Toggle>
                    <Dropdown.Menu style={{ borderRadius: 10, borderColor: '484848' }}>
                      <Login/>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Register Button */} 
                  <Dropdown align='end' style={{ position: 'sticky'}}>
                    <Dropdown.Toggle style={{ borderRadius:10, margin: 5 }}>Sign Up</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Register/>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                    }
            </div>
          </div>  

      </nav>
    </body> 
    </>
  )
}

export default NavBar;