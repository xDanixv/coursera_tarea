
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NewfeatureRoutingModule } from './routing/newfeature-routing.module';
import { FeatureComponent } from './feature.component';
import { FeatureListComponent } from './feature-list.component';

@NgModule({
  declarations: [FeatureComponent, FeatureListComponent],
  imports: [CommonModule, NativeScriptCommonModule, NewfeatureRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewfeatureModule {}
