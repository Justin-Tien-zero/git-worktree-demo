import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Faq from './components/Faq';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <Faq />
                <CallToAction />
            </main>
            <CookieConsent />
            <Footer />
        </div>
    );
}

export default App;
