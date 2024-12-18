import React from 'react';
import Accordion from './Accordion';

const Faq = () => {
  return (
    <section className="bg-black  py-24">
      <div>
        <div className="container flex ">
          <div className="w-2/5 pl-48">
            <h2 className="text-white font-primary font-bold text-4xl leading-normal">
              Commonly <br /> Asked <br />
              <span className="bg-gradient-to-tr from-blue-200 via-blue-400 to-indigo-700 bg-clip-text text-transparent ">
                Question
              </span>
            </h2>
          </div>
          {/* Accordion ml-[360px]*/}
          <div className="w-3/5 flex flex-col gap-5 pl-24">
            <div className="p-4 bg-gray-500/30 border  border-gray-500 rounded-lg w-[750px]">
              <Accordion
                title="How can I get started with YourPropFirm?"
                answer="To get started, simply contact us through our website or call our customer service team. We’ll schedule a consultation to discuss your needs and how YourPropFirm can help you achieve your business goals."
              />
            </div>
            <div className="p-4 bg-gray-500/30 border border-gray-500 rounded-lg  w-[750px]">
              <Accordion
                title="How long does it typically take to launch a prop firm with YourPropFirm?"
                answer="With YourPropFirm, you can launch your prop firm in as little as four weeks, depending on your specific needs and readiness."
              />
            </div>
            <div className="p-4 bg-gray-500/30 border border-gray-500 rounded-lg  w-[750px]">
              <Accordion
                title="Can I keep all the profits I make with my prop firm?"
                answer="Absolutely. YourPropFirm offers a no revenue sharing model, which means 100% of the profits you make are yours to keep."
              />
            </div>
            <div className="p-4 bg-gray-500/30 border border-gray-500 rounded-lg  w-[750px]">
              <Accordion
                title="What types of payment methods does YourPropFirm support?"
                answer="YourPropFirm supports a variety of payment methods, including cryptocurrencies, credit cards, and traditional bank transfers, to accommodate diverse trader preferences and global operations."
              />
            </div>
            <div className="p-4 bg-gray-500/30 border border-gray-500 rounded-lg  w-[750px]">
              <Accordion
                title="Can YourPropFirm help with marketing my prop firm?"
                answer="Yes, we provide marketing support, including digital marketing, brand development, and access to our partner network, to help you attract and retain traders."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
