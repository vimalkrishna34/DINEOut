import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'location-selection', loadChildren: () => import('./location-selection/location-selection.module').then(m => m.LocationSelectionPageModule) },
  { path: 'location-details', loadChildren: () => import('./location-details/location-details.module').then(m => m.LocationDetailsPageModule) },
  {
    path: 'hyderabad',
    loadChildren: () => import('./hyderabad/hyderabad.module').then( m => m.HyderabadPageModule)
  },
  {
    path: 'delhi',
    loadChildren: () => import('./delhi/delhi.module').then( m => m.DelhiPageModule)
  },
  {
    path: 'mumbai',
    loadChildren: () => import('./mumbai/mumbai.module').then( m => m.MumbaiPageModule)
  },
  {
    path: 'amritsar',
    loadChildren: () => import('./amritsar/amritsar.module').then( m => m.AmritsarPageModule)
  },
  {
    path: 'kochi',
    loadChildren: () => import('./kochi/kochi.module').then( m => m.KochiPageModule)
  },
  {
    path: 'bengaluru',
    loadChildren: () => import('./bengaluru/bengaluru.module').then( m => m.BengaluruPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
