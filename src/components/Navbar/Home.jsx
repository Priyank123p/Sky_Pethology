import React from 'react';
import Hero from '../Hero';
import PromoSection from '../PromoSection';
import TrustSection from '../TrustSection';
import WhyChooseUs from '../WhyChooseUs';
import Footer from '../Footer';
import PackagesSection from '../PackagesSection';

import PopularTests from '../PopularTests';

const Home = () => {
    return (
        <div className="fade-in">
            <Hero />
            <TrustSection />
            <WhyChooseUs />
            <PopularTests />
            <PromoSection />
            <PackagesSection />
            <Footer />
        </div>
    );
};

export default Home;
