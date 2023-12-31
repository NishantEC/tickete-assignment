import { useState } from "react";
import supportIcon from "../../assets/icons/ChatsCircle.svg";
import "./FAQs.scss";

type FAQ = {
  question: string;
  answer: string;
};

const FAQs = () => {
  const faqsData = [
    {
      question: "Are my tickets transferable?",
      answer:
        "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.",
    },
    {
      question: "How long will it take to receive my ticket?",
      answer:
        "The tickets will hit your inbox as soon as you complete making the payment.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is 100% secure and you have nothing to worry about!",
    },
    {
      question: "What type of payment options do you offer?",
      answer:
        "We accept payments via all major international debit cards, credit cards, Google Pay, and Apple Pay. Please note that Tickete, being an online marketplace, does not accept cash payments.",
    },
    {
      question: "When will I be charged for my booking?",
      answer:
        "Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.",
    },
    {
      question: "Why am I being charged in USD?",
      answer:
        "All payments on Tickete are charged in USD. Your account will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal, but we’re working on accepting payments in currencies across the world.",
    },
    {
      question: "Will I get a complete refund if I cancel this ticket?",
      answer:
        "The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can be cancelled within the permissible cancellation period, you will receive a full refund.",
    },
    {
      question: "How long does it take for a refund to reflect in my account?",
      answer:
        "Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.",
    },
  ];

  const FAQ = (faq: FAQ) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const toggleAnswer = () => setShowAnswer(!showAnswer);
    return (
      <div className="faq">
        <div className="question" onClick={toggleAnswer}>
          <span>{faq.question}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={showAnswer ? "active" : ""}
          >
            <path
              d="M12 5V19"
              stroke="#474747"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line"
            ></path>
            <path
              d="M5 12H19"
              stroke="#474747"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        {showAnswer && <div className="answer">{faq.answer}</div>}
      </div>
    );
  };

  return (
    <div className="faqs-container">
      <div className="header">Frequently asked questions</div>
      <div className="faqs">
        {faqsData.map((faq, index) => {
          return <FAQ {...faq} key={index} />;
        })}
      </div>

      <div className="help-box">
        <div>
          <div>
            <div>Need help?</div>
            <div>We're here to help you, talk to us.</div>
          </div>
         <img src={supportIcon} alt="" />
        </div>
        <button>Chat with us</button>
      </div>
    </div>
  );
};

export default FAQs;
