export interface Amount {
  value: number;
  string: string;
}

export interface CreditAgreementResponse {
  instalment_count: number;
  apr: Amount;
  total_with_tax: Amount;
  cost_of_credit: Amount;
  cost_of_credit_pct: Amount;
  grand_total: Amount;
  max_financed_amount: Amount;
  instalment_amount: Amount;
  instalment_fee: Amount;
  instalment_total: Amount;
}

export interface Instalment {
  instalmentCount: number;
  instalmentFee: Amount;
  instalmentTotal: Amount;
}