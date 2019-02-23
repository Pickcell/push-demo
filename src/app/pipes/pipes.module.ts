import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
  ],
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe]
})
export class AppPipesModule {
}
