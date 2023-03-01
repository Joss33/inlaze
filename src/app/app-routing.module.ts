import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'create-message',
        loadChildren: () => import('@Pages/create-message/create-message.module').then((m) => m.CreateMessageModule),
      },
      {
        path: 'all-messages',
        loadChildren: () => import('@Pages/all-messages/all-messages.module').then((m) => m.AllMessagesModule),
      },
      {
        path: 'my-messages',
        loadChildren: () => import('@Pages/my-messages/my-messages.module').then((m) => m.MyMessagesModule),
      },
    ]
  }, 
  {
    path: 'home',
    loadChildren: () => import('@Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@Pages/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('@Pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
