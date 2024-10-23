const ServiceItem = ({ service, length, onOpenModal }) => {
  return (
    <>
      <div className="tickets__item">
        <h3 className="tickets__subtitle">{service.title}</h3>
        <span className="tickets__price">{service.price}</span>
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
      {service.id !== length && <div className="vert-line"></div>}
    </>
  );
};

export default ServiceItem;
