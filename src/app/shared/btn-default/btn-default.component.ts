import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-default',
  templateUrl: './btn-default.component.html',
  styleUrls: ['./btn-default.component.scss']
})

export class BtnDefaultComponent {
  @Input() title!: string;
  @Input() color!: string;
  @Input() block!: boolean;
  @Input() disabled!: boolean | Function;
  @Input() toggle!: string;
  @Input() target!: string;
  @Input() dismiss!: string;

  @Output() callParent = new EventEmitter<any>();

  public onClick() {
    this.callParent.emit();
  }

}