import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./homep/home/home.module').then(m => m.HomePageModule) },
  { path: 'location-selection', loadChildren: () => import('./location-selection/location-selection.module').then(m => m.LocationSelectionPageModule) },
  { path: 'location-details', loadChildren: () => import('./location-details/location-details.module').then(m => m.LocationDetailsPageModule) },
  { path: 'hyderabad', loadChildren: () => import('./locations/hyderabad/hyderabad.module').then(m => m.HyderabadPageModule) },
  { path: 'delhi', loadChildren: () => import('./locations/delhi/delhi.module').then(m => m.DelhiPageModule) },
  { path: 'table-booking', loadChildren: () => import('./table-booking/table-booking.module').then(m => m.TableBookingPageModule) },

  { path: 'mumbai', loadChildren: () => import('./locations/mumbai/mumbai.module').then(m => m.MumbaiPageModule) },
  { path: 'amritsar', loadChildren: () => import('./locations/amritsar/amritsar.module').then(m => m.AmritsarPageModule) },
  { path: 'kochi', loadChildren: () => import('./locations/kochi/kochi.module').then(m => m.KochiPageModule) },
  { path: 'bengaluru', loadChildren: () => import('./locations/bengaluru/bengaluru.module').then(m => m.BengaluruPageModule) },
  { path: 'booking', loadChildren: () => import('./premium/pre-hyd/booking.module').then(m => m.BookingPageModule) },
  { path: 'premi-rest', loadChildren: () => import('./premium/premi-rest/premi-rest.module').then(m => m.PremiRestPageModule) },
  {
    path: 'budget-fri',
    loadChildren: () => import('./budgetF/budget-fri/budget-fri.module').then( m => m.BudgetFriPageModule)
  },
  {
    path: 'table-booking',
    loadChildren: () => import('./table-booking/table-booking.module').then(m => m.TableBookingPageModule)
  },
  {
    path: 'club-del',
    loadChildren: () => import('./clubs/club-del/club-del.module').then( m => m.ClubDelPageModule)
  },
  {
    path: 'bud-del',
    loadChildren: () => import('./budgetF/bud-del/bud-del.module').then( m => m.BudDelPageModule)
  },
  {
    path: 'pre-koch',
    loadChildren: () => import('./premium/pre-koch/pre-koch.module').then( m => m.PreKochPageModule)
  },
  {
    path: 'bud-koch',
    loadChildren: () => import('./budgetF/bud-koch/bud-koch.module').then( m => m.BudKochPageModule)
  },
  {
    path: 'clu-koch',
    loadChildren: () => import('./clubs/clu-koch/clu-koch.module').then( m => m.CluKochPageModule)
  },
  {
    path: 'clu-hyd',
    loadChildren: () => import('./clubs/clu-hyd/clu-hyd.module').then( m => m.CluHydPageModule)
  },
  {
    path: 'bud-hyd',
    loadChildren: () => import('./budgetF/bud-hyd/bud-hyd.module').then( m => m.BudHydPageModule)
  },
  {
    path: 'pre-mum',
    loadChildren: () => import('./premium/pre-mum/pre-mum.module').then( m => m.PreMumPageModule)
  },
  {
    path: 'bud-mum',
    loadChildren: () => import('./budgetF/bud-mum/bud-mum.module').then( m => m.BudMumPageModule)
  },
  {
    path: 'clu-mum',
    loadChildren: () => import('./clubs/clu-mum/clu-mum.module').then( m => m.CluMumPageModule)
  },
  {
    path: 'pre-amr',
    loadChildren: () => import('./premium/pre-amr/pre-amr.module').then( m => m.PreAmrPageModule)
  },
  {
    path: 'clu-amr',
    loadChildren: () => import('./clubs/clu-amr/clu-amr.module').then( m => m.CluAmrPageModule)
  },
  {
    path: 'bud-amr',
    loadChildren: () => import('./budgetF/bud-amr/bud-amr.module').then( m => m.BudAmrPageModule)
  },
  {
    path: 'pre-viz',
    loadChildren: () => import('./premium/pre-viz/pre-viz.module').then( m => m.PreVizPageModule)
  },
  {
    path: 'bud-viz',
    loadChildren: () => import('./budgetF/bud-viz/bud-viz.module').then( m => m.BudVizPageModule)
  },
  {
    path: 'clu-viz',
    loadChildren: () => import('./clubs/clu-viz/clu-viz.module').then( m => m.CluVizPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pre-del',
    loadChildren: () => import('./pre-del/pre-del.module').then( m => m.PreDelPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
