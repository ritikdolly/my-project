import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true})name?:string;
  @Input({required:true})userId!:string;


  public get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }
  tasks =[
    {
      id: 't1',
      userId:'u1',
      title: 'CSE Student',
      summary:'learning Web1',
      dueDate:'2024-05-24'
    },
    {
      id: 't2',
      userId:'u2',
      title: 'CSE Student',
      summary:'learning Web2',
      dueDate:'2023-05-24'
    },
    {
      id: 't3',
      userId:'u3',
      title: 'CSE Student',
      summary:'learning Web3',
      dueDate:'2024-08-04'
    },
    {
      id: 't4',
      userId:'u4',
      title: 'CSE Student',
      summary:'learning linux',
      dueDate:'2024-08-04'
    },
    {
      id: 't5',
      userId:'u5',
      title: 'CSE Student',
      summary:'learning machine-learning',
      dueDate:'2024-08-04'
    },
    {
      id: 't6',
      userId:'u6',
      title: 'CSE Student',
      summary:'learning machine-learning',
      dueDate:'2024-08-04'
    }
  ]
}
