import { useState } from 'react';
import './ServicesSection.scss';
import OrderModal from '../../Services/OrderModal';
import { serviceData } from '../../../utils';
import ServiceItem from './ServiceItem';

const ServicesSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="tickets container">
      <h2 key="title" className="title tickets__title">
        Услуги
      </h2>
      <div className="tickets__wrap">
        {serviceData.map((service, i, arr) => (
          <ServiceItem
            key={service.id}
            service={service}
            length={arr.length}
            onOpenModal={onOpenModal}
          />
        ))}

        <OrderModal open={openModal} onClose={closeModal} />
      </div>
    </section>
  );
};

export default ServicesSection;
