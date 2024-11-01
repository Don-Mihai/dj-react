import "./Services.scss";
import OrderModal from "./OrderModal";
import Calculator from "./Calculator";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { serviceData } from "../../utils";
import ServiceItem from "./ServiceItem";
import Banner from "./Banner";

const services = [
  { ru: 'Диджеи', en: 'dj' },
  { ru: 'МС', en: 'mc' },
  { ru: 'Артисты', en: 'artist' },
  { ru: 'Фото/Видео', en: 'Proto/Video' },
];

const Services = () => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
  }

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
          {services.map((service, i) => (
            <Banner key={i} text={service.ru} category={service.en} />
          ))}
        </div>

        {serviceData.map((service) => (
          <ServiceItem key={service.id} service={service} onOpenModal={onOpenModal} />
        ))}

        <OrderModal open={openModal} onClose={closeModal} />

        <section className="testimonials">
          <h2 className="testimonials__title">Отзывы наших клиентов</h2>
          <div className="testimonials__wrap">
            <blockquote className="testimonial">
              <p>
                "Спасибо за организацию нашей свадьбы! Всё прошло просто замечательно, гости были в
                восторге!"
              </p>
              <cite>- Иван и Мария</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Корпоратив был на высшем уровне. Все сотрудники были довольны!"</p>
              <cite>- ООО "ПримерКомпания"</cite>
            </blockquote>
          </div>
        </section>
      </section>

      <Calculator />

      <section className="events-link">
        <Link to="/portfolio" className="events-link__content">
          Наши мероприятия
          <span className="arrow">→</span>
        </Link>
      </section>
    </>
  );
};
export default Services;
