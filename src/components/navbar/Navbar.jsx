import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss";
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation()
    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll",isActive);
        }
    },[]);

    const currentUser= {
        id:1,
        username:"manu madhav",
        isSeller:true
    }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                   <span className='text'>Gigger</span>
                </Link>
                {/* <span className='dot'>.</span> */}
            </div>
            <div className="search">
                <div className="searchInput">
                  <img src="./img/search.png" alt="" />
                </div>
                  <input type="text" placeholder='Try "building mobil app"' className='inpmid' />
                <button>Search</button>
              </div>
            <div className="links">
                <span>Gigger Business</span>
                <span>Explore</span>
                <span>English</span>
                <Link to="/login" className='link'>
                <span>Login</span>
                </Link>
                <Link to="/signup" className='link'>
                <span>Register</span>
                </Link>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg" alt="" />
                        <span>{currentUser?.username}</span>
                        {open  && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                    <Link className='link' to="/mygigs">Gigs</Link>
                                    <Link  className='link' to ="/add">Add new Gig</Link>
                                    </>
                                )}
                                <Link  className='link' to="/orders">Orders</Link>
                                <Link  className='link' to="/messages">Messages</Link>
                                <Link  className='link' to="/">Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/") && (
          <>
            <hr />
            <div className="menu">
            <Link  className='link' to="/">
                Web devolopment
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            <Link  className='link' to="/">
                UI/UX design
            </Link>
            </div>
            <hr />
          </>
        )}
    </div>
  );
};

export default Navbar;