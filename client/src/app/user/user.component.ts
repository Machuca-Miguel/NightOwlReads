import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/api/user-api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 public user!: User;
  constructor(
    public userApi: UserApiService,


  ) { }

  ngOnInit(): void {
    this.userApi.getUserInfo().subscribe((user) => {
      if (user !== null) {
        this.user = user;
        this.user.name = "test"
      }

    });

  }



}
