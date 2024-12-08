import styles from "./ServiceItem.module.scss";
const ServiceItem = ({ service, length, onOpenModal }) => {
  return (
    <>
      <div className="tickets__item">
        <h3 className="tickets__subtitle">{service.title}</h3>
        <span className="tickets__price">{service.price}</span>
        <div className="tickets__text-cont">
          {service.text.map((item, i) => (
            <span className="tickets__text" key={i}>
              {item}
            </span>
          ))}
        </div>

        <button className="button button-secondary tickets__button" onClick={onOpenModal}>
          Заказать
        </button>
      </div>
      {service.id !== length && <div className="vert-line"></div>}
    </>
  );
};

export default ServiceItem;
