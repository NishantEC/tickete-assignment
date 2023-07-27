import { useState } from "react";
import "./ConfirmAndPay.scss";
import TickerOverview from "../../Components/ticketOverview/TickerOverview";
import FAQs from "../../Components/FAQs/FAQs";
import TicketePromises from "../../Components/ticketePromises/TicketePromises";
import TicketBooking from "../../Components/ticketBooking/TicketBooking";

const ConfirmAndPay = () => {
  const [discount, setDiscount] = useState(3);

  // Temporary function to show the discount feature
  const handleDiscount = () => {
    if (discount) {
      setDiscount(0);
    } else {
      setDiscount(3);
    }
  };

  const ticket = {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/55c2/5c84/781753dfdd7106912143612123a7e532?Expires=1691366400&Signature=U2YRT2KLOV2NvCUy3lTpYQucrE~0Sr9wkypQ0jn131CRtDnvIA1L914smqg7NsFFUdRY3bTlTHW~I4PMZwEXKA~c1-VdRJX2tzWnvYFfOe9~lkYbXhguLfzYX2AiX0Z7WJpT3rkWRS25pKdk31fYCdzGr486RC2zAibg99WxUxKICKsAHjm5vK-VCKQEdM2zf70A2U-ibKh3VtbbQxLdVS5hvACsQgckCoKZGGiUgJF0tOa67wKhel07rom0WhZwDBB094AOWKjkiIlQTYpyYRCVSU2MjAjig-naBS1PTIrJmQEquxEt-dGtBjxwYAURv9oTxXQ6xmEg0~xu7j7IZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
    return (
      ticket.paxTypes.reduce(
        (total, paxType) => total + paxType.price * paxType.count,
        ticket.fee
      ) - discount
    );
  };

  return (
    <div className="ConfirmAndPay-container">
      <div className="header">Confirm and pay</div>

      <TickerOverview {...ticket} discount={discount} total={getTotal()} handleDiscount={handleDiscount} />
      <TicketBooking amount={getTotal()} currency={ticket.currency} />
      <FAQs />
      <TicketePromises />
    </div>
  );
};

export default ConfirmAndPay;
