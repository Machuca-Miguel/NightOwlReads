import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() user!: Observable<User | null>;
  public initials!: string;
  public userImageURL?: string;

  constructor() {}

  ngOnInit(): void {
    this.user.subscribe((userInterface) => {
      if (userInterface) {
        const user = User.create(userInterface);
        this.initials = user.getInitials();
        if (user.image) {
          this.userImageURL = user.getAvatarURL()!;
        }
      }
    });
  }
}
