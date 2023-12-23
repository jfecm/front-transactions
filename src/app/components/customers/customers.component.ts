import {Component, OnInit} from '@angular/core';
import {GET_CUSTOMERS} from "../../graphql/queries.graphql";
import {Apollo} from "apollo-angular";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  loading: boolean | undefined;
  error: any;
  customers: any[] | undefined;

  constructor(private apollo: Apollo) {

  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.apollo
      .watchQuery({
        query: GET_CUSTOMERS
      })
      .valueChanges.subscribe(({data, error, loading}: any) => {
      this.loading = loading;
      this.customers = data.findAllCustomers;
      this.error = error;
    });
  }
}
