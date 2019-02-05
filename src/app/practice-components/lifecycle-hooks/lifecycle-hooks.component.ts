import {
  Component, OnInit,
  OnChanges, OnDestroy,
  DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewChecked, AfterViewInit, SimpleChanges, Input
} from '@angular/core';

import { MessageService } from '../../practice-services/message-service/message.service';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy,
                                                OnChanges, DoCheck,
                                                AfterContentInit, AfterViewInit,
                                                AfterContentChecked, AfterViewChecked {

  @Input() testValue?: any;

  input_value1 = '';

  constructor(private messageService: MessageService) { }

  ngOnChanges(changes: SimpleChanges) {

      if (changes.testValue && !changes.testValue.currentValue) {
        this.messageService.add(changes.testValue.currentValue);
    }
  }

  ngOnInit() {
    this.messageService.add('OnInit event - done!');
  }

  ngDoCheck() {
    this.messageService.add('DoCheck event - done!');
  }

  ngAfterContentInit() {
    this.messageService.add('AfterContentInit event - done!');
  }

  ngAfterContentChecked() {
    this.messageService.add('AfterContentChecked event - done!');
  }

  ngAfterViewInit() {
    this.messageService.add('AfterViewInit event - done!');
  }

  ngAfterViewChecked() {
    this.messageService.add('AfterViewChecked event - done!');
  }

  ngOnDestroy() {
    this.messageService.add('OnDestroy event - will never done!');
  }
}
