import { useState } from "react";
import "./ConfirmAndPay.scss";
import TickerOverview from "../../Components/ticketOverview/TickerOverview";
import FAQs from "../../Components/FAQs/FAQs";
import TicketePromises from "../../Components/ticketePromises/TicketePromises";
import TicketBooking from "../../Components/ticketBooking/TicketBooking";

const ConfirmAndPay = () => {
  const [discount, setDiscount] = useState(3);

  const ticket = {
    imgUrl:
      "https://images.pexels.com/photos/3884492/pexels-photo-3884492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Amsterdam Open Boat Canal Cruise - Live Guide - from Anne Frank House",
    variant:
      "Amsterdam Open Boat Canal Cruise - Live Guide - from Anne Frank House",
    date: "Sat, 12 Dec 2023",
    time: "10:00",
    paxTypes: [
      {
        type: "Adult",
        price: 39.99,
        count: 2,
      },
      {
        type: "Child",
        price: 19.99,
        count: 1,
      },
    ],
    fee: 1.99,
    currency: "USD",
    cancelby: "Fri, 05 Dec 2023",
  };

  const getTotal = () => {
    return ticket.paxTypes.reduce(
      (total, paxType) => total + paxType.price * paxType.count,
      ticket.fee
    ) - discount
  }

  return (
    <div className="ConfirmAndPay-container">
      <div className="header">Confirm and pay</div>

      <TickerOverview
        {...ticket}
        discount={discount}
        total={
          getTotal()
        }
      />
      <TicketBooking
        amount={
getTotal()
        

        }
        currency={ticket.currency}
      />
      <FAQs />
      <TicketePromises />
    </div>
  );
};

export default ConfirmAndPay;
