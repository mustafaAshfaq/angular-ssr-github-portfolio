import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GithubService } from '../github.service';
import { Organization } from '../organization';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
  gh=inject(GithubService);
  orgs=toSignal(this.gh.getData<Organization[]>('orgs'),{initialValue:null})
}
