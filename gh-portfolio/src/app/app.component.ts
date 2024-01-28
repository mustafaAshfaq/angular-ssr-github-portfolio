import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from './github.service';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { OrganizationsComponent } from './organizations/organizations.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PersonalInfoComponent,RepositoriesComponent,OrganizationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'gh-portfolio';
  userName='';
  constructor(private githubService:GithubService){}
  ngOnInit(): void {
    this.userName=this.githubService.username;
  }
}
