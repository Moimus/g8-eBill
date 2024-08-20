import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-e-bill-container',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './e-bill-container.component.html',
  styleUrl: './e-bill-container.component.css'
})
export class EBillContainerComponent {

}
