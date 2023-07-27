import "./TicketePromises.scss"

import tickIcon from "../../assets/icons/CircleWavyCheck.svg"
import calenderIcon from "../../assets/icons/CalendarBlank.svg"
import supportIcon from "../../assets/icons/ChatsCircle.svg"
import sheildIcon from "../../assets/icons/Shield.svg"

const TicketePromises = () => {
    const promisesData = [
        {
        icon: tickIcon,
          head: "Official tickets",
          subhead: "Authorised reseller to top attraction"
        },
        {
            icon: supportIcon,
          head: "24/7 dedicated support",
          subhead: "We're here to help, talk to an expert"
        },
        {
        icon: calenderIcon,
          head: "Flexible bookings",
          subhead: "Book stress-free with easy cancellation"
        },
        {
            icon: sheildIcon,
          head: " 100% secure payments",
          subhead: "Internationally recognized encrypted payment process"
        }
      ];
      
  return (
    <div className="ticketepromises-container">
        <div className="header">The Tickete promise</div>
        <div className="promises">
            {promisesData.map((promise, index) => {
                return (
                    <div className="promise" key={index}>
                            <img className="icon" src={promise.icon} alt="icon"/>
                        <div className="promise-content">
                        <div className="head">{promise.head}</div>
                        <div className="subhead">{promise.subhead}</div>
                        </div>
                    </div>
                )
            })}
        
        </div>

    </div>
  )
}

export default TicketePromises