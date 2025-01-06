import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'notFound404',
    title: 'Kwetu Party',
    loadComponent: () => import('./ui/not-found/not-found.component'),
  },
  {
    path: 'home ',
    title: 'Kwetu Party',
    loadComponent: () => import('./ui/home/home.component'),
  },
  {
    path: 'details/:id',
    title: '',
    loadComponent: () => import('./ui/salle/salle.component'),
  },
  {
    path: 'reservation',
    title: '',

    loadComponent: () => import('./ui/reservation/reservation.component'),
  },
];
