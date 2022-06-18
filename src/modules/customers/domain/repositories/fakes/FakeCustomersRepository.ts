import { v4 as uuidv4 } from 'uuid';
import { ICreateCustomer } from '@modules/customers/domain/models/ICreateCustomer';
import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import { ICustomerPaginate } from '../../models/ICustomerPaginate';

class FakeCustomersRepository implements ICustomersRepository {
  private customers: Customer[] = [];

  async create({ name, email }: ICreateCustomer): Promise<Customer> {
    const customer = new Customer();

    customer.id = uuidv4();
    customer.name = name;
    customer.email = email;

    this.customers.push(customer);

    return customer;
  }

  async save(customer: Customer): Promise<Customer> {
    const findIndex = this.customers.findIndex(
      findCustomer => findCustomer.id === customer.id,
    );

    this.customers[findIndex] = customer;

    return customer;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async remove(customer: Customer): Promise<void> {}

  async findAll(): Promise<ICustomerPaginate> {
    return {} as ICustomerPaginate;
  }

  async findAllPaginate(): Promise<ICustomerPaginate> {
    const customersPaginate = {
      from: 1,
      to: 1,
      per_page: 1,
      total: 1,
      current_page: 1,
      prev_page: null,
      next_page: null,
      data: this.customers,
    };

    return customersPaginate;
  }

  async findByName(name: string): Promise<Customer | null> {
    const customer = this.customers.find(customer => customer.name === name);
    return customer as Customer;
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = this.customers.find(customer => customer.id === id);
    return customer as Customer;
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = this.customers.find(customer => customer.email === email);
    return customer as Customer;
  }
}

export default FakeCustomersRepository;
