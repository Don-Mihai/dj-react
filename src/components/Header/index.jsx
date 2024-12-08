import "./Header.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/logo.png";
import { useEffect, useState } from "react";
import styleVariables from "../../styles/variables.scss";

const Header = () => {
  const HEADER_HEIGHT = styleVariables["$header-height"];
  const SHRINK_HEADER_HEIGHT = "50px";
  const SCROLL_HEIGHT = 60;
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT);

  useEffect(() => {
    const handleScroll = () => {
      // уменьшение высоты хедера при скролле
      if (
        document.body.scrollTop > SCROLL_HEIGHT ||
        document.documentElement.scrollTop > SCROLL_HEIGHT
      ) {
        setHeaderHeight(SHRINK_HEADER_HEIGHT);
      } else {
        setHeaderHeight(HEADER_HEIGHT);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" style={{ height: headerHeight }}>
      <div className="container header__container" style={{ height: headerHeight }}>
        <div className="logo">
          <img src={img1} alt="" className="logo__img" />
          <p className="logo__text">
            Sec
            <span> 2.0</span>
          </p>
        </div>

        <nav className="nav">
          <Link to="/" className="nav__link">
            Главная
          </Link>
          <Link to="/services" className="nav__link">
            Услуги
          </Link>
          <Link to="/portfolio" className="nav__link">
            Портфолио
          </Link>
          <Link to="/artists" className="nav__link">
            Диджеи
          </Link>
          <Link to="/equipment" className="nav__link">
            Оборудование
          </Link>
          <Link to="/about" className="nav__link">
            О нас
          </Link>
        </nav>

        <div className="header__icons">
          <a href="https://t.me/your_telegram_username" target="_blank">
            <img
              className="header__img"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg"
              alt="Telegram"
              width="24"
              height="24"
            />
          </a>
          <a href="https://www.instagram.com/your_instagram_username/" target="_blank">
            <img
              className="header__img"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
              alt="Instagram"
              width="24"
              height="24"
            />
          </a>
          <a href="https://vk.com/your_vk_username" target="_blank">
            <img
              className="header__img"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vk.svg"
              alt="VK"
              width="24"
              height="24"
            />
          </a>
          <a href="https://www.youtube.com/channel/your_youtube_channel_id" target="_blank">
            <img
              className="header__img"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg"
              alt="YouTube"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
