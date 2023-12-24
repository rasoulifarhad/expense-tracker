import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IExpense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseHttpService {
  private url = 'api/expenses.json';

  constructor(private http: HttpClient) {}

  getExpenses(date: string): Observable<IExpense[]> {
    console.log('Expenses for: ', date);
    return this.http.get<IExpense[]>(this.url).pipe(
      map((expenses) => {
        return expenses.filter((e) => e.date.includes(date));
      })
    );
  }

  getTotalSpending(date: string): Observable<number> {
    console.log('Total Expenses for: ', date);
    return this.getExpenses(date).pipe(
      map((expenses) => {
        return expenses.reduce((per, cur) => per + cur.amount, 0);
      })
    );
  }
}
