import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";

const OrderModal = ({ open, onClose }) => {
  const [dj, setDj] = useState("dj1");
  const [host, setHost] = useState("host1");
  const [mc, setMc] = useState("mc1");
  const [artist, setArtist] = useState("artist1");
  const [hoursCount, setHoursCount] = useState(5);

  const handleSubmit = () => {
    console.log("Order confirmed with", { dj, host, mc, artist, hoursCount });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h6">Выберите услуги</Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel id="dj-label">Выбор Диджея</InputLabel>
          <Select labelId="dj-label" value={dj} onChange={(e) => setDj(e.target.value)}>
            <MenuItem value="dj1">Диджей 1 (5000 ₽)</MenuItem>
            <MenuItem value="dj2">Диджей 2 (6000 ₽)</MenuItem>
            <MenuItem value="dj3">Диджей 3 (7000 ₽)</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="host-label">Выбор Ведущего</InputLabel>
          <Select labelId="host-label" value={host} onChange={(e) => setHost(e.target.value)}>
            <MenuItem value="host1">Ведущий 1 (7000 ₽)</MenuItem>
            <MenuItem value="host2">Ведущий 2 (8000 ₽)</MenuItem>
            <MenuItem value="host3">Ведущий 3 (9000 ₽)</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="mc-label">Выбор МС</InputLabel>
          <Select labelId="mc-label" value={mc} onChange={(e) => setMc(e.target.value)}>
            <MenuItem value="mc1">МС 1 (6000 ₽)</MenuItem>
            <MenuItem value="mc2">МС 2 (7000 ₽)</MenuItem>
            <MenuItem value="mc3">МС 3 (8000 ₽)</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="artist-label">Выбор Артиста</InputLabel>
          <Select labelId="artist-label" value={artist} onChange={(e) => setArtist(e.target.value)}>
            <MenuItem value="artist1">Артист 1 (8000 ₽)</MenuItem>
            <MenuItem value="artist2">Артист 2 (9000 ₽)</MenuItem>
            <MenuItem value="artist3">Артист 3 (10000 ₽)</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="hoursCount">Количество часов</InputLabel>
          <input
            type="number"
            id="hoursCount"
            value={hoursCount}
            min="1"
            onChange={(e) => setHoursCount(e.target.value)}
            className="form-control"
          />
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
    </Modal>
  );
};

export default OrderModal;
