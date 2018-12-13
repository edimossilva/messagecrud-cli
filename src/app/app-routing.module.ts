import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageListComponent } from './message-list/message-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/messages/create', pathMatch: 'full' },
  { path: 'messages/create', component: MessageCreateComponent },
  { path: 'messages/list', component: MessageListComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}  