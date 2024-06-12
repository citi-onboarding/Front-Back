import { Request, Response } from "express";
import { Citi, Crud } from "../global";

type Size= "PP" | "P" | "M" | "G" | "GG";


class ShirtController implements Crud {
  constructor(private readonly citi = new Citi("Shirt")) {}
  create = async (request: Request, response: Response) => {
    const sizes: Size[] = ["PP", "P", "M", "G", "GG"];

    const { color, size, price, name } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      color,
      size,
      price,
      name
    );
    if (isAnyUndefined)
      return response
        .status(400)
        .send({ message: "Há valores não preenchidos" });

    if (typeof price !== "number")
      return response.status(400).send({ message: "O preço é inválido" });
    if (typeof name !== "string")
      return response
        .status(400)
        .send({ message: "O nome da coleção é inválido" });

    if (typeof color !== "string")
      return response.status(400).send({ message: "A cor é inválida" });

    if (!sizes.includes(size as Size))
      return response.status(400).send({ message: "O tamanho é inválido" });

    const newShirt = { color, size, price, name };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(
      newShirt
    );

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  getById = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { httpStatus, value } = await this.citi.findById(id);
    return response.status(httpStatus).send(value);
  };

  getEmpyte = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();
    const empyteValues: any[] = [];

    return response.status(httpStatus).send(empyteValues);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const sizes: Size[] = ["PP", "P", "M", "G", "GG"];

    const { id } = request.params;
    const { color, size, price, name } = request.body;

    if (price && typeof price !== "number")
      return response.status(400).send({ message: "O preço é inválido" });

    if (name && typeof name !== "string")
      return response
        .status(400)
        .send({ message: "O nome da coleção é inválido" });

    if (color && typeof color !== "string")
      return response.status(400).send({ message: "A cor é inválida" });

    if (size && !["PP", "P", "M", "G", "GG"].includes(size as Size))
      return response.status(400).send({ message: "O tamanho é inválido" });

    const updatedValues = { color, size, price, name };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new ShirtController();
