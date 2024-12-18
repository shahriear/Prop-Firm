import React from 'react';

const JoinOur = () => {
  return (
    <section className="bg-black pb-24">
      <div className="container">
        <div className=" border border-gray-500 hover:bg-gradient-to-bl from-blue-950 via-blue-950 to-indigo-600 overflow-hidden bg-blue-800/20 py-16  w-full justify-evenly rounded-lg  flex">
          <div className=" bg-cover w-80 top-0 left-0 ">
            <img src="/book.png" alt="book-img" />
          </div>
          <div className=" flex flex-col justify-center  pt-14 pl-14 rounded-xl  ">
            <h2 className="text-white font-primary font-semibold text-4xl leading-normal">
              Join Our Newsletter
              <span className=" bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent pl-2">
                Newsletter
              </span>
            </h2>
            <p className="text-xl text-white font-medium pt-4 pb-12">
              Receive our latest news and stay updated. Plus, get <br /> your
              FREE copy of “Quick-Launch Your Prop Trading Firm: A <br /> 2024
              Guide by YourPropFirm”
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email"
                className=" h-11 w-96 bg-slate-700 text-white pl-3 font-semibold border border-slate-500"
              />
              <div className=" flex justify-center md:justify-start">
                <button className="py-3 px-8 flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-blue-400 via-sky-600 to-blue-900 border border-white rounded-md h-11 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOur;
