import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products_ } from './pages/products/products';

export const routes: Routes = [
    {
        path: '', component: (Home)
    },
    {
        path: 'nosotros', component: (About)
    }, 
    {
        path: 'contacto', component: (Contact)
    }, 
    {
        path: 'productos', component: (Products_)
    }, 
    {
        path: '**', redirectTo: '' // Redirige a la página de inicio para cualquier ruta no definida 
    }
];
