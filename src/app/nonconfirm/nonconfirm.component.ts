import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonconfirm',
  templateUrl: './nonconfirm.component.html',
  styleUrls: ['./nonconfirm.component.scss'],
})
export class NonconfirmComponent implements OnInit {
  @Input() searchfacecode: any;
  @Input() searchfacemessge: any;

  constructor() { }

  ngOnInit() {}

}
