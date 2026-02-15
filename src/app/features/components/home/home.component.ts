import { Component, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user/user';
import { UserCardComponent } from "../../../shared/components/user-card/user-card.component";
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-home',
  imports: [MenubarModule, RouterLink, RouterOutlet, UserCardComponent , SearchPipe , FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  private _userServices = inject(UserService)
  
  usersContainer!:User[]

  searchKey:string = ''
  ngOnInit(){
    this._userServices.getAllUsers().subscribe({
      next:(res)=>{
        console.log(res);
        this.usersContainer = res
      }
    })
  }

  


}
