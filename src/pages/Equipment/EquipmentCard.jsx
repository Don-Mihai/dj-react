import { useState } from "react";
import "./Equipment.scss";
import OrderModal from "./OrderModal";

const EquipmentCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onChangeCount = (number) => {
    if (count + number < 1) return;
    setCount(count + number);
  };

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="equipment-card">
        <div className="equipment-card__image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="equipment-card__info">
          <h2 className="equipment-card__title">{item.title}</h2>
          <p className="equipment-card__description">{item.description}</p>
        </div>
        <div className="equipment-card__order">
          <div className="equipment-card__price">{item.price} ₽/час</div>
          <div className="equipment-card__counter">
            <span className="equipment-card__count" onClick={() => onChangeCount(-1)}>
              -
            </span>
            <input
              className="equipment-card__input"
              type="text"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <span className="equipment-card__count" onClick={() => onChangeCount(1)}>
              +
            </span>
          </div>
          <button className="button order-button button-primary" onClick={onOpenModal}>
            Арендовать
          </button>
        </div>
      </div>
      <OrderModal
        open={isOpenModal}
        onClose={closeModal}
        count={count}
        onChangeCount={onChangeCount}
        item={item}
      />
    </>
  );
};

export default EquipmentCard;
