import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getEmp(){
    return [
        {"id": 1, "name": "Andrew", "age": 30},
        {"id": 2, "name": "Brandon", "age": 25},
        {"id": 3, "name": "Christina", "age": 26},
        {"id": 4, "name": "Elena", "age": 28},
        {"id": 5, "name": "Felicia", "age": 25}    
    ];
  }
  getDept(){
    return [
      {"id": 1, "name": "Dept1", "age": 30},
      {"id": 2, "name": "Dept2", "age": 25},
      {"id": 3, "name": "Dept3", "age": 26},
      {"id": 4, "name": "Dept4", "age": 28},
      {"id": 5, "name": "Dept5", "age": 25}    
    ];
  }
}
