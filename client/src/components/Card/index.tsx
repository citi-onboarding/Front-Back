import React from "react";
import { CardAccount, CardName, CardPrice } from "./style";

type Shirt = {
  name: String;
  marca: String;
  color: String;
  price: Number;
  size: "P" | "PP" | "M" | "G" | "GG";
};

type camisa={
    nome:String;
}

export default function Card({ name, marca, color, price, size }: Shirt) {
  return (
    <CardAccount
     
    >
      <CardName>{name}</CardName>
      <CardName>{color}</CardName>
      <CardPrice>${price.toString()}</CardPrice>
      <CardName>{size}</CardName>
    </CardAccount>
  );
}
