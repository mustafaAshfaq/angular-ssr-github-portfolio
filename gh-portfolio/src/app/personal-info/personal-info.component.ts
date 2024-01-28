import { Component,Injector,OnInit, Signal, inject, signal } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit{
  user$:Observable<User>|undefined
  users:Signal<User | null>=  signal(null);
  constructor(private gh:GithubService,private injector:Injector){}
  ngOnInit(): void {
    this.user$=this.gh.getData<User>();
    this.users=this.gh.getDataAsSignal(this.injector,this.user$);
  }
}
