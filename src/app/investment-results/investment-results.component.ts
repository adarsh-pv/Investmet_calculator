import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentResult } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//  @Input() results?:InvestmentResult[]; //normal
// results = input<InvestmentResult[]>()
private investmentService = inject(InvestmentService)

// get results (){
//   return this.investmentService.resultData;
// }
 results = computed(()=>this.investmentService.resultData())
}
