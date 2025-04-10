import { api } from '@/core/api';
import { formatAPIResponse } from '@/domain/creditAgreement/helpers';
import {
  CreditAgreement, CreditAgreementResponse
} from '@/domain/creditAgreement/types';
import { useQuery } from '@tanstack/react-query';

export const useGetCreditAgreements = (totalWithTax: number) =>
  useQuery<CreditAgreementResponse[], void, CreditAgreement[]>({
    queryKey: ['creditAgreement', totalWithTax],
    queryFn: () => api(`credit_agreements?totalWithTax=${totalWithTax}`, 'GET'),
    select: (response = []) => response.map(formatAPIResponse)
  });