import { Component } from '@angular/core';


@Component({
  selector: 'app-syntax',
  templateUrl: './syntax.component.html',
  styleUrls: ['./syntax.component.css']
})
export class SyntaxComponent {

  input_value = 'DO NOT WRITE!';
  question_class = true;
  mySize = 70;
  question_attr = 'Alalalala some title';
  clicks = 0;
  input_event = '';
  input_variable = '';
  classes = {};
  trueVariable = false;
  styles = {};
  bgcolor = 'black';
  fweight = 'bold';
  color = 'white';
  hiddenVariable1 = null;
  hiddenVariable2 = null;
  crowd: string[];
  switch_variable: number;

  getClicks() {
    this.clicks++;
  }

  takeValue($event) {
    this.input_event = $event.target.value;
  }

  changeClass() {
    this.classes = {
      color: !this.trueVariable,
      bg: !this.trueVariable
    };
    this.trueVariable = !this.trueVariable;
  }

  changeStyles() {
    this.styles = {
    'background-color': this.bgcolor,
      'font-weight': this.fweight,
      'color': this.color
    };
    this.bgcolor = this.bgcolor === 'lightgrey' ? 'black' : 'lightgrey';
    this.fweight = this.fweight === 'normal' ? 'bold' : 'normal';
    this.color = this.color === 'black' ? 'white' : 'black';
  }

  hideVariable1() {
    this.hiddenVariable1 = this.hiddenVariable1 === null ? 'Some String' : null;
  }

  showList() {
    this.crowd = ['worker', 'cleaner', 'slut', 'boss'];
  }

  switchWay(number) {
    this.switch_variable = number;
  }
  hideVariable2() {
    this.hiddenVariable2 = this.hiddenVariable2 === null ? 'Some String' : null;
  }

}
