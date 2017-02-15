import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/pages/contact.component';

const appRoutes: Routes = [
	{
		path:'',
		component: SearchComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)