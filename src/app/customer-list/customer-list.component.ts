import { Component, OnInit} from '@angular/core';
import { CustomerList } from '../app.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  customers!: CustomerList[];
  async loadUsers() {
    this.customers = await this.usersService.getCustomerList();
  }

  ngOnInit(): void {
    this.loadUsers();
  }
}
