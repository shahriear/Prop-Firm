import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const NavBarManu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Products',
    link: '#',
  },
  {
    id: 3,
    title: 'About',
    link: '#',
  },
  {
    id: 4,
    title: 'Shope',
    link: '#',
  },
  {
    id: 5,
    title: 'Contact',
    link: '#',
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 pt-2">
      <div className="container">
        <nav>
          <div className=" flex justify-between py-4 md:pt-4 items-center">
            {/* Logo section */}
            <div className="w-60">
              <img src="logo.svg" alt="" className=" text-white " />
            </div>
            {/* manu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-600">
                {NavBarManu.map(manu => (
                  <li key={manu.id}>
                    <a
                      href={manu.link}
                      className="hover:text-blue-500 text-white hover:shadow-[0_3px_0_-1px_white] font-semibold text-xl"
                    >
                      {manu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* contact */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                className=" flex justify-center md:justify-start"
              >
                <button className="primary_btn flex items-center gap-2 bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900 border-2 border-white">
                  Get In Touch
                </button>
              </motion.div>
            </div>
            {/* mobile view manu responsive */}

            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <FaBars className="text-4xl" />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
