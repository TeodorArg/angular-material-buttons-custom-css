import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public btnType: 'button' | 'stroked' | 'flat' = 'button';

  @Input() public btnColor: 'primary' | 'accent' | 'warn' = 'primary';

  @Input() public btnLabel = '';
}
