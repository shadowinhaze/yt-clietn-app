// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
// ================

// Components
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NewItemFormComponent } from './components/new-item-form/new-item-form.component';
// ================

@NgModule({
  declarations: [AdminPageComponent, NewItemFormComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
