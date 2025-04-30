import {
  CreditAgreementResponse,
  Instalment
} from '@/domain/creditAgreement/types';

export const formatAPIResponse = (
  response: CreditAgreementResponse
): Instalment => ({
  instalmentCount: response.instalment_count,
  instalmentFee: response.instalment_fee,
  instalmentTotal: response.instalment_total
});
