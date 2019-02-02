import { Component } from '@angular/core';
import {MessageService} from '../../practice-services/message-service/message.service';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent {

  public id = 0;
  public firstName: string;
  public lastName: string;
  public age: number;
  public educationYear: number;
  public educationYearArray = ['1-st', '2-nd',
    '3-d', 'Last year', 'Extra year'];
  public numberBook: FormArray;
  public number: string;

  constructor(private messageService: MessageService,
              private fb: FormBuilder) {
  }

  studentsForm = this.fb.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(2)]],
    lastName: ['', [
      Validators.required,
      Validators.minLength(2)]],
    age: [''],
    educationYear: ['', Validators.required],
    numbers: this.fb.array([
      this.fb.control('')
    ])
  });

  updateName() {
    this.studentsForm.patchValue(
      {firstName: 'George',
              lastName: 'Levchenko',
              age: 26,
              educationYear: this.educationYearArray[4]
      });
  }

  onSubmit() {
    this.id++;
    this.firstName = this.studentsForm.controls.firstName.value;
    this.lastName = this.studentsForm.controls.lastName.value;
    this.age = this.studentsForm.controls.age.value;
    this.educationYear = this.studentsForm.controls.educationYear.value;
    this.numberBook = this.studentsForm.get('numbers') as FormArray;
    this.number = this.numberBook.at(0).value;

    this.messageService.add(`Student's info:`);
    this.messageService.add(`Id:  ${this.id}`);
    this.messageService.add(`First Name:  ${this.firstName}`);
    this.messageService.add(`Last Name:  ${this.lastName}`);
    this.messageService.add(`Age:  ${this.age}`);
    this.messageService.add(`Educational Year:  ${this.educationYear}`);
    this.messageService.add(`Telephone number:  ${this.number}`);
    this.messageService.add(`-----------------------------------------------`);
    // this.messageService.add(JSON.stringify(this.studentsForm.value));
  }

  newStudent() {
    this.studentsForm.reset();
  }

  get numbers() {
    return this.studentsForm.get('numbers') as FormArray;
  }

  addNumbers() {
    this.numbers.push(this.fb.control(''));
  }

}




