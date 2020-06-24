import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() visible: boolean;

  public userExists = false;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.user.subscribe((user) => {
      if (!!user){
        this.userExists = true;
      }
    });
  }

}
