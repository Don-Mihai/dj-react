import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {artistsData} from "../../utils.js";
import SendForm from "../../components/SendForm";

const Calculator = () => {
    const location = useLocation();
    const selectedPerson = location.state?.selectedArtist; // Получаем выбранного человека (артиста, диджея, ведущего)

    // Состояния для цен
    const [serviceType, setServiceType] = useState("wedding");
    const [hoursCount, setHoursCount] = useState(5);
    const [djPrice, setDjPrice] = useState(
        artistsData.find((artist) => artist.category === "dj")?.price || 5000,
    );
    const [hostPrice, setHostPrice] = useState(
        artistsData.find((artist) => artist.category === "mc")?.price || 7000,
    );
    const [artistPrice, setArtistPrice] = useState(artistsData[0]?.price || 8000);

    // Эффект для установки выбранного человека
    useEffect(() => {
        if (selectedPerson) {
            if (selectedPerson.category === "dj") {
                setDjPrice(selectedPerson.price);
            } else if (selectedPerson.category === "mc") {
                setHostPrice(selectedPerson.price);
            } else if (selectedPerson.category === "artist") {
                setArtistPrice(selectedPerson.price);
            }
        }
    }, [selectedPerson]);

    const [totalCost, setTotalCost] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const orderDetails = {
        serviceType,
        hoursCount,
        djPrice,
        hostPrice,
        artistPrice,
        totalCost,
    };

    const calculateTotal = () => {
        const total =
            (parseInt(djPrice) + parseInt(hostPrice) + parseInt(artistPrice)) *
            hoursCount;
        setTotalCost(total);
    };

    const handleOrderClick = () => {
        calculateTotal();
        setIsModalOpen(true);
    };

    const createOrderMessage = () => {
        return encodeURIComponent(
            `Заказ услуги: ${serviceType.toUpperCase()}\n` +
            `Количество часов: ${hoursCount}\n` +
            `Диджей: ${djPrice} ₽\n` +
            `Ведущий: ${hostPrice} ₽\n` +
            `Артист: ${artistPrice} ₽\n` +
            `Общая стоимость: ${totalCost} ₽`,
        );
    };

    return (
        <section id="calculator" className="calculator container">
            <h2 className="calculator__title">Калькулятор услуг</h2>
            <form className="calculator__form">
                <div className="form-group">
                    <label htmlFor="serviceType">Тип услуги:</label>
                    <select
                        id="serviceType"
                        className="form-control"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                    >
                        <option value="wedding">Свадьба</option>
                        <option value="corporate">Корпоратив</option>
                        <option value="birthday">День рождения</option>
                        <option value="jubilee">Юбилей</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="hoursCount">Количество часов:</label>
                    <input
                        type="number"
                        id="hoursCount"
                        className="form-control"
                        value={hoursCount}
                        onChange={(e) => setHoursCount(e.target.value)}
                        min="1"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dj">Выбор Диджея:</label>
                    <select
                        id="dj"
                        className="form-control"
                        value={djPrice}
                        onChange={(e) => setDjPrice(e.target.value)}
                    >
                        {artistsData
                            .filter((artist) => artist.category === "dj")
                            .map((artist) => (
                                <option key={artist.id} value={artist.price}>
                                    {artist.name} ({artist.price} ₽)
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="host">Выбор Ведущего:</label>
                    <select
                        id="host"
                        className="form-control"
                        value={hostPrice}
                        onChange={(e) => setHostPrice(e.target.value)}
                    >
                        {artistsData
                            .filter((artist) => artist.category === "mc")
                            .map((artist) => (
                                <option key={artist.id} value={artist.price}>
                                    {artist.name} ({artist.price} ₽)
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="artist">Выбор Артиста:</label>
                    <select
                        id="artist"
                        className="form-control"
                        value={artistPrice}
                        onChange={(e) => setArtistPrice(e.target.value)}
                    >
                        {artistsData
                            .filter((artist) => artist.category === "artist")
                            .map((artist) => (
                                <option key={artist.id} value={artist.price}>
                                    {artist.name} ({artist.price} ₽)
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <button
                        type="button"
                        onClick={calculateTotal}
                        className="button button-primary"
                    >
                        Рассчитать стоимость
                    </button>
                </div>

                <div className="form-group">
                    <h3>Общая стоимость: {totalCost} ₽</h3>
                </div>

                <div className="form-group">
                    <button
                        type="button"
                        onClick={handleOrderClick}
                        className="button button-primary"
                    >
                        Заказать
                    </button>
                </div>

                <SendForm
                    open={isModalOpen}
                    handleClose={handleCloseModal}
                    orderDetails={orderDetails}
                />

                <div className="social-buttons">
                    <a
                        href={`https://t.me/Don_Mihai?text=${createOrderMessage()}`}
                        target="_blank"
                        className="social-button telegram"
                    >
                        <i className="fab fa-telegram-plane"></i> Заказать через Telegram
                    </a>
                    <a
                        href={`https://wa.me/your_whatsapp_number?text=${createOrderMessage()}`}
                        target="_blank"
                        className="social-button whatsapp"
                    >
                        <i className="fab fa-whatsapp"></i> Заказать через WhatsApp
                    </a>
                </div>
            </form>
        </section>
    );
};

export default Calculator;
