import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service'
import { CustomerDetails } from '../app.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customer: CustomerDetails | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
  ) {}
  
  
  ngOnInit(): void {
    this.getId();
  }
  
  getId(): void {
    const id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.customer = this.usersService.getCustomerById(Number(id));
    console.log(this.customer);
  }
}
