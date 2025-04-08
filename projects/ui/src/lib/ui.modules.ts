import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← important
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule], // ← ajoute ça
  exports: [ButtonComponent],
})
export class UiModule {}
