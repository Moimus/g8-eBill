/*
 Reference: https://xeinkauf.de/app/uploads/2024/07/302-XRechnung-2024-06-20.pdf
*/

export interface Invoice{
  id: number;
  invoiceNumber: string; //identifier
  invoiceIssueDate: Date; //Date ISO 8601-1:2019
  invoiceTypeCode: string; //Code ISO 15000-5:2014 Anhang B
  invoiceCurrencyCode: string; //Code ISO 15000-5:2014 Anhang B
  vatAccountingCurrencyCode: string; //Code ISO 15000-5:2014 Anhang B
  valueAddedTaxPointDate: Date; //Date ISO 8601-1:2019
  valueAddedTaxPointCode: string; //Code ISO 15000-5:2014 Anhang B
  paymentDueDate: Date; //Date ISO 8601-1:2019
}

export class InvoiceModel implements Invoice{
  constructor(
      public id: number,
      public invoiceNumber: string,
      public invoiceIssueDate: Date,
      public invoiceTypeCode: string,
      public invoiceCurrencyCode: string,
      public vatAccountingCurrencyCode: string,
      public valueAddedTaxPointDate: Date,
      public valueAddedTaxPointCode: string,
      public paymentDueDate: Date
  ){}
}
