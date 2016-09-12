import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { CreatePlaylistComponent} from './create-playlist/create-playlist.component';

import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,NavbarComponent, DashboardComponent, LoginComponent,RegisterComponent, CreatePlaylistComponent],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
