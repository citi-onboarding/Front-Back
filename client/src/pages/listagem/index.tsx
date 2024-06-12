import React, { useEffect } from "react";
import {
  Container,
  ContentBox,
  ContainerList,
  ContentCardText,
  CardDescription,
  ContentCard,
  CardName,
  CardPrice,
  ContentTitle,
} from "./style";
 
import { useRouter } from "next/router";
import { axiosApi } from "services/api";
import { GetServerSideProps } from "next";
import { Card } from "components";

type Shirt = {
  id: String;
  name: String;
  color: String;
  price: Number;
  size: "P" | "PP" | "M" | "G" | "GG";
};

type ShirtsProps = {
  list: Shirt[];
};

type colorProps="red"|"blue"|"green"|"yellow"|"black"|"white";


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await axiosApi.get("/shirt");
    return {
      props: {
        list: data,
      },
    };
  } catch (error) {
    return {
      props: {
        list: null,
      },
    };
  }
};

export default function Shirts({ list }: ShirtsProps) {
  const route = useRouter();
  const handeleColor = (item: Shirt)=>{
    const numberLength = 4
    if (item.name.length > numberLength){
      return "red"
    } else{
      return "blue"
    
    }
  }
  const router = useRouter();
  {
    return (
      <Container>
        <ContentTitle>
          <h1>Camisetas</h1>
        </ContentTitle>
        <ContentBox>
          {list === null && (
            <h2
              style={{
                alignSelf: "center",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                color: "#000",
              }}
            >
              Não há camisetas cadastradas
            </h2>
          )}
          <ContainerList>
            {list?.map((item, index) => (
             <  Card  color={item.color} name={item.name} price={item.price} size={item.size} key={index} marca={"oiii"} onClick={()=>route.push("/telaDetalhamento"+ item.id)} />
            ))}
          </ContainerList>
        </ContentBox>
      </Container>
    );
  }
}
