
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from '../feature.component';
import { FeatureListComponent } from '../feature-list.component';

const routes: Routes = [
  { path: '', component: FeatureComponent },
  { path: 'list', component: FeatureListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewfeatureRoutingModule {}
