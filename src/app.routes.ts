import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentAux from './component-aux';
import ComponentFoo from './component-foo';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two', component: ComponentTwo },
  { path: 'component-aux', component: ComponentAux, outlet: 'sidebar' },
  { path: 'component-foo', component: ComponentFoo, outlet: 'sidebar' },
  // ,{ path: '',
  //   component: ComponentAux,
  //   outlet: 'sidebar',
  //   pathMatch: 'full'
  // }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
