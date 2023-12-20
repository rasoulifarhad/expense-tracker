import { Component, Input, OnInit } from '@angular/core';
import { Spending } from '../spending';

@Component({
  selector: 'app-briefing-cards',
  templateUrl: './briefing-cards.component.html',
  styleUrls: ['./briefing-cards.component.css'],
})
export class BriefingCardsComponent implements OnInit {
  @Input() currentMonthSpending!: Spending;
  @Input() lastMonthSpending!: Spending;

  ngOnInit(): void {}
}
