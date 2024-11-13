import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";
import { InvestmentResult } from "./investment-results/investment-results.model";

@Injectable({providedIn:'root'})
export class InvestmentService {
    // resultData?:InvestmentResult[];
  resultData = signal<InvestmentResult[] | undefined>(undefined);

  
    calculateInvestmentResults(data:InvestmentInput) {
        const {initialInvestment,duration,expectedReturn,annualInvestment} = data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            // year: number; interest: number; valueEndOfYear: number; annualInvestment: number; totalInterest: number; totalAmountInvested: number;
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        // this.resultData = annualData; //normal
        this.resultData.set(annualData) //signal
    }
}