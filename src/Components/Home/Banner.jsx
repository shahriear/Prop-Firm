import React, { useState } from 'react';

import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Banner = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 pt-16">
      <div className=" container flex justify-evenly py-4 md:pt-4 ">
        <div className="w-1/2 pt-12 ">
          <h1 className="text-4xl font-primary text-white font-semibold ">
            Launch Your Prop Firm in
            <span className="pl-2 bg-gradient-to-r from-cyan-200 via-sky-500 to-indigo-400 bg-clip-text text-transparent">
              10 Days.
            </span>
            <br /> Keep
            <span className="px-2 bg-gradient-to-r from-cyan-200 via-sky-500 to-indigo-400 bg-clip-text text-transparent">
              100%
            </span>
            of Your Profits!
            <br /> We Handle the Rest!
          </h1>
          <p className="text-xl text-white font-semibold py-7">
            YourPropFirm turnkey solution speeds up new and existing <br />
            prop firms, eliminating the hassle of managing multiple <br />
            vendors and ensuring you keep all your earnings.
          </p>
          {/* button_one */}
          <div className="flex gap-10">
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                className=" flex justify-center md:justify-start"
              >
                <button className="primary_btn flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900 border border-white rounded-md">
                  Get In Touch
                </button>
              </motion.div>
            </div>
            {/* button_two */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                className=" flex justify-center md:justify-start"
              >
                <button className="primary_btn flex items-center gap-2 font-bold text-xl border border-white rounded-md hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-[600px]">
          <img src="/banner.webp" alt="banner-mg" />
        </div>
      </div>

      <div>
        <div className="text-center flex pb-12 justify-evenly ">
          <div>
            <h3 className="text-[38px] font-primary text-white font-semibold ">
              <span className=" bg-gradient-to-tr from-blue-200 via-blue-400 to- bg-clip-text text-transparent">
                US$
                <CountUp delay={0.2} end={15} duration={10} />
                M+
              </span>
            </h3>

            <p className="text-white font-primary font-semibold text-[18px]">
              Prop Firm Revenue
            </p>
          </div>
          <div>
            <h3 className="text-[38px] font-primary text-white font-semibold">
              <span className="counterUp bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent">
                <CountUp delay={0.2} end={50} duration={7} />+
              </span>
            </h3>
            <p className="text-white font-primary font-semibold  text-[18px]">
              Prop Firms Clients
            </p>
          </div>
          <div>
            <h3 className="text-[38px] font-primary text-white font-semibold">
              <span className="counterUp bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent">
                <CountUp delay={0.2} end={45} duration={7} />+
              </span>
            </h3>
            <p className="text-white font-primary font-semibold text-[18px]">
              Team Members
            </p>
          </div>
          <div>
            <h3 className="text-[38px] font-primary text-white font-semibold">
              <span className=" CountUp bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent">
                <CountUp delay={0.2} end={125} duration={6} />
                K+
              </span>
            </h3>
            <p className="text-white font-primary font-semibold text-[18px]">
              Trading Accounts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
