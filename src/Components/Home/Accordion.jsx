import React, { useState } from 'react';

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setaccordionOpen] = useState(false);
  return (
    <div className="text-white">
      <button
        onClick={() => setaccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full ${
          accordionOpen ? 'text-blue-400' : ''
        }`}
      >
        <span className="font-bold font-primary text-lg">{title}</span>

        {accordionOpen ? (
          <span className="text-3xl">-</span>
        ) : (
          <span className="text-3xl">+</span>
        )}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p
          className={`overflow-hidden  font-primary font-medium text-white text-base border-t transition-all duration-300 border-gray-500 ${
            accordionOpen ? 'pt-3' : ''
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
