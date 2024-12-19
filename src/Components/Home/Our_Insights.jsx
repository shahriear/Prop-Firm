import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Our_Insights = () => {
  return (
    <section className="bg-black">
      <div className="container">
        <div>
          <div className="text-center pt-8 flex flex-col  items-center px-5">
            <h2 className="text-white font-primary font-bold text-4xl leading-normal">
              Our
              <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
                Insights & Blog
              </span>
            </h2>
            <p className="text-xl text-white font-semibold pt-4 ">
              Explore the latest industry trends and best practices with our
              expert-driven Insights/Blog
            </p>
          </div>
          {/* part-three */}
          <div className="pt-16 px-5">
            <div className=" grid md:grid-cols-3 gap-10">
              <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 rounded-xl    relative overflow-hidden pb-10">
                <h2 className="text-white font-primary font-bold text-2xl pt-40 md:pt-60">
                  YourPropFirm Monthly Product Update – November 2024
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-10 pr-9">
                  Welcome to YourPropFirm’s November update! In October, we
                  focused on enhancing trader engagement with features like the
                  Competitions Feature and updates to the General Leaderboard.
                  We also introduced tools to...
                </p>
                <a
                  href="#"
                  className="text-indigo-400 flex items-center font-bold  text-xl "
                >
                  Read More
                  <FaLongArrowAltRight className="text-white  ml-5" />
                </a>

                <img
                  src="aa.webp"
                  alt="img"
                  className="top-0 absolute bg-cover left-0"
                />
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 rounded-xl    relative overflow-hidden pb-10">
                <h2 className="text-white font-primary font-bold text-2xl pt-40 md:pt-60">
                  Prop Firm Competition: New Features and Updates
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-10 pr-9">
                  Trading competitions have quickly become a powerful tool for
                  boosting engagement in prop firms. Now, with the new prop firm
                  competition feature available on the YourPropFirm dashboard,
                  firms can add...
                </p>
                <a
                  href="#"
                  className="text-indigo-400 flex items-center font-bold  text-xl "
                >
                  Read More
                  <FaLongArrowAltRight className="text-white  ml-5" />
                </a>

                <img
                  src="bb.webp"
                  alt="img"
                  className="top-0 absolute bg-cover left-0"
                />
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 pl-14 rounded-xl    relative overflow-hidden pb-10">
                <h2 className="text-white font-primary font-bold text-2xl pt-40 md:pt-60">
                  YourPropFirm Marketplace: The <br /> Easiest Way to Buy or
                  Sell a <br />
                  Prop Trading Firm
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-10 pr-9">
                  What is the YourPropFirm Marketplace? The YourPropFirm
                  Marketplace is a one-of-a-kind platform where prop trading
                  firms are easily purchased and sold. Whether you’re looking to
                  buy a ready-to-run firm or...
                </p>
                <a
                  href="#"
                  className="text-indigo-400 flex items-center font-bold  text-xl "
                >
                  Read More
                  <FaLongArrowAltRight className="text-white  ml-5" />
                </a>

                <img
                  src="cc.webp"
                  alt="img"
                  className="top-0 absolute bg-cover left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Insights;
