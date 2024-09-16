import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from "./components/list/list.component";
import { AddComposerComponent } from './components/add-composer/add-composer.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddComposerComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
]
})
export class ComposersModule { }
