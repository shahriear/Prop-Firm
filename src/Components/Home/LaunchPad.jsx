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
        <div className="text-center pb-28 px-4">
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
        <div className="grid md:grid-cols-2 gap-7 px-5 md:px-16">
          <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 rounded-xl pb-32 md:pb-72 hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
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
              className="absolute  right-0 bottom-0 left- md:left-32 bg-cover bg-center bg-no-repeat md:w-[560px] w-96"
            />
          </div>

          <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 rounded-xl pb-32 md:pb-72 hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
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
              className="absolute right-0 left bottom-0  md:left-32    w-96 md:w-[560px]"
            />
          </div>
        </div>
        {/* part-two */}
        <div className="py-5 md:py-7 px-8 md:px-16">
          <div className=" grid md:grid-cols-3 gap-7">
            <div className="bg-blue-800/20  border border-gray-500 pt-14 md:pl-14 px-7 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
              <IoIosPeople className="text-sky-400 text-6xl" />
              <h2 className="text-white font-primary font-bold text-2xl ">
                Broker Partners <br /> Network
              </h2>
              <p className="text-xl text-white font-medium pt-4 pb-12 pr-2">
                Connect with the best brokers and <br /> liquidity providers,
                tailored to your <br /> needs. Leverage our expertise for <br />
                optimal selection.
              </p>
            </div>
            <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 px-7 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
              <TbCreditCardPay className="text-sky-400 text-7xl pb-4" />
              <h2 className="text-white font-primary font-bold text-2xl ">
                Payment <br /> Solutions
              </h2>
              <p className="text-xl text-white font-medium pt-4 pb-12 pr-2">
                Our integrated payment solutions <br /> ensure smooth and secure
                <br />
                transactions for both your firm and <br /> traders.
              </p>
            </div>
            <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 px-7 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
              <PiTargetBold className="text-sky-400 text-7xl pb-4" />
              <h2 className="text-white font-primary font-bold text-2xl ">
                Marketing & Lead <br /> Generation
              </h2>
              <p className="text-xl text-white font-medium pt-4 pb-12 pr-2">
                Develop targeted marketing <br /> strategies and implement
                proven <br /> lead generation techniques to fuel <br /> your
                prop firm's growth.
              </p>
            </div>
          </div>
        </div>
        {/* bottom Heading */}
        <div className="text-center pt-32 flex flex-col  items-center ">
          <h2 className="text-white font-primary font-bold text-4xl leading-normal px-4">
            Explore Additional
            <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-white font-medium pt-4 px-5">
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
              <button className="primary_btn flex items-center gap-2 font-bold text-xl border bg-none border-white rounded-md py-2 px-4 hover:bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900">
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
