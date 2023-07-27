import { useEffect, useState } from "react";
import backIcon from "../../assets/icons/CaretCircleLeft.svg";
import logoIcon from "../../assets/icons/Logo2.svg";
import helpIcon from "../../assets/icons/Question.svg";
import "./Header.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;
      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <header className={isVisible ? "visible" : "hidden"}>
      <img src={backIcon} alt="" className="mobile" />
      <div className="logo">
      <img src={logoIcon} alt="" />
      </div>
      <div className="help">
      <img src={helpIcon} alt="" />
        Help
      </div>
    </header>
  );
};

export default Header;
