import { Component, contentChild, Input, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { User } from '../../interfaces/user/user';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-card',
  imports: [ButtonModule, CardModule , RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {


  @Input() User!:User|undefined 
  
  
  ngOnInit(){

  }





}
