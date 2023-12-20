import { Component, Input } from '@angular/core';
import { IExpense } from '../expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {

  @Input() expenses: IExpense[] = [];

  @Input() showButton = true;
}
