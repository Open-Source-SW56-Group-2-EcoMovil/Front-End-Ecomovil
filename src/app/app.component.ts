import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./public/components/header/header.component";
import {HeaderAcquirerComponent} from "./public/components/header-acquirer/header-acquirer.component";
import {VehiclesComponent} from "./public/pages/vehicles/vehicles.component";
import {VehiclePostComponent} from "./public/pages/vehicle-post/vehicle-post.component";
import {InteractiveMapComponent} from "./public/pages/interactive-map/interactive-map.component";
import {VehicleDetailsComponent} from "./public/pages/vehicle-details/vehicle-details.component";
import {PlanesPageComponent} from "./public/pages/planes-page/planes-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenu, MatMenuItem, MatButton, MatMenuTrigger, NgIf, HeaderComponent, HeaderAcquirerComponent, VehiclesComponent, VehiclePostComponent, InteractiveMapComponent, VehicleDetailsComponent, PlanesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomovil-LandingPage';
  menuOpen = false;


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
