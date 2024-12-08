import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const SendForm = ({ open, handleClose, orderDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      orderDetails,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.REACT_APP_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        emailData,
        process.env.REACT_APP_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        alert("Your order has been sent successfully!");
        handleClose();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the order.");
      });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Введите свои данные для заказа
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ваше имя"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Телефон"
            name="phone"
            type="tel"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Отправить заказ
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SendForm;
