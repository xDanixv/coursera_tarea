
import { Component } from '@angular/core';

@Component({
  selector: 'ns-app',
  template: \`
  <RadSideDrawer>
    <StackLayout tkDrawerContent class="sideStackLayout">
      <Label text="Menú" class="sideTitle"></Label>
      <StackLayout>
        <Button text="Inicio" [nsRouterLink]="['/']"></Button>
        <Button text="Nuevo Feature" [nsRouterLink]="['/newfeature']"></Button>
      </StackLayout>
    </StackLayout>

    <StackLayout tkMainContent>
      <router-outlet></router-outlet>
    </StackLayout>
  </RadSideDrawer>
  \`,
  styles: [\`
    .sideStackLayout { padding: 20; background-color: #3c3c3c; }
    .sideTitle { color: white; font-size: 20; margin-bottom: 10; }
  \`]
})
export class AppComponent {}
