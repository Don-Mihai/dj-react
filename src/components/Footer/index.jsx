import { Link } from "react-router-dom";
import img1 from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to={"/"}>
        <div className="logo footer__logo">
          <img src={img1} alt="" className="logo__img" />
          <p className="logo__text">
            Sec
            <span> 2.0</span>
          </p>
        </div>
      </Link>
      <nav className="footer__links">
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
      <div className="footer__icons">
        <a href="https://www.youtube.com/channel/your_youtube_channel_id" target="_blank">
          <img
            className="header__img"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg"
            alt="YouTube"
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

        <a href="https://t.me/your_telegram_username" target="_blank">
          <img
            className="header__img"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg"
            alt="Telegram"
            width="24"
            height="24"
          />
        </a>
      </div>
      <div>
        <span className="footer__rights">2024. All the rights ignored. XOXO</span>
      </div>
      <div className="deco footer__deco"></div>
    </footer>
  );
};

export default Footer;
