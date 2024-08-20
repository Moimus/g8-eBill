import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Invoice, InvoiceModel } from "../model/invoice.model";
import { InvoiceService } from "../invoice.service";

@Component({
  selector: 'app-e-bill-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './e-bill-form.component.html',
  styleUrl: '../../styles.css'
})
export class EBillFormComponent {
  invoiceForm: FormGroup;
  invoice: Invoice;
  invoiceService: InvoiceService;

  constructor(invoiceService: InvoiceService, private formBuilder: FormBuilder){
    this.invoiceService = invoiceService;
    this.invoiceForm = this.formBuilder.group({
      invoiceNumber: [""],
      invoiceIssueDate: [""],
      invoiceTypeCode: [""],
      invoiceCurrencyCode: [""],
      vatAccountingCurrencyCode: [""],
      valueAddedTaxPointDate: [""],
      valueAddedTaxPointCode: [""],
      paymentDueDate: [""]
    });

    const inValue = this.invoiceForm.value;
    this.invoice = new InvoiceModel(
      inValue.id,
      inValue.invoiceNumber,
      new Date(inValue.invoiceIssueDate),
      inValue.invoiceTypeCode,
      inValue.invoiceCurrencyCode,
      inValue.vatAccountingCurrencyCode,
      new Date(inValue.valueAddedTaxPointDate),
      inValue.valueAddedTaxPointCode,
      new Date(inValue.paymentDueDate)
    );
  }

  onSubmit(){
    console.log(this.invoiceService);
    this.invoiceService.createInvoice(this.invoice).subscribe(response => {console.log(response)});
  }

  change(){
    const inValue = this.invoiceForm.value;
    this.invoice = new InvoiceModel(
      inValue.id,
      inValue.invoiceNumber,
      new Date(inValue.invoiceIssueDate),
      inValue.invoiceTypeCode,
      inValue.invoiceCurrencyCode,
      inValue.vatAccountingCurrencyCode,
      new Date(inValue.valueAddedTaxPointDate),
      inValue.valueAddedTaxPointCode,
      new Date(inValue.paymentDueDate)
    );
  }

  debugForm(){
    console.log(this.invoiceForm);
    console.log(this);
  }
}
