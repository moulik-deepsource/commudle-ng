import { NbCardModule, NbIconModule, NbTabsetModule, NbRouteTabsetModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicCommunityGroupsRoutingModule } from './public-community-groups-routing.module';
import { CommunityGroupHomeComponent } from './components/community-group-home/community-group-home.component';
import { SharedComponentsModule } from 'projects/shared-components/shared-components.module';
import { CommunityGroupCommunitiesComponent } from './components/community-group-communities/community-group-communities.component';
import { CommunityGroupTeamComponent } from './components/community-group-team/community-group-team.component';


@NgModule({
  declarations: [CommunityGroupHomeComponent, CommunityGroupCommunitiesComponent, CommunityGroupTeamComponent],
  imports: [
    CommonModule,
    PublicCommunityGroupsRoutingModule,
    SharedComponentsModule,

    // Nebular
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    NbRouteTabsetModule
  ]
})
export class PublicCommunityGroupsModule { }
