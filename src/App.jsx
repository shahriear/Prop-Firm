import React from 'react';

import LaunchPad from './Components/Home/LaunchPad';
import WhyPropFirm from './Components/Home/WhyPropFirm';
import IntegratedSolution from './Components/Home/IntegratedSolution';
import Our_Insights from './Components/Home/Our_Insights';
import Faq from './Components/Home/Faq';
import JoinOur from './Components/Home/JoinOur';
import Footer from './Components/Home/Footer';
import Navbar from './Components/Navbar';
import Banner from './Components/Home/Banner';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <LaunchPad />
      <WhyPropFirm />
      <IntegratedSolution />
      <Our_Insights />
      <Faq />
      <JoinOur />
      <Footer />
    </>
  );
};

export default App;
