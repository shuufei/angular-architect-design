import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() assignUserName = '';

  constructor() {}

  ngOnInit(): void {}
}
