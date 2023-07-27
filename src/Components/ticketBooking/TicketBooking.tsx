import React, { useState, useCallback } from "react";
import "./TicketBooking.scss";
import cardIcon from "../../assets/icons/CreditCard.svg";
import klarnaIcon from "../../assets/icons/Klarna.svg";

type TotalAmount = {
  amount: number;
  currency: string;
};

type FormData = {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  additionalName: string;
  selectedOption: string;
  cardNumber: string;
  nameOnCard: string;
  expirationDate: string;
  cvv: string;
};

type Errors = {
  [key in keyof FormData]: string;
};

const TicketBooking = (total: TotalAmount) => {
  const [formdata, setFormdata] = useState<FormData>({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    additionalName: "",
    selectedOption: "",
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    additionalName: "",
    selectedOption: "",
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id as keyof FormData]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id as keyof FormData]: value,
    }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const parentElement = e.target.parentNode;
    if (parentElement instanceof HTMLElement) {
      parentElement.classList.add("focused");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const errorsCopy = { ...errors };
    if (value.trim() === "") {
      errorsCopy[id as keyof FormData] = "This field is required";
    } else {
      errorsCopy[id as keyof FormData] = "";
    }
    setErrors(errorsCopy);

    const parentElement = e.target.parentNode;
    if (parentElement instanceof HTMLElement) {
      parentElement.classList.remove("focused");
    }
  };


  const CreditCardForm = () => {
    return (
      <div className="responsive-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder=" "
            value={formdata.cardNumber || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            placeholder=" "
            value={formdata.nameOnCard || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.nameOnCard && <span className="error">{errors.nameOnCard}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder=" "
            value={formdata.expirationDate || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.expirationDate && <span className="error">{errors.expirationDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder=" "
            value={formdata.cvv || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>
      </div>
    );
  };

  const KlarnaForm = () => {
    return <div className="klarna-form">No Design was Given</div>;
  };

  const handlePaymentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentMethod(e.target.value);
    },
    []
  );

  const paymentOptions = [
    {
      name: "card",
      icon: cardIcon,
      label: "Credit & debit card",
      component: <CreditCardForm />,
    },
    {
      name: "klarna",
      icon: klarnaIcon,
      label: "Klarna",
      component: <KlarnaForm />,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formdata);
    console.log("Selected Payment Method:", paymentMethod);
  };

  return (
    <div className="ticketbooking-container">
      <div className="header">Enter your details</div>
      <div className="subheading">
        We'll be sending your tickets to the details below. Booking for a friend?
        Add their details.
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="responsive-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formdata.name || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="name">Name</label>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={formdata.email || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              placeholder=" "
              value={formdata.confirmEmail || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="confirmEmail">Confirm Email</label>
            {errors.confirmEmail && <span className="error">{errors.confirmEmail}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder=" "
              value={formdata.phone || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="phone">Phone</label>
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="header">Additional information</div>
        <div className="subheading">
          We need a few more details to complete your reservation.
        </div>
        <div className="responsive-form">
          <div className="form-group">
            <input
              type="text"
              id="additionalName"
              name="additionalName"
              placeholder=" "
              value={formdata.additionalName || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="additionalName">Name</label>
            {errors.additionalName && <span className="error">{errors.additionalName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="selectedOption">DropDown</label>
            <select
              id="selectedOption"
              name="selectedOption"
              value={formdata.selectedOption || ""}
              onChange={handleSelectChange}
            >
              <option value="">Select your option</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            {errors.selectedOption && <span className="error">{errors.selectedOption}</span>}
          </div>
        </div>

        <div className="header">Select your mode of payment</div>
        <div className="subheading">Payments with Tickete are secure and encrypted.</div>
        <div className="payment-options">
          {paymentOptions.map((option) => (
            <div key={option.name} className="payment-option">
              <div className="option-wrapper" onClick={() => setPaymentMethod(option.name)}>
                <div>
                  <img src={option.icon} alt="" />
                  <span>{option.label}</span>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.name}
                  checked={paymentMethod === option.name}
                  onChange={handlePaymentChange}
                />
              </div>
              {paymentMethod === option.name ? option.component : null}
            </div>
          ))}
        </div>
        <div className="total-container">
          <div className="total-wrapper">
            <div>Total</div>
            <div>${total.amount}</div>
          </div>
          <div className="currency-type">You will pay in {total.currency}</div>
        </div>

        <div className="subscription-box">
          <input type="radio" name="subscription" id="subscription" />
<label htmlFor="subscription">       {" Receive travel tips, suggestions and offers in <city> by email"}</label>
        </div>
        <div className="tnc-wrapper">
        With payment, you agree to the general <a href="/">terms and conditions of Tickete</a> & the <a href="/">activity provider</a>.
        </div>

        <button type="submit">
        Confirm and pay
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 3.75H4.5C4.10218 3.75 3.72064 3.90804 3.43934 4.18934C3.15804 4.47064 3 4.85218 3 5.25V10.7531C3 19.1344 10.1062 21.9188 11.5312 22.3875C11.8357 22.4877 12.1643 22.4877 12.4688 22.3875C13.8938 21.9188 21 19.1344 21 10.7531V5.25C21 4.85218 20.842 4.47064 20.5607 4.18934C20.2794 3.90804 19.8978 3.75 19.5 3.75ZM12 20.9625C10.8094 20.5688 5.22188 18.375 4.56563 12H12V5.25H19.5V10.7531C19.5023 11.1697 19.4803 11.586 19.4344 12H12V20.9625Z"
              fill="#fff"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default TicketBooking;
