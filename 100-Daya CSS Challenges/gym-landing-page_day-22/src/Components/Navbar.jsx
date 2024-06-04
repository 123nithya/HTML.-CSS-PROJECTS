import React from 'react'
import logo from "../Images/logo1.png"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="fitness" />
      </div>
      <div className="navbar-links">
        <ul>
            <motion.li
                whileHover={{
                    scale: 1.1,     
                }}
                transition={{duration:1, yoyo:'Infinity'}}
            >
                PROGRAMS
            </motion.li>
            <motion.li
                whileHover={{
                    scale: 1.1,     
                }}
                transition={{duration:1, yoyo:'Infinity'}}
            >
                MEMBERSHIPS
            </motion.li>
            <motion.li
                whileHover={{
                    scale: 1.1,     
                }}
                transition={{duration:1, yoyo:'Infinity'}}
            >
                TESTIMONIALS
            </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
