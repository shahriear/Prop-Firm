import React from 'react';
import { BiTargetLock } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';
import { MdOutlineCopyright } from 'react-icons/md';

import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const FooterLinks_one = [
    {
      title: 'Home',
      link: '/#',
    },
    {
      title: 'About Us',
      link: '/#about',
    },
    {
      title: 'Services',
      link: '/#contact',
    },
  ];
  const FooterLinks_two = [
    {
      title: 'Insights',
      link: '#',
    },
    {
      title: ' Marketplace',
      link: '#',
    },
    {
      title: 'Career',
      link: '#',
    },
    {
      title: 'Events',
      link: '#',
    },
  ];
  return (
    <footer className="bg-black">
      <div className="container text-white">
        <div data-aos="fade-up" className="grid md:grid-cols-3  pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src="/logo.svg" alt="logo" className="w-72" />
            </h1>
            <p className="font-semibold text-lg">
              Streamline your Prop Trading Firm <br /> launch with our
              Proprietary Technology <br /> and Industry Expertise.
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 text-lg font-semibold pb-16">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Main Menu​
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks_one.map(link => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks_two.map(link => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social Links */}
            <div className="px-4">
              <div className="flex items-center ju gap-3 mt-6">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Let’s Connect
                </h1>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <BiTargetLock className="text-3xl" />
                  <p>
                    68 Circular Road, #02-01, <br /> 049422, Singapore
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3  ">
                  <LuMail className="text-3xl" />
                  <p>info@yourpropfirm.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaLinkedinIn className="text-4xl bg-indigo-600 rounded-full p-2" />
                </a>
                <a href="#">
                  <FaInstagram className="text-4xl bg-indigo-600 rounded-full p-2" />
                </a>
                <a href="#">
                  <FaXTwitter className="text-4xl bg-indigo-600 rounded-full p-2" />
                </a>
                <a href="#">
                  <FaTiktok className="text-4xl bg-indigo-600 rounded-full p-2" />
                </a>
                <a href="#">
                  <FiYoutube className="text-4xl bg-indigo-600 rounded-full p-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-500 pb-20 text-white text-[15px] font-semibold flex items-center px-4">
        <p className=" md:ml-52 py-4 flex items-center gap-1">
          <MdOutlineCopyright className="text-white  text-lg" />
          Copyright 2022-2024 YourPropFirm Pte Ltd. Business Registration
          Number: 202405866D – All Right Reserved
        </p>
        <a href="#" className="md:pl-96">
          Terms & Conditions <span>Privacy Policy</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
