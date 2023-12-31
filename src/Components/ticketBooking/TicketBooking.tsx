import React, { useState } from "react";
import "./TicketBooking.scss";
import cardIcon from "../../assets/icons/CreditCard.svg";
import klarnaIcon from "../../assets/icons/Klarna.svg";
import FormInput from "../formUtilities/FormInput";

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

    // Field validation rules
    if (value.trim() === "") {
      errorsCopy[id as keyof FormData] = "This field is required";
    } else {
      errorsCopy[id as keyof FormData] = "";

      // Additional validation for specific fields
      if (id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorsCopy.email = "Invalid email format";
        }
      } else if (id === "confirmEmail") {
        if (formdata.email !== formdata.confirmEmail) {
          errorsCopy.confirmEmail = "Emails do not match";
        } else {
          errorsCopy.confirmEmail = "";
        }
      } else if (id === "cardNumber") {
        const cardNumberRegex = /^[0-9]{16}$/;
        if (!cardNumberRegex.test(value)) {
          errorsCopy.cardNumber = "Invalid card number";
        }
      } else if (id === "expirationDate") {
        const expirationDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!expirationDateRegex.test(value)) {
          errorsCopy.expirationDate = "Invalid expiration date (MM/YY)";
        }
      } else if (id === "cvv") {
        const cvvRegex = /^[0-9]{3,4}$/;
        if (!cvvRegex.test(value)) {
          errorsCopy.cvv = "Invalid CVV";
        }
      }
    }

    setErrors(errorsCopy);

    const parentElement = e.target.parentNode;
    if (parentElement instanceof HTMLElement && value.trim() === "") {
      parentElement.classList.remove("focused");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formdata);
    console.log("Selected Payment Method:", paymentMethod);
  };

  return (
    <div className="ticketbooking-container">
      <div className="header">Enter your details</div>
      <div className="subheading">
        We'll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="responsive-form">
          <FormInput
            id="name"
            label="Name"
            value={formdata.name || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.name}
          />
          <FormInput
            id="email"
            label="Email"
            value={formdata.email || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.email}
          />

          <FormInput
            id="confirmEmail"
            label="Confirm Email"
            value={formdata.confirmEmail || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.confirmEmail}
          />

          <FormInput
            id="phone"
            label="Phone"
            value={formdata.phone || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.phone}
          />
        </div>

        <div className="header">Additional information</div>
        <div className="subheading">
          We need a few more details to complete your reservation.
        </div>
        <div className="responsive-form">
          <FormInput
            id="additionalName"
            label="Name"
            value={formdata.additionalName}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.additionalName}
          />
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
            {errors.selectedOption && (
              <span className="error">{errors.selectedOption}</span>
            )}
          </div>
        </div>

        <div className="header">Select your mode of payment</div>
        <div className="subheading">
          Payments with Tickete are secure and encrypted.
        </div>
        <div className="payment-options">
          <div key="card" className="payment-option">
            <div
              className="option-wrapper"
              onClick={() => setPaymentMethod("card")}
            >
              <div>
                <img src={cardIcon} alt="" />
                <span>Credit & debit card</span>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
            </div>
            {paymentMethod === "card" ? (
              <div className="responsive-form">
                <FormInput
                  id="cardNumber"
                  label="Card Number"
                  value={formdata.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={errors.cardNumber}
                />

                <FormInput
                  id="nameOnCard"
                  label="Name on Card"
                  value={formdata.nameOnCard}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={errors.nameOnCard}
                />

                <FormInput
                  id="expirationDate"
                  label="Expiration Date"
                  value={formdata.expirationDate}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={errors.expirationDate}
                />

                <FormInput
                  id="cvv"
                  label="CVV"
                  value={formdata.cvv}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={errors.cvv}
                />
              </div>
            ) : null}
          </div>
          <div key="klarna" className="payment-option">
            <div
              className="option-wrapper"
              onClick={() => setPaymentMethod("klarna")}
            >
              <div>
                <img src={klarnaIcon} alt="" />
                <span>Klarna</span>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                value="klarna"
                checked={paymentMethod === "klarna"}
                onChange={() => setPaymentMethod("klarna")}
              />
            </div>
            {paymentMethod === "klarna" ? (
              <div className="klarna-form">No Design was Given</div>
            ) : null}
          </div>
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
          <label htmlFor="subscription">
            {" "}
            {" Receive travel tips, suggestions and offers in <city> by email"}
          </label>
        </div>
        <div className="tnc-wrapper">
          With payment, you agree to the general{" "}
          <a href="/">terms and conditions of Tickete</a> & the{" "}
          <a href="/">activity provider</a>.
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
