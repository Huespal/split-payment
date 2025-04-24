export interface Amount {
  value: number;
  string: string;
}

export interface Instalment {
  instalmentCount: number;
  instalmentFee: Amount;
  instalmentTotal: Amount;
}