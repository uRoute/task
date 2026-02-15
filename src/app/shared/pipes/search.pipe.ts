import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:User[] , searchKey:string): User[] {
    return users.filter((curr)=> curr.username.includes(searchKey));
  }

}
