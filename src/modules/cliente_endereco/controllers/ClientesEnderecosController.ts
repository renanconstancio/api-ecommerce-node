import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import ListClienteEnderecoService from '../services/ListClienteEnderecoService';
import ShowClienteEnderecoService from '../services/ShowClienteEnderecoService';
import CreateClienteEnderecoService from '../services/CreateClienteEnderecoService';
import UpdateClienteEnderecoService from '../services/UpdateClienteEnderecoService';
import DeleteClienteEnderecoService from '../services/DeleteClienteEnderecoService';

export default class ClientesEnderecosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listEnderecos = new ListClienteEnderecoService();
    const enderecos = await listEnderecos.execute();

    return response.json(classToClass(enderecos));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showEnderecos = new ShowClienteEnderecoService();
    const enderecos = await showEnderecos.execute({ id });

    return response.json(classToClass(enderecos));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir,
    } = request.body;
    const createCliente = new CreateClienteEnderecoService();
    const cliente = await createCliente.execute({
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir,
    });
    return response.json(cliente);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir,
    } = request.body;
    const { id } = request.params;
    const updateProduct = new UpdateClienteEnderecoService();
    const product = await updateProduct.execute({
      id,
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir,
    });
    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteMarca = new DeleteClienteEnderecoService();

    await deleteMarca.execute({ id });

    return response.json([]);
  }
}
