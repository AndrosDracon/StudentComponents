import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert-students',
  templateUrl: './insert-students.component.html',
  styleUrls: ['./insert-students.component.css']
})
export class InsertStudentsComponent implements OnInit {
@Output() InsertStudent=new EventEmitter();
@Output() PrintingEnabled=new EventEmitter();
flag;
@Input() messages:string;
resetFlag;
  constructor() { }

  ngOnInit() {
  }
  AddOption(){
    this.flag='add';
    this.InsertStudent.emit({mode: this.flag});

  }
   ListOption(){
  this.flag='print';
  this.PrintingEnabled.emit({mode: this.flag});

  }

}
