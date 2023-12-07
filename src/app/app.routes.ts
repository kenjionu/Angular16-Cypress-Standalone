import { Routes } from '@angular/router';
import { HelloDigimonComponent } from './hello-digimon/hello-digimon.component';

export const routes: Routes = [
    { path: '', redirectTo: '/hello-digimon', pathMatch: 'full',},
    { path: 'hello-digimon', component: HelloDigimonComponent}
];
