import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';

const NavButton = ({ open }) => {
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
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 md:hidden "
        >
          <div className="bg-gray-900 text-xl font-semibold text-white pl-6 py-10 m-4 rounded-3xl">
            <ul className="flex flex-col gap-4  cursor-pointer ">
              <li className="hover:text-blue-500">Home</li>
              <li className="hover:text-blue-500">About Us</li>
              <li className="group relative cursor-pointer ">
                <a
                  href="#"
                  className="flex items-center gap-[2px] py-2 pr-32 hover:text-blue-500 text-white  font-semibold text-xl"
                >
                  Services
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute  hidden group-hover:block w-[215px] text-white bg-gray-900 rounded-xl p-4 shadow-md text-base border">
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
              <li className="hover:text-blue-500">Insights</li>
              <li className="hover:text-blue-500">Marketplace</li>
              <li className="hover:text-blue-500">Events</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavButton;
