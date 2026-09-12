import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Add a small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-card">
                <div className="cookie-consent-content">
                    <h4>We value your privacy</h4>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                    </p>
                </div>
                <div className="cookie-consent-actions">
                    <button className="btn btn-primary" onClick={handleAccept}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
