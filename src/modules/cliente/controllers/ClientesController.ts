import { Request, Response } from 'express';
import CreateClienteService from '../services/CreateClienteService';
import DeleteClienteService from '../services/DeleteClienteService';
import ListClienteService from '../services/ListClienteService';
import ShowClienteService from '../services/ShowClienteService';
import UpdateClienteService from '../services/UpdateClienteService';
import { classToClass } from 'class-transformer';

export default class ClientesController {
  public async index(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;
    const listClientes = new ListClienteService();
    const clientes = await listClientes.execute(connect);

    return response.json(classToClass(clientes));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id } = request.params;
    const showCliente = new ShowClienteService();
    const cliente = await showCliente.execute({ id }, connect);

    return response.json(classToClass(cliente));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const {
      nome,
      email,
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir,
    } = request.body;
    const createCliente = new CreateClienteService();
    const cliente = await createCliente.execute(
      {
        nome: nome.trim(),
        email: email.trim(),
        senha,
        cnpj,
        ie,
        cpf,
        rg,
        telefone,
        celular,
        operadora,
        nascim,
        admin,
        excluir,
      },
      connect,
    );
    return response.json(cliente);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const {
      nome,
      email,
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir,
    } = request.body;
    const { id } = request.params;
    const updateProduct = new UpdateClienteService();
    const product = await updateProduct.execute(
      {
        id,
        nome,
        email,
        senha,
        cnpj,
        ie,
        cpf,
        rg,
        telefone,
        celular,
        operadora,
        nascim,
        admin,
        excluir,
      },
      connect,
    );
    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id } = request.params;
    const deleteMarca = new DeleteClienteService();

    await deleteMarca.execute({ id }, connect);

    return response.json([]);
  }
}
