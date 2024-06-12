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
type Shirt = {
  id: String;
  name: String;
  color: String;
  price: Number;
  size: "P" | "PP" | "M" | "G" | "GG";
};



const schema = z.object({
  name: z.string({invalid_type_error: "Nome é obrigatório"}).min(1, "Nome é obrigatório"),
  color: z.string().min(1, "Cor é obrigatória"),
  price: z.string().min(1, "Preço é obrigatório"),
  size: z.string().min(1, "Tamanho é obrigatório"),
});

export const RegisterShirt = () => {
  const router = useRouter();
  const onSubmit = (data: Shirt) => {
    data.price = Number(data.price);
    axiosApi.post("/shirt", data).then((response) => {
      if (response.status === 201) {
        router.push("/listagem");
      }
    }).catch((error) => {
      console.log(error);
    });

  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Shirt>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });
  const route = useRouter();

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
              {...register("name", { valueAsDate: true})}
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

        <SubmitButton margin="1em 0 0 0" onClick={()=>route.push("/telaDetalhamento")}>
          Cadastrar
        </SubmitButton>
      </ContentContainer>
    </Container>
  );
};

export default RegisterShirt;
