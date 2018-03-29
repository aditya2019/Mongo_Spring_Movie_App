import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './component/movies/movies.component';
import { RouterModule, Routes} from '@angular/router';
import { FavMoviesComponent } from './component/fav-movies/fav-movies.component';
import { LoginComponent } from './component/form/login/login.component';
import { RegistrationComponent } from './component/form/registration/registration.component'

const routes :Routes = [
{path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'home', component:MoviesComponent},
{path: 'favourite', component:FavMoviesComponent },
{path: 'register', component:RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
