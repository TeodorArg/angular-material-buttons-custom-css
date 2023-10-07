import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public btnType: 'button' | 'stroked' | 'flat' = 'button';

  @Input() public btnColor:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'warn'
    | 'green-btn'
    | 'red-btn'
    | 'yellow-btn'
    | 'dark-btn'
    | 'white-btn' = 'primary';

  @Input() public btnLabel = '';
}
