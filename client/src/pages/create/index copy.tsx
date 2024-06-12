import React from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosApi } from "services/api";

// Tipos e schemas para o formulário de camisas
type Shirt = {
  name: string;
  color: string;
  price: string;
  size: "P" | "PP" | "M" | "G" | "GG";
};

const shirtSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  color: z.string().min(1, "Cor é obrigatória"),
  price: z.string().min(1, "Preço é obrigatório"),
  size: z.string().min(1, "Tamanho é obrigatório"),
});

// Tipos e schemas para o formulário de calças
type Pants = {
  name: string;
  color: string;
  price: string;
  waist: number;
  length: number;
};

const pantsSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  color: z.string().min(1, "Cor é obrigatória"),
  price: z.string().min(1, "Preço é obrigatório"),
  waist: z.number().min(1, "Cintura é obrigatória"),
  length: z.number().min(1, "Comprimento é obrigatório"),
});

const RegisterPage: React.FC = () => {
  // Formulário de Camisas
  const {
    register: registerShirt,
    handleSubmit: handleSubmitShirt,
    formState: { errors: errorsShirt },
    watch: watchShirt,
  } = useForm<Shirt>({
    resolver: zodResolver(shirtSchema),
  });

  const onSubmitShirt = async (data: Shirt) => {
    try {
      data.price = parseFloat(data.price);
      const response = await axiosApi.post("/shirt", data);
      if (response.status === 201) {
        alert("Camisa cadastrada com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const watchShirtValues = watchShirt();

  // Formulário de Calças
  const {
    register: registerPants,
    handleSubmit: handleSubmitPants,
    formState: { errors: errorsPants },
    watch: watchPants,
  } = useForm<Pants>({
    resolver: zodResolver(pantsSchema),
  });

  const onSubmitPants = async (data: Pants) => {
    try {
      data.price = parseFloat(data.price);
      const response = await axiosApi.post("/pants", data);
      if (response.status === 201) {
        alert("Calça cadastrada com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const watchPantsValues = watchPants();

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastro de Produtos
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Cadastrar Camisa
      </Typography>
      <form onSubmit={handleSubmitShirt(onSubmitShirt)}>
        <TextField
          {...registerShirt("name")}
          label="Nome"
          error={!!errorsShirt.name}
          helperText={errorsShirt.name?.message}
        />
        <TextField
          {...registerShirt("color")}
          label="Cor"
          error={!!errorsShirt.color}
          helperText={errorsShirt.color?.message}
        />
        <TextField
          {...registerShirt("price")}
          label="Preço"
          error={!!errorsShirt.price}
          helperText={errorsShirt.price?.message}
        />
        <TextField
          {...registerShirt("size")}
          label="Tamanho"
          error={!!errorsShirt.size}
          helperText={errorsShirt.size?.message}
        />
        <Button type="submit">Cadastrar Camisa</Button>
      </form>

      <div>
        <Typography variant="h6">
          Valores observados no formulário de Camisas:
        </Typography>
        <pre>{JSON.stringify(watchShirtValues, null, 2)}</pre>
      </div>

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        style={{ marginTop: "2rem" }}
      >
        Cadastrar Calça
      </Typography>
      <form onSubmit={handleSubmitPants(onSubmitPants)}>
        <TextField
          {...registerPants("name")}
          label="Nome"
          error={!!errorsPants.name}
          helperText={errorsPants.name?.message}
        />
        <TextField
          {...registerPants("color")}
          label="Cor"
          error={!!errorsPants.color}
          helperText={errorsPants.color?.message}
        />
        <TextField
          {...registerPants("price")}
          label="Preço"
          error={!!errorsPants.price}
          helperText={errorsPants.price?.message}
        />
        <TextField
          {...registerPants("waist", { valueAsNumber: true })}
          label="Cintura"
          error={!!errorsPants.waist}
          helperText={errorsPants.waist?.message}
        />
        <TextField
          {...registerPants("length", { valueAsNumber: true })}
          label="Comprimento"
          error={!!errorsPants.length}
          helperText={errorsPants.length?.message}
        />
        <Button type="submit">Cadastrar Calça</Button>
      </form>

      <div>
        <Typography variant="h6">
          Valores observados no formulário de Calças:
        </Typography>
        <pre>{JSON.stringify(watchPantsValues, null, 2)}</pre>
      </div>
    </Container>
  );
};

export default RegisterPage;
