import { Box, Button, FormControl, Input, InputLabel, Modal, Typography } from "@mui/material";
import { createPortal } from "react-dom";

const OrderModal = ({ open, onClose, count, item }) => {
  const handleSubmit = () => {
    console.log("Order confirmed with", { count });
    onClose();
  };

  return createPortal(
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h4">Ваш заказ</Typography>
        <Typography variant="h6">{item.title}</Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="hoursCount">Количество часов</InputLabel>
          <Input id="hoursCount" type="text" value={count} disabled />
        </FormControl>

        <Button onClick={handleSubmit} variant="contained" color="primary">
          Подтвердить заказ
        </Button>
        <div className="social-buttons">
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noreferrer"
            className="social-button telegram"
          >
            <i className="fab fa-telegram-plane"></i> Заказать через Telegram
          </a>
          <a
            href="https://wa.me/your_whatsapp_number"
            target="_blank"
            rel="noreferrer"
            className="social-button whatsapp"
          >
            <i className="fab fa-whatsapp"></i> Заказать через WhatsApp
          </a>
        </div>
      </Box>
    </Modal>,
    document.body
  );
};

export default OrderModal;
