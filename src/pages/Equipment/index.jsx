import "./Equipment.scss";
import { equipmentData } from "../../utils";
import EquipmentCard from "./EquipmentCard";
import { useState } from "react";

const Equipment = () => {
  const [count, setCount] = useState(1);

  const onChangeCount = (number) => {
    if (count + number < 1) return;
    setCount(count + number);
  };

  return (
    <main className="equipment-page container">
      <h1 className="title equipment-page__title">Оборудование</h1>
      {equipmentData.map((item) => (
        <EquipmentCard key={item.id} item={item} count={count} onChangeCount={onChangeCount} />
      ))}
    </main>
  );
};

export default Equipment;
