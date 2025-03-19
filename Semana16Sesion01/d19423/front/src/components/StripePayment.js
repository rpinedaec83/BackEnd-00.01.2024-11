import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { loadStripe } from "@stripe/stripe-js";

function StripePayment() {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/300/150" />
      <Card.Title>Titulo del Producto</Card.Title>
      <Card.Text>Descripcion del producto</Card.Text>
      <Button variant="primary">
        Compra este curso por 100
      </Button>
    </Card>
  );
}
export default StripePayment;
