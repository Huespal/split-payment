import {
  CreditAgreement, CreditAgreementResponse
} from '@/domain/creditAgreement/types';

export const formatAPIResponse = (
  response: CreditAgreementResponse
): CreditAgreement => ({
  instalmentCount: response.instalment_count,
  apr: response.apr,
  totalWithTax: response.total_with_tax,
  costOfCredit: response.cost_of_credit,
  costOfCreditPct: response.cost_of_credit_pct,
  grandTotal: response.grand_total,
  maxFinancedAmount: response.max_financed_amount,
  instalmentAmount: response.instalment_amount,
  instalmentFee: response.instalment_fee,
  instalmentTotal: response.instalment_total
});
