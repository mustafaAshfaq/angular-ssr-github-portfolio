import { Component,OnInit, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from '../repository';
import { GithubService } from '../github.service';
import { PanelComponent } from '../panel/panel.component';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [AsyncPipe,PanelComponent],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
  gh=inject(GithubService);
  repos=toSignal(this.gh.getData<Repository[]>('repos').pipe(
    map(repos1=>repos1.filter(r=>!r.fork))
  ),{initialValue:null})
}
