import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [

	//path '/dashboard PagesRouting
	//path /auth AuthRouting

	{ path: '**', component: NopagefoundComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		PagesRoutingModule,
		AuthRoutingModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
