import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ArtistCard.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ArtistCard = ({ artist }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOrder = () => {
    handleClose();
    // Передаем данные артиста через state в navigate
    navigate(`/services#calculator`, {
      state: { selectedArtist: artist }, // Передаем данные артиста
    });
  };

  return (
    <div className="artist-card">
      <img
        className="artist-card__image"
        src={artist.image}
        alt={artist.name}
        onClick={handleOpen}
      />
      <span className="artist-card__name">{artist.name}</span>
      <span className="artist-card__label">{artist.label}</span>
      <span className="artist-card__description">{artist.shortDescription}</span>

      {/* Модальное окно с полным описанием */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">{artist.name}</Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            {artist.fullDescription}
          </Typography>
          <Button onClick={handleOrder} variant="contained" color="primary">
            Заказать
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ArtistCard;
