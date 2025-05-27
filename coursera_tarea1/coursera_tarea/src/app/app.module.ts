
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppComponent } from './app.component';
import { NewfeatureModule } from './features/newfeature/newfeature.module';
import { MyGlobalService } from './services/my-global.service';

@NgModule({
  declarations: [AppComponent],
  imports: [NativeScriptModule, NewfeatureModule],
  providers: [MyGlobalService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
