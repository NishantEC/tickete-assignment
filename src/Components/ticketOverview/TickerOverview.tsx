import "./TicketOverview.scss";

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
};

const TickerOverview = (ticket: Ticket) => {
  console.log(ticket);

  return (
    <div className="ticket-details-container">
      <div className="details-container">
        <div className="venue-details">
          <img src={ticket.imgUrl} alt="" />
          <div className="name">{ticket.name}</div>
        </div>
        <div className="ticket-details">
          <div className="variant">{ticket.variant}</div>
          <div className="date">{ticket.date}</div>
          <div className="time">{ticket.time}</div>
        </div>
      </div>
      <div className="pax-container">
        <div className="title">Tickets overview</div>
        <div className="pax-details">
          {ticket.paxTypes.map((paxType) => {
            return (
              <div className="pax">
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
          {ticket.discount ? (
            <div className="applied">‘TICKETE10’ applied</div>
            
          ) : (
            <div>Have a promo code?</div>
          )}
        </div>
        <div>{ticket.discount ? <button>Remove</button> : null}</div>
      </div>

      <div className="total-container">
        <div className="total-wrapper">
          <div>Total</div>
          <div>
            $
            {ticket.total}
          </div>
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
