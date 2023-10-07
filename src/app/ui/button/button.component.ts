import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  _disabled = false;

  @Input() public btnHeight: '24' | '32' | '48' = '48';

  @Input() public btnType: 'button' | 'stroked' | 'flat' = 'button';

  @Input() public btnSquare = false;

  @Input() public btnIcon = 'home';

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

  @Input() set disabled(v: any) {
    if (v === 'true') {
      this._disabled = true;
    } else if (v === 'false') {
      this._disabled = false;
    } else {
      this._disabled = v;
    }
  }

  get disabled(): any {
    return this._disabled;
  }

  get btnHeightClass(): string {
    const list = [this.btnHeight];
    return list.join(' ');
  }
}
