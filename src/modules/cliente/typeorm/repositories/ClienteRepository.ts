import { EntityRepository, In, Repository } from 'typeorm';
import Cliente from '../entities/Cliente';

interface IFindClientes {
  id: number;
}

@EntityRepository(Cliente)
class ClienteRepository extends Repository<Cliente> {
  public async findByEmail(email: string): Promise<Cliente | undefined> {
    const cliente = this.findOne({
      where: {
        email,
      },
    });

    return cliente;
  }

  public async findByNome(nome: string): Promise<Cliente | undefined> {
    const cliente = this.findOne({
      where: {
        nome,
      },
    });

    return cliente;
  }

  public async findAllByIds(clientes: IFindClientes[]): Promise<Cliente[]> {
    const clienteIds = clientes.map(cliente => cliente.id);

    const existentClientes = await this.find({
      where: {
        id: In(clienteIds),
      },
    });

    return existentClientes;
  }
}

export default ClienteRepository;
