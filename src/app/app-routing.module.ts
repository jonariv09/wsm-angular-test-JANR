import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/components/full-layout/full-layout.component';

const routes: Routes = [
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
