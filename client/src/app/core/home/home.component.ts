import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthApiService } from 'src/app/services/api/common/auth-api.service';
import { AuthService } from '../../auth/auth.service';

export interface featureImageURL {
  static: string,
  gif: string,
  src: string,
  isImageStatic : boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  featureImageURL: { [key: string]: featureImageURL }  =  {
    'library': {
      static: '../../../assets/images/appImages/books.png',
      gif: '../../../assets/images/appImages/books.gif',
      src: '../../../assets/images/appImages/books.png',
      isImageStatic: true
    },
    'ratings': {
      static: '../../../assets/images/appImages/rate.png',
      gif: '../../../assets/images/appImages/rate.gif',
      src: '../../../assets/images/appImages/rate.png',
      isImageStatic: true
    },
    'clubs': {
      static: '../../../assets/images/appImages/learning.png',
      gif: '../../../assets/images/appImages/learning.gif',
      src: '../../../assets/images/appImages/learning.png',
      isImageStatic: true
    },
    'friends': {
      static: '../../../assets/images/appImages/organigram.png',
      gif: '../../../assets/images/appImages/organigram.gif',
      src: '../../../assets/images/appImages/organigram.png',
      isImageStatic: true
    },
    'achievements': {
      static: '../../../assets/images/appImages/badge.png',
      gif: '../../../assets/images/appImages/badge.gif',
      src: '../../../assets/images/appImages/badge.png',
      isImageStatic: true
    },
  }
  public constructor (autService: AuthService
  ) {

  }
  public ngOnInit(): void  {

  }


  play(imageKey: string) {
    this.featureImageURL[imageKey].src = this.featureImageURL[imageKey].gif;
    this.featureImageURL[imageKey].isImageStatic = false
  }

  stop(imageKey: string) {
    this.featureImageURL[imageKey].src = this.featureImageURL[imageKey].static;
    this.featureImageURL[imageKey].isImageStatic = true
  }
}


