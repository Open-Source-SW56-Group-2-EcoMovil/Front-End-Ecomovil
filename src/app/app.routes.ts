import { Routes } from '@angular/router';
import {VehiclesComponent} from "./public/pages/vehicles/vehicles.component";
import {VehiclePostComponent} from "./public/pages/vehicle-post/vehicle-post.component";
import {ProfilePageComponent} from "./public/pages/profile-page/profile-page.component";
import {DashboardPageComponent} from "./public/pages/dashboard-page/dashboard-page.component";
import {PlanesPageComponent} from "./public/pages/planes-page/planes-page.component";
import {PaymentPageComponent} from "./public/pages/payment-page/payment-page.component";
import {ProfileUniversityComponent} from "./public/pages/profile-university/profile-university.component";
import {RegisterAcquirerComponent} from "./public/pages/register-acquirer/register-acquirer.component";
import {LogInComponent} from "./public/pages/log-in/log-in.component";
import {
  RegisterUniversityStudentComponent
} from "./public/pages/register-university-student/register-university-student.component";
import {VehicleDetailsComponent} from "./public/pages/vehicle-details/vehicle-details.component";
import {HomeAcquirerComponent} from "./public/pages/home-acquirer/home-acquirer.component";
import {InteractiveMapComponent} from "./public/pages/interactive-map/interactive-map.component";
import {FilterAcquirerComponent} from "./public/pages/filter-acquirer/filter-acquirer.component";

export const routes: Routes = [
  {path:'myVehicles', component: VehiclesComponent},
  {path: 'postVehicle', component: VehiclePostComponent},
  {path: 'vehicleDetails', component: VehicleDetailsComponent },
  { path: 'plans', component: PlanesPageComponent},
  {path: 'login', component: LogInComponent},
  {path: 'registerUniversity', component: RegisterUniversityStudentComponent},
  {path: 'registerAcquirer', component: RegisterAcquirerComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sellerProfile', component: ProfileUniversityComponent},
  {path: 'sellereditProfile', component: ProfilePageComponent},
  {path: 'dashboard', component: DashboardPageComponent,
    children:[
      {
        path: 'profile', // Rutas hijas
        component: ProfilePageComponent
      }
    ]
  },
  { path: 'payment', component: PaymentPageComponent }, // Ruta para "payment"
  {path: 'home', component: HomeAcquirerComponent},
  {path: 'interactiveMap', component: InteractiveMapComponent},
  {path: 'filter', component: FilterAcquirerComponent},
];
