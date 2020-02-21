import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-dept',
  template: `
    <p>
      dept works!
    </p>
    <div *ngFor='let dept of dept'>
    <span>{{dept.name}}</span>
    </div>
  `,
  styles: []
})
export class DeptComponent implements OnInit {

  dept:any[];
  constructor(private _service:EmpService) { }

  ngOnInit() {
    this.dept = this._service.getDept();
  }

}
