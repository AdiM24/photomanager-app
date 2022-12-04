import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photomanager',
    loadChildren: () =>
      import('./photomanager/photomanager.module').then(
        (pm) => pm.PhotomanagerModule
      ),
  },
  {
    path: '**',
    redirectTo: 'photomanager',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
