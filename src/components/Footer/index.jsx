import img1 from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={img1} alt="" className="logo" />
      </div>
      <div className="footer__links">
        <a href="#" className="nav__link">
          ABOUT
        </a>
        <a href="#" className="nav__link">
          DISCOGRAPHY
        </a>
        <a href="#" className="nav__link">
          TOURS
        </a>
        <a href="#" className="nav__link">
          PHOTOS
        </a>
      </div>
      <div className="footer__icons">
        <a
          href="https://www.youtube.com/channel/your_youtube_channel_id"
          target="_blank"
        >
          <img
            className="header__img"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg"
            alt="YouTube"
            width="24"
            height="24"
          />
        </a>

        <a
          href="https://www.instagram.com/your_instagram_username/"
          target="_blank"
        >
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
        <span className="footer__rights">
          2024. All the rights ignored. XOXO
        </span>
      </div>
      <div className="deco footer__deco"></div>
    </footer>
  );
};

export default Footer;
