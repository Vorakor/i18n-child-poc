import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vehicle-modal-purchase-information',
  templateUrl: './purchase-information.component.html',
  styleUrls: ['./purchase-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
