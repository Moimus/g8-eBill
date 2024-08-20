import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Invoice } from "./model/invoice.model";
import { InvoiceService } from "./invoice.service";
import { EBillContainerComponent } from './e-bill-container/e-bill-container.component';
import { EBillFormComponent } from "./e-bill-form/e-bill-form.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EBillContainerComponent, CommonModule, HttpClientModule, EBillFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'g8-eBill';
  invoices: Invoice[] = [];
  invoiceService: InvoiceService;

  constructor(invoiceService: InvoiceService){
    this.invoiceService = invoiceService;
  }

  ngOnInit(): void{
    this.getInvoices();
  }

  getInvoices(): void{
    this.invoiceService.getInvoices()
      .subscribe(invoices => this.invoices = invoices);
  }
}
