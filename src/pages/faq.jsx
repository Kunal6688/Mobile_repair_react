import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "Do you have a revenue share?",
      answer:
        "No, we offer a buy-rate, interchange-plus pricing model giving you the most control over your revenue.",
    },
    {
      question: "Do you have any minimum fees or fixed monthly fees?",
      answer:
        "No, we do not have any minimum fees or fixed monthly fees. Our pricing is designed to be flexible and transparent, ensuring you only pay for the services you use.",
    },
    {
      question: "Do you charge any PCI DSS program or non-compliance fees?",
      answer:
        "No, we do not charge any PCI DSS program or non-compliance fees. We are committed to maintaining high security standards without passing additional costs to our customers.",
    },
    {
      question: "Can I set the pricing to my merchants?",
      answer:
        "Yes, you can set the pricing to your merchants. We provide the tools and flexibility for you to establish and manage your pricing structure according to your business needs.",
    },
    {
      question: 'Are the pricing tiers "pick a tier" or "fill a tier"?',
      answer:
        'Our pricing tiers are "fill a tier." This means that you can customize your pricing levels to fit your specific requirements, providing more tailored solutions for your business.',
    },
    {
      question: "Do you charge an ACH volume-based fee?",
      answer:
        "No, we do not charge an ACH volume-based fee. Our pricing model is straightforward and designed to avoid any hidden or unexpected costs.",
    },
  ];

  // Handle question click to toggle answer visibility
  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="mt-20 text-5xl text-center">
        Most Frequently Asked FAQ's
      </h1>
      <div className="flex items-center justify-center item mt-5 mx-5 faq-container">
        <div className="faq-list mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b py-4">
              <div
                className="faq-question flex items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-2xl bg-teal-300 rounded-full w-6 h-6 flex align-middle justify-center items-center mr-4 pb-1">
                  {openIndex === index ? "-" : "+"}
                </span>
                <span className="text-2xl font-normal">{faq.question}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer  mt-2 text-gray-600 text-lg ml-10">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
