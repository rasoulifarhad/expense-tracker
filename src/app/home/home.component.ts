import { Component } from '@angular/core';
import { IExpense } from '../expenses/expense';
import { Spending } from '../expenses/spending';
import { ExpenseService } from '../expenses/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  expenses: IExpense[];

  // expenses: IExpense[] = [
  //   {
  //     description: 'First shopping for the month',
  //     amount: 20,
  //     date: '2019-08-12',
  //   },
  //   {
  //     description: 'Bicycle for Amy',
  //     amount: 10,
  //     date: '2019-08-08',
  //   },
  //   {
  //     description: 'First shopping for the month',
  //     amount: 14,
  //     date: '2019-08-21',
  //   },
  // ];

  currentMonthSpending: Spending = { amount: 300, month: 'July' };
  lastMonthSpending: Spending = { amount: 44, month: 'August' };

  // private _expenseService: ExpenseService;
  // constructor() {
  //   this._expenseService = new ExpenseService();
  //   this.expenses = this._expenseService.getExpenses();
  // }

  constructor(private expenseService: ExpenseService) {
    this.expenses = expenseService.getExpenses();
  }
}
