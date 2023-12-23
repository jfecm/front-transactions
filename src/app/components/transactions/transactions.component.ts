import {Component, OnInit} from '@angular/core';
import {GET_TRANSACTIONS} from "../../graphql/queries.graphql";
import {Apollo} from "apollo-angular";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {

  loading: boolean | undefined;
  error: any;
  transactions: any[] | undefined;


  constructor(private apollo: Apollo) {

  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.apollo
      .watchQuery({
        query: GET_TRANSACTIONS
      })
      .valueChanges.subscribe(({data, error, loading}: any) => {
      this.loading = loading;
      this.transactions = data.getAllTransactions;
      this.error = error;
    });
  }
}
