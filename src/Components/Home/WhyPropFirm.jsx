import React from 'react';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { TbDeviceImacCode } from 'react-icons/tb';
import { BsWindow } from 'react-icons/bs';
import { IoIosInfinite } from 'react-icons/io';
import { RxGlobe } from 'react-icons/rx';
import { BiSolidNetworkChart } from 'react-icons/bi';

const WhyPropFirm = () => {
  return (
    <section className="bg-black pb-20">
      <div className="container">
        <div>
          <div className="text-center pt-8 flex flex-col  items-center px-4">
            <h2 className="text-white font-primary font-bold text-4xl leading-normal">
              Why
              <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
                YourPropFirm
              </span>
            </h2>
            <p className="text-xl text-white font-medium pt-4 ">
              Unleash Your Prop Firm’s Earnings: Keep 100% of Your Profits with
              YourPropFirm We don’t just provide a <br /> platform, we become
              your partner in prop firm creation, handling everything from
              concept to launch. <br /> Here’s how our comprehensive approach
              helps you achieve your prop firm ambitions:
            </p>
          </div>
          {/* part-three */}
          <div className="py-10 md:pt-16 px-10 md:px-16">
            <div className=" grid md:grid-cols-3 gap-7">
              <div className="bg-blue-800/20  border border-gray-500 pt-14 px-5 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
                <LuChartNoAxesCombined className="text-sky-400 text-6xl pb-2" />
                <h2 className="text-white font-primary font-bold text-2xl ">
                  Launch Faster and <br /> Better
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-12">
                  Leverage YourPropFirm's extensive <br /> prop trading
                  experience to avoid <br /> common pitfalls and launch your
                  <br /> firm in weeks, not months.
                </p>
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 px-5 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
                <TbDeviceImacCode className="text-sky-400 text-6xl pb-2" />
                <h2 className="text-white font-primary font-bold text-2xl ">
                  Engineered for Prop <br /> Trading
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-12">
                  Built specifically for the prop <br /> industry,
                  YourPropFirm's intuitive <br /> dashboard delivers real-time
                  data <br /> and simplifies complex prop firm <br /> management
                  tasks.
                </p>
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 px-5 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
                <BsWindow className="text-sky-400 text-6xl pb-2" />
                <h2 className="text-white font-primary font-bold text-2xl ">
                  Branding and Front- <br /> End
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-12">
                  YourPropFirm designs and develops <br /> your prop firm's
                  website and <br />
                  branding, giving you a cohesive and <br /> professional online
                  presence.
                </p>
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 px-5 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
                <IoIosInfinite className="text-sky-400 text-6xl pb-2" />
                <h2 className="text-white font-primary font-bold text-2xl ">
                  Seamless Integrations
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-12">
                  Effortlessly connect your prop firm <br /> with various
                  payment providers to <br /> ensure a smooth and convenient
                  <br /> experience for your traders.
                </p>
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 px-5 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
                <RxGlobe className="text-sky-400 text-6xl pb-2" />
                <h2 className="text-white font-primary font-bold text-2xl ">
                  24/7 Global Support
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-12">
                  Our dedicated support team is <br /> available across all time
                  zones, <br />
                  ensuring you receive prompt <br /> assistance whenever you
                  need <br />
                  support.
                </p>
              </div>
              <div className="bg-blue-800/20  border border-gray-500 pt-14 px-5 md:pl-14 rounded-xl   hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600  relative overflow-hidden">
                <BiSolidNetworkChart className="text-sky-400 text-6xl pb-2" />
                <h2 className="text-white font-primary font-bold text-2xl ">
                  Marketing & CRM <br /> Integration
                </h2>
                <p className="text-xl text-white font-medium pt-4 pb-12">
                  YourPropFirm integrates with your <br /> existing marketing
                  and CRM <br />
                  platforms, empowering you to <br /> attract top talent and
                  manage
                  <br />
                  traders seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPropFirm;
