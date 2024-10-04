import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstfileComponent } from './firstfile/firstfile.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USER } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor } from '@angular/common';

interface User {
  id: string,
  name: string,
  avatar: string,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstfileComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  users = DUMMY_USER;
  selectUser?: User;

selectUserId ?: any;
  onSelectUser(id: String) {
    console.log(id);
    this.selectUserId=id;
    this.selectUser= this.users.find((user) => user.id === id);
  }
}
