import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USER } from '../dummy-user';

const randomIndex=Math.floor(Math.random() * DUMMY_USER.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true})name !: string;
  @Input({required :true})id !: string;
  @Input({required :true})avatar !: string;

  @Input({required:true})selected!:boolean;

  @Output()select =new EventEmitter<String>();
men: any;

  onSelectUser(){
    // throw new Error('Method not implemented')
    console.log('user clicked');
    this.select.emit(this.id);
  }

  //selectedUser = DUMMY_USER[0];

  selectedUser = DUMMY_USER[randomIndex];

  get imagePath(){
    //return 'user/'+ this.avatar;
    return this.avatar;
  }
  // onselectedUser(){
  //   console.log('user has clicked ')
  // }

}
