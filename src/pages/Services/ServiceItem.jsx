import classNames from "classnames";

const ServiceItem = ({ service, onOpenModal }) => {
  const buttonClass = classNames(
    "button",
    "order-button",
    `button-${service.id % 2 === 0 ? "secondary" : "primary"}`
  );

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
      <button className={buttonClass} onClick={onOpenModal}>
        Заказать
      </button>
    </div>
  );
};

export default ServiceItem;
