import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contactos',
  },
  {
    path: 'contactos',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
