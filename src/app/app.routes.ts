import { Routes } from '@angular/router';
import { HelloDigimonComponent } from './hello-digimon/hello-digimon.component';

export const routes: Routes = [
    { path: '', component: HelloDigimonComponent, pathMatch: 'full',}
];
