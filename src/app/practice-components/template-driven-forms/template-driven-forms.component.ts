import { Component } from '@angular/core';
import {MessageService} from '../../practice-services/message-service/message.service';

export class Students {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public educationYear: string,
    public age?: string
  ) { }
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  id = 1;
  educationYearArray = ['1-st', '2-nd',
    '3-d', 'Last year', 'Extra year'];
  student = new Students(this.id, 'George', 'Levchenko', this.educationYearArray[4], '26' );

  constructor( private messageService: MessageService) { }

  onSubmit() {
    // public message: string;
    // this.message = JSON.stringify(this.student);

    this.messageService.add(`Student's info:`);
    this.messageService.add(`ID:  ${this.student.id}`);
    this.messageService.add(`First Name:  ${this.student.firstName}`);
    this.messageService.add(`Last Name:  ${this.student.lastName}`);
    this.messageService.add(`Age:  ${this.student.age}`);
    this.messageService.add(`Educational Year:  ${this.student.educationYear}`);
    this.messageService.add(`-----------------------------------------------`);
  }

  newStudent() {
    this.student = new Students(++this.id, '', '' , this.educationYearArray[0] , '' );
  }
}
