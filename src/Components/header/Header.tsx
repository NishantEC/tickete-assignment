
import { useEffect, useState } from 'react';
import backIcon from '../../assets/icons/CaretCircleLeft.svg'
import './Header.scss'


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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  return (
    <header className={isVisible ? 'visible' : 'hidden'}>
        <img src={backIcon} alt="" />
    </header>
  )
}

export default Header