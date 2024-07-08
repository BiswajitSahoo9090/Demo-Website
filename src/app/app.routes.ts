import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'portfolio-website', loadChildren: () => import('./portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)},
    {path: 'medical-form',loadChildren: () => import('./medical-form/medical-form.module').then(m => m.MedicalFormModule)}
];
