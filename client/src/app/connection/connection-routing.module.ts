import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'login',
				component: LoginComponent
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
})
export class ConnectionRoutingModule {}