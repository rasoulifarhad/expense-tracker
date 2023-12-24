import { Component, OnInit } from '@angular/core';
import { IExpense } from '../expenses/expense';
import { Spending } from '../expenses/spending';
import { ExpenseService } from '../expenses/expense.service';
import { ExpenseHttpService } from '../expenses/expense-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

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

  constructor(private expenseService: ExpenseService, private expenseHttpService: ExpenseHttpService) {
    this.expenses = expenseService.getExpenses();
  }

  ngOnInit(): void {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const thisMonth = new Date();
    const lastMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() - 1);

    this.expenseHttpService.getExpenses(this.getPeriod(thisMonth)).subscribe(
      expenses => {
        this.expenses = expenses;
      },
      error => {
        console.log('Error retrieving expenses');
        console.error(error);
      }
    );

    this.expenseHttpService.getTotalSpending(this.getPeriod(thisMonth))
      .subscribe(amount => {
        this.currentMonthSpending = {
          month: months[thisMonth.getMonth()],
          amount
        }
      });

    this.expenseHttpService.getTotalSpending(this.getPeriod(lastMonth))
      .subscribe(amount => {
        this.lastMonthSpending = {
          month: months[lastMonth.getMonth()],
          amount
        }
      });

  }

  getPeriod(date: Date): string {
    const period = date.toJSON().split("-");
    return period[0] + "-" + period[1];
  }
}
