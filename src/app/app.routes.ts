import {Routes} from '@angular/router';
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
