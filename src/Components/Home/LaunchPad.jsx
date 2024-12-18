import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { TbCreditCardPay } from 'react-icons/tb';
import { PiTargetBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

const LaunchPad = () => {
  return (
    <section className="bg-black pt-16 pb-20">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center pb-28">
          <h2 className="text-white font-primary font-bold text-4xl leading-normal">
            Your Complete <br />
            <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent ">
              Prop Firm Launchpad
            </span>
          </h2>
          <p className="text-xl text-white font-semibold pt-4 ">
            Discover how our comprehensive services streamline your operations,
            providing a <br /> seamless and efficient experience from start to
            finish.
          </p>
        </div>
        {/* part_one */}
        <div className="flex gap-7 px-16">
          <div className="bg-blue-800/20 w-1/2 border border-gray-500 pt-14 pl-14 rounded-xl pb-72 hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
            <h2 className="text-white font-primary font-bold text-2xl ">
              Dashboard <br /> Technology and CRM
            </h2>
            <p className="text-xl text-white font-semibold pt-4 pb-10">
              Our all-in-one platform streamlines operations, <br /> automates
              tasks, and provides valuable data insights.
            </p>
            <img
              src="/one.png"
              alt="one-img"
              className="absolute right-0 bottom-0 left-32 bg-cover bg-center bg-no-repeat w-[560px]"
            />
          </div>

          <div className="bg-blue-800/20 w-1/2 border border-gray-500 pt-14 pl-14 rounded-xl pb-72 hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
            <h2 className="text-white font-primary font-bold text-2xl ">
              Dashboard <br /> Technology and CRM
            </h2>
            <p className="text-xl text-white font-semibold pt-4 pb-10">
              Our all-in-one platform streamlines operations, <br /> automates
              tasks, and provides valuable data insights.
            </p>
            <img
              src="/two.png"
              alt="two-img"
              className="absolute right-0 bottom-0 left-32 bg-cover bg-center bg-no-repeat w-[560px]"
            />
          </div>
        </div>
        {/* part-two */}
        <div className="py-7 px-16">
          <div className=" flex gap-7">
            <div className="bg-blue-800/20 w-2/6 border border-gray-500 pt-14 pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
              <IoIosPeople className="text-sky-400 text-6xl" />
              <h2 className="text-white font-primary font-bold text-2xl ">
                Broker Partners <br /> Network
              </h2>
              <p className="text-xl text-white font-medium pt-4 pb-12">
                Connect with the best brokers and <br /> liquidity providers,
                tailored to your <br /> needs. Leverage our expertise for <br />
                optimal selection.
              </p>
            </div>
            <div className="bg-blue-800/20 w-2/6 border border-gray-500 pt-14 pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
              <TbCreditCardPay className="text-sky-400 text-7xl pb-4" />
              <h2 className="text-white font-primary font-bold text-2xl ">
                Payment <br /> Solutions
              </h2>
              <p className="text-xl text-white font-medium pt-4 pb-12">
                Our integrated payment solutions <br /> ensure smooth and secure
                <br />
                transactions for both your firm and <br /> traders.
              </p>
            </div>
            <div className="bg-blue-800/20 w-2/6 border border-gray-500 pt-14 pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
              <PiTargetBold className="text-sky-400 text-7xl pb-4" />
              <h2 className="text-white font-primary font-bold text-2xl ">
                Marketing & Lead <br /> Generation
              </h2>
              <p className="text-xl text-white font-medium pt-4 pb-12">
                Develop targeted marketing <br /> strategies and implement
                proven <br /> lead generation techniques to fuel <br /> your
                prop firm's growth.
              </p>
            </div>
          </div>
        </div>
        {/* bottom Heading */}
        <div className="text-center pt-32 flex flex-col  items-center">
          <h2 className="text-white font-primary font-bold text-4xl leading-normal">
            Explore Additional
            <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-white font-medium pt-4 ">
            Dive deeper into our extensive range of services and discover how
            you can enhance every aspect of your <br /> prop trading firm.
            Perfect for those seeking comprehensive customization and
            specialized support.
          </p>
          <div className="pt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              className=" flex justify-center md:justify-start"
            >
              <button className="primary_btn flex items-center gap-2 font-bold text-xl border bg-none border-white rounded-md">
                Discover More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchPad;
