import { Component, inject } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../../../shared/interfaces/post/post';

@Component({
  selector: 'app-user-posts',
  imports: [RouterLink],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {


  private _userServices = inject(UserService)
  private _ActivatedRoute = inject(ActivatedRoute)


  private param!:string | null

  posts!:Post[]


  ngOnInit(){

    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.param = param.get('id')
      }
    })

    this._userServices.getUserPosts(this.param).subscribe({
      next:(res)=>{
        console.log(res);
        this.posts = res
      }
    })
  }


}

