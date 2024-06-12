import React, { useEffect } from "react";
import {
  Container,
  ContentContainer,
  FormContainer,
  ContentContainerTitle,
  SubmitButton,
} from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { TextField, MenuItem, Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosApi } from "services/api";
import axios from "axios";

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

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  color: z.string().min(1, "Cor é obrigatória"),
  price: z.string().min(1, "Preço é obrigatório"),
  size: z.string().min(1, "Tamanho é obrigatório"),
});

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  try {
    const response = await axiosApi.get(`/shirt/${id}`);
    console.log(response.data);
    return {
      props: { shirt: response.data },
    };
  } catch (error) {
    console.log(error);
  }
}
export const EditShirt = ({ shirt }: { shirt: string }) => {
  return (
    <Container>
      <ContentContainerTitle>
        <h4>Cadastrar</h4>
      </ContentContainerTitle>
      <ContentContainer>
        <FormContainer>
          <div style={{ position: "relative", width: "100%" }}>
            <TextField
              margin="normal"
              defaultValue={shirt.name}
              {...register("name", { required: true })}
              variant="standard"
              label={
                <Typography variant="inherit" component="div">
                  Nome <span style={{ color: "red" }}>*</span>
                </Typography>
              }
              sx={{
                marginTop: "-1em",
                width: "100%",
                height: "3.2em",
                "& .MuiInputLabel-root": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148, 1)",
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148)",
                },
              }}
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <TextField
              margin="normal"
              {...register("color", { required: true })}
              variant="standard"
              defaultValue={shirt.color}
              label={
                <Typography variant="inherit" component="div">
                  Cor <span style={{ color: "red" }}>*</span>
                </Typography>
              }
              sx={{
                marginTop: "-1em",
                width: "100%",
                height: "3.2em",
                "& .MuiInputLabel-root": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148, 1)",
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148)",
                },
              }}
            />
            {errors.color && (
              <p style={{ color: "red" }}>{errors.color.message}</p>
            )}
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <TextField
              margin="normal"
              {...register("price", { required: true })}
              variant="standard"
              defaultValue={shirt.price}
              label={
                <Typography variant="inherit" component="div">
                  preço <span style={{ color: "red" }}>*</span>
                </Typography>
              }
              sx={{
                marginTop: "-1em",
                width: "100%",
                height: "3.2em",
                "& .MuiInputLabel-root": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148, 1)",
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148)",
                },
              }}
            />
            {errors.price && (
              <p style={{ color: "red" }}>{errors.price.message}</p>
            )}
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <TextField
              margin="normal"
              {...register("size", { required: true })}
              variant="standard"
              defaultValue={shirt.size}
              label={
                <Typography variant="inherit" component="div">
                  tamanho <span style={{ color: "red" }}>*</span>
                </Typography>
              }
              sx={{
                marginTop: "-1em",
                width: "100%",
                height: "3.2em",
                "& .MuiInputLabel-root": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148, 1)",
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: "1.5rem",
                  color: "rgba(0, 76, 148)",
                },
              }}
            />
            {errors.size && (
              <p style={{ color: "red" }}>{errors.size.message}</p>
            )}
          </div>
        </FormContainer>

        <SubmitButton margin="1em 0 0 0" onClick={handleSubmit(onSubmit)}>
          Cadastrar
        </SubmitButton>
      </ContentContainer>
    </Container>
  );
};

export default EditShirt;
