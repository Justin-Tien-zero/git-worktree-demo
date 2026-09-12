import { useState } from 'react';
import { faqData } from '../data/faq';
import './Faq.css';

const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
                className="faq-question"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <span className="faq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>
            <div className="faq-answer-wrapper">
                <div className="faq-answer">
                    <div className="faq-answer-inner">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <h2>常見問題</h2>
                    <p>我們整理了用戶最常遇到的問題，希望能幫助您快速找到解答。</p>
                </div>
                <div className="faq-list">
                    {faqData.map((item) => (
                        <FaqItem
                            key={item.id}
                            item={item}
                            isOpen={item.id === openId}
                            onClick={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
