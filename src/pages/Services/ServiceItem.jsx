const ServiceItem = ({ service, onOpenModal }) => {
  return (
    <div className="service-item">
      <h2 className="service-title">{service.title}</h2>
      <span className="service-price">{service.price}</span>
      <p className="service-description">{service.description}</p>
      <ul className="service-benefits">
        {service.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <button
        className={`button button-${service.id % 2 === 0 ? "secondary" : "primary"} order-button`}
        onClick={onOpenModal}
      >
        Заказать
      </button>
    </div>
  );
};

export default ServiceItem;
