import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import NavButton from './NavButton';
import { FaCaretDown } from 'react-icons/fa';
const NavBarManu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About Us',
    link: '#',
  },

  {
    id: 3,
    title: 'Insights',
    link: '#',
  },
  {
    id: 4,
    title: 'Marketplace',
    link: '#',
  },
  {
    id: 5,
    title: 'Events',
    link: '#',
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: 'Dashboard & Tech',
    link: '/#',
  },
  {
    id: 2,
    name: 'Web Development',
    link: '/#',
  },
  {
    id: 3,
    name: 'Marketing & PR',
    link: '/#',
  },
  {
    id: 4,
    name: 'Reputation Management',
    link: '/#',
  },
  {
    id: 5,
    name: '24/7 Customer Support',
    link: '/#',
  },
  {
    id: 6,
    name: 'Payment Solutions',
    link: '/#',
  },
  {
    id: 7,
    name: 'Consulting Services',
    link: '/#',
  },
  {
    id: 8,
    name: 'Trading Platforms',
    link: '/#',
  },
  {
    id: 9,
    name: 'Broker & Liquidity Solutions',
    link: '/#',
  },
  {
    id: 10,
    name: 'Risk Management Solutions',
    link: '/#',
  },
  {
    id: 11,
    name: 'HR & Recruitment',
    link: '/#',
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
            <div className="w-60 pl-4 text-3xl">
              <img src="logo.svg" alt="" className=" text-white " />
            </div>
            {/* manu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-9 text-gray-600">
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
                {/* Simple Dropdown manu */}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] py-2 pr-32 hover:text-blue-500 text-white  font-semibold text-xl"
                  >
                    Services
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute  hidden group-hover:block w-[190px] text-white bg-gray-900 rounded-md  p-2 shadow-md text-base">
                    <ul>
                      {DropdownLinks.map(data => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="hover:bg-primary/50 w-full inline-block p-2 hover:text-blue-500 duration-200"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* contact */}
                <motion.div className=" flex justify-center md:justify-start ">
                  <button className="primary_btn flex items-center gap-2 bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900 border-2 border-white py-2 px-6">
                    Get In Touch
                  </button>
                </motion.div>
              </ul>
            </div>

            {/* mobile view manu responsive */}

            <div
              className="md:hidden pr-8 text-sky-300"
              onClick={() => setOpen(!open)}
            >
              <FaBars className="text-4xl" />
            </div>
          </div>
        </nav>
        <NavButton open={open} />
      </div>
    </section>
  );
};

export default Navbar;
