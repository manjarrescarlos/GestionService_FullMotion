import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhatsappRedirectComponent } from './components/whatsapp-redirect/whatsapp-redirect.component';

const routes: Routes = [
  { path: 'whatsapp', component: WhatsappRedirectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
