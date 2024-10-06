import "./Services.scss";
import OrderModal from "./OrderModal";
import Calculator from "./Calculator";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#calculator") {
      const calculatorElement = document.getElementById("calculator");
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <section className="services-page container">
        <h1 className="title services-page__title">Наши Услуги</h1>

        <div className="service-banners">
          <div className="banner">
            <img
              src="https://via.placeholder.com/300x200?text=Диджеи"
              alt="Диджеи"
              className="banner-image"
            />
            <div className="banner-text">Диджеи</div>
          </div>
          <div className="banner">
            <img
              src="https://via.placeholder.com/300x200?text=МС"
              alt="МС"
              className="banner-image"
            />
            <div className="banner-text">МС</div>
          </div>
          <div className="banner">
            <img
              src="https://via.placeholder.com/300x200?text=Артисты"
              alt="Артисты"
              className="banner-image"
            />
            <div className="banner-text">Артисты</div>
          </div>
          <div className="banner">
            <img
              src="https://via.placeholder.com/300x200?text=Фото%2FВидео"
              alt="Фото/Видео"
              className="banner-image"
            />
            <div className="banner-text">Фото/Видео</div>
          </div>
        </div>

        <div className="service-item">
          <h2 className="service-title">Свадьба</h2>
          <span className="service-price">50</span>
          <p className="service-description">
            Свадьба – это особенный день, который должен запомниться на всю
            жизнь. Мы предлагаем организацию свадебных торжеств любой сложности.
            В стоимость входят услуги по планированию, украшение зала,
            музыкальное сопровождение и многое другое.
          </p>
          <ul className="service-benefits">
            <li>Полная организация мероприятия</li>
            <li>Декорации и цветы</li>
            <li>Фотосессия и видеосъемка</li>
            <li>Кейтеринг</li>
          </ul>
          <button className="button button-secondary order-button">
            Заказать
          </button>
        </div>

        <div className="service-item">
          <h2 className="service-title">Корпоратив</h2>
          <span className="service-price">90</span>
          <p className="service-description">
            Устраиваете корпоратив? Мы поможем вам организовать незабываемое
            событие для вашей команды. Веселые конкурсы, развлечения и
            тематические вечеринки – мы всё предусмотрим.
          </p>
          <ul className="service-benefits">
            <li>Тематические мероприятия</li>
            <li>Аренда площадки</li>
            <li>Кейтеринг и напитки</li>
            <li>Призы и сувениры для участников</li>
          </ul>
          <button className="button button-primary order-button">
            Заказать
          </button>
        </div>

        <div className="service-item">
          <h2 className="service-title">День рождения</h2>
          <span className="service-price">50</span>
          <p className="service-description">
            Мы организуем ваш день рождения на высшем уровне, предложив самые
            интересные развлечения, вкусную еду и весёлую программу.
          </p>
          <ul className="service-benefits">
            <li>Организация мероприятия под ключ</li>
            <li>Аренда площадки и музыкальное сопровождение</li>
            <li>Аниматоры и ведущие</li>
            <li>Фото- и видеосъемка</li>
          </ul>
          <button className="button button-secondary order-button">
            Заказать
          </button>
        </div>

        <div className="service-item">
          <h2 className="service-title">Юбилей</h2>
          <span className="service-price">80</span>
          <p className="service-description">
            Отметьте свой юбилей вместе с нами! Мы позаботимся о каждом аспекте
            вашего праздника – от концепции до реализации.
          </p>
          <ul className="service-benefits">
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Праздничное оформление</li>
            <li>Профессиональные ведущие и артисты</li>
            <li>Кейтеринг и развлекательная программа</li>
          </ul>
          <button className="button button-primary order-button">
            Заказать
          </button>
        </div>

        <OrderModal />

        <section className="testimonials">
          <h2 className="testimonials__title">Отзывы наших клиентов</h2>
          <div className="testimonials__wrap">
            <blockquote className="testimonial">
              <p>
                "Спасибо за организацию нашей свадьбы! Всё прошло просто
                замечательно, гости были в восторге!"
              </p>
              <cite>- Иван и Мария</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>
                "Корпоратив был на высшем уровне. Все сотрудники были довольны!"
              </p>
              <cite>- ООО "ПримерКомпания"</cite>
            </blockquote>
          </div>
        </section>
      </section>

      <Calculator />

      <section className="events-link">
        <a href="portfolio.html" className="events-link__content">
          Наши мероприятия
          <span className="arrow">→</span>
        </a>
      </section>
    </>
  );
};
export default Services;
