import { default as data } from '../customerList.json';
import { default as details } from '../customerDetails.json';
import { CustomerList, CustomerDetails } from './app.model';

export class UsersService {
  getCustomerList(): Promise<CustomerList[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 2000);
    });
  }

  getCustomerById(id: number): CustomerDetails | undefined {
    return details.find((r: CustomerDetails) => r.id === id);
  }
}
