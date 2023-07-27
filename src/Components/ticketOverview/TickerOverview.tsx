import "./TicketOverview.scss";

import variantIcon from "../../assets/icons/Variant.svg";
import calendarIcon from "../../assets/icons/CalendarBlank.svg";
import clockIcon from "../../assets/icons/Clock.svg";
import promocodeIcon from "../../assets/icons/Promocode.svg";

type Ticket = {
  imgUrl: string;
  name: string;
  variant: string;
  date: string;
  time: string;
  paxTypes: {
    type: string;
    count: number;
    price: number;
  }[];
  fee: number;
  discount: number;
  currency: string;
  cancelby: string;
  total: number;
  handleDiscount: () => void;
};

const TickerOverview = (ticket: Ticket) => {


  return (
    <div className="ticketOverview-container">
      <div className="details-container">
        <div className="venue-details">
          <img src={ticket.imgUrl} alt="" />
          <div className="name">{ticket.name}</div>
        </div>
        <div className="ticket-details">
          <div className="variant">
         <img src={variantIcon} alt="" />
            {ticket.variant}
          </div>
          <div className="date">
            <img src={calendarIcon} alt="" />
            {ticket.date}
          </div>
          <div className="time">
            <img src={clockIcon} alt="" />
            {ticket.time}
          </div>
        </div>
      </div>
      <div className="pax-container">
        <div className="title">Tickets overview</div>
        <div className="pax-details">
          {ticket.paxTypes.map((paxType,index) => {
            return (
              <div className="pax"
              key={index}
              >
                <div>
                  <div className="type">{paxType.type}</div>
                  <div className="count">({paxType.count})</div>
                </div>
                <div className="price">${paxType.price}</div>
              </div>
            );
          })}
          <div className="fee">
            <div>Fee</div>
            <div className="price">${ticket.fee}</div>
          </div>
          {ticket.discount ? (
            <div className="discount">
              <div>Discount applied</div>
              <div className="price"> - ${ticket.discount}</div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="promocode-wrapper">
        <div>
          <img src={promocodeIcon} alt="" />
          {ticket.discount ? (
            <div className="applied">‘TICKETE10’ applied</div>
          ) : (
            <div onClick={()=>ticket.handleDiscount()}>Have a promo code?</div>
          )}
        </div>
        <div>{ticket.discount ? <button onClick={()=>ticket.handleDiscount()}>Remove</button> : null}</div>
      </div>

      <div className="total-container">
        <div className="total-wrapper">
          <div>Total</div>
          <div>${ticket.total}</div>
        </div>
        <div className="currency-type">You will pay in {ticket.currency}</div>
      </div>

      <div className="info-box">
        <div className="title">Free cancellation</div>
        <div className="info">
          Tickets can be cancelled by {ticket.cancelby}.
        </div>
      </div>
    </div>
  );
};

export default TickerOverview;
