import React from 'react';
import { motion } from 'framer-motion';
const IntegratedSolution = () => {
  return (
    <section className="bg-black pb-20">
      <div className="container ">
        <div className="text-center pt-8 flex flex-col  items-center px-5">
          <h2 className="text-white font-primary font-bold text-4xl leading-normal">
            Integrated
            <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-white font-medium pt-4 ">
            Unleash Your Prop Firm’s Earnings: Keep 100% of Your Profits with
            YourPropFirm We don’t just provide a <br /> platform, we become your
            partner in prop firm creation, handling everything from concept to
            launch. <br /> Here’s how our comprehensive approach helps you
            achieve your prop firm ambitions:
            <br />
            <br />
            <span className="text-xl text-white font-semibold pt- ">
              Available Trading Platforms
            </span>
          </p>
        </div>
        {/* trading Platform */}
        <div className="flex flex-col justify-center items-center gap-7">
          <div className=" gap-7 px-16 pt-7 grid md:grid-cols-5 ">
            <div className="border-2 rounded-md border-gray-500">
              <img src="p-1.svg" alt="img" className="px-12 py-6" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="a.webp" alt="img" className="px-6 py-10" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="b.webp" alt="img" className="px-8 py-10" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="c.webp" alt="img" className="px-8 py-10" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="d.svg" alt="img" className="px-6 py-10" />
            </div>
          </div>
          <div className=" gap-7 px-16 md:px-80 items-center  grid md:grid-cols-4">
            <div className="border-2 rounded-md border-gray-500">
              <img src="p-3.webp" alt="img" className="px-8 py-8 w-40" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="p-2.webp" alt="img" className="px-8 py-8 w-72" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="p-4.svg" alt="img" className="px-8 py-8 w-72" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="p-5.svg" alt="img" className="px-8 py-8 w-36" />
            </div>
          </div>
          <p className="text-xl text-white  py-2 text-center font-semibold">
            Integrated With
          </p>
          <div className="grid md:grid-cols-5 gap-7 md:pl-32  ">
            <div className="border-2 rounded-md border-gray-500">
              <img src="five.webp" alt="img" className="px-7 py-8 w-36" />
            </div>
            <div className="border-2 rounded-md border-gray-500 ">
              <img src="six.webp" alt="img" className="px-5 py-7 w-36" />
            </div>
            <div className="border-2 rounded-md border-gray-500 ">
              <img src="seven.svg" alt="img" className="px-7 py-4 w-32" />
            </div>
            <div className="border-2 rounded-md border-gray-500">
              <img src="eight.webp" alt="img" className="px-7 py-4 w-32" />
            </div>
          </div>
        </div>
        {/* Schedule part */}
        <div className="pt-32 px-4">
          <div className="bg-blue-800/20  border border-gray-500 pt-14 px-4 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden text-center md:mx-36  flex flex-col  items-center pb-16">
            <h2 className="text-white font-primary font-semibold text-4xl leading-normal">
              Schedule Your <br />
              <span className=" bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
                Consultation Today
              </span>
            </h2>
            <p className="text-xl text-white font-medium pt-4 pb-12">
              Take the First Step Towards Launching Your Prop Trading Firm
              Effortlessly.
            </p>
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                className=" flex justify-center md:justify-start"
              >
                <button className="primary_btn flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900 border border-white rounded-md py-2 px-4 ">
                  Get In Touch
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolution;
