import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-records',
  templateUrl: './user-records.component.html',
  styleUrls: ['./user-records.component.css'],
})
export class UserRecordsComponent implements OnInit {
  @Input() inputUserData = [];
  usersDataList: any[] = [];

  constructor() {}

  ngOnInit() {}
}
