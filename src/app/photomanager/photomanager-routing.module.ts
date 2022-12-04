import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotomanagerComponent } from './photomanager/photomanager.component';

const routes: Routes = [
  {
    path: '',
    component: PhotomanagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotomanagerRoutingModule {}
