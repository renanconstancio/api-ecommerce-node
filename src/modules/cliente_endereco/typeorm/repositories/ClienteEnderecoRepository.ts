import { EntityRepository, Repository } from 'typeorm';
import ClienteEndereco from '../entities/ClienteEndereco';

// interface IFindClientesEnderecos {
//   id: number;
// }

@EntityRepository(ClienteEndereco)
class ClienteEndercoRepository extends Repository<ClienteEndereco> {
  // public async findByEmail(email: string): Promise<ClienteEndereco | undefined> {
  //   const cliente = this.findOne({
  //     where: {
  //       email,
  //     },
  //   });
  //   return cliente;
  // }
  // public async findByNome(nome: string): Promise<Cliente | undefined> {
  //   const cliente = this.findOne({
  //     where: {
  //       nome,
  //     },
  //   });
  //   return cliente;
  // }
  // public async findAllByIds(clientes: IFindClientes[]): Promise<Cliente[]> {
  //   const clienteIds = clientes.map(cliente => cliente.id);
  //   const existentClientes = await this.find({
  //     where: {
  //       id: In(clienteIds),
  //     },
  //   });
  //   return existentClientes;
  // }
}

export default ClienteEndercoRepository;
