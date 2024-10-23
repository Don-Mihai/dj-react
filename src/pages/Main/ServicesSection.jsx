import { useState } from 'react';
import './ServicesSection.scss';
import OrderModal from '../Services/OrderModal';

const ServicesSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="tickets container">
      <h2 className="title tickets__title">Услуги</h2>
      <div className="tickets__wrap">
        <div className="tickets__item">
          <h3 className="tickets__subtitle">Свадьба</h3>
          <span className="tickets__price">50</span>
          <div className="tickets__text-cont">
            <span className="tickets__text">1 Event</span>
            <span className="tickets__text">Basic Access</span>
            <span className="tickets__text">Club Events Only</span>
            <span className="tickets__text">Free Snacks</span>
          </div>

          <button className="button button-secondary" onClick={onOpenModal}>
            Заказать
          </button>
        </div>
        <div className="vert-line"></div>

        <div className="tickets__item">
          <h3 className="tickets__subtitle">Корпоратив</h3>
          <span className="tickets__price">90</span>
          <div className="tickets__text-cont">
            <span className="tickets__text">1 Event</span>
            <span className="tickets__text">Basic Access</span>
            <span className="tickets__text">Club Events Only</span>
            <span className="tickets__text">Free Snacks</span>
          </div>

          <button className="button button-secondary" onClick={onOpenModal}>
            Заказать
          </button>
        </div>

        <div className="vert-line"></div>

        <div className="tickets__item">
          <h3 className="tickets__subtitle">День рождения</h3>
          <span className="tickets__price">50</span>
          <div className="tickets__text-cont">
            <span className="tickets__text">1 Event</span>
            <span className="tickets__text">Basic Access</span>
            <span className="tickets__text">Club Events Only</span>
            <span className="tickets__text">Free Snacks</span>
          </div>
          <button className="button button-secondary" onClick={onOpenModal}>
            Заказать
          </button>
        </div>

        <div className="vert-line"></div>

        <div className="tickets__item">
          <h3 className="tickets__subtitle">Юбилей</h3>
          <span className="tickets__price">80</span>
          <div className="tickets__text-cont">
            <span className="tickets__text">1 Event</span>
            <span className="tickets__text">Basic Access</span>
            <span className="tickets__text">Club Events Only</span>
            <span className="tickets__text">Free Snacks</span>
          </div>
          <button className="button button-secondary" onClick={onOpenModal}>
            Заказать
          </button>
        </div>

        <OrderModal open={openModal} onClose={closeModal} />
      </div>
    </section>
  );
};

export default ServicesSection;
