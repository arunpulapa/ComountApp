import { Routes } from '@angular/router';
import { NavbarComponent } from '../components/Navbar/navbar/navbar.component';
import { HomeComponent } from '../components/Home/home/home.component';
import { SignupComponent } from '../components/signup/signup/signup.component';
import { BoutiqueComponent } from '../components/boutique/boutique/boutique.component';
import { DesignersComponent } from '../components/designers/designers/designers.component';
import { RentalattairComponent } from '../components/rentalattair/rentalattair/rentalattair.component';
import { TailersComponent } from '../components/tailers/tailers/tailers.component';
import { LoginComponent } from '../components/Login/login/login.component';
import { ShoppingComponent } from '../components/shopping/shopping/shopping.component';
import { ViewdetailsComponent } from '../components/viewdetails/viewdetails.component';
import { UploadComponent } from '../components/upload/upload.component';
import { MenComponent } from '../components/mens/men/men.component';
import { ProductdetailsComponent } from '../components/mens/productdetails/productdetails.component';

export const routes: Routes = [
    {path:'navbar', component:NavbarComponent},
    {path:'', component:HomeComponent},
    {path:'signup', component:SignupComponent},
    {path:'boutique', component:BoutiqueComponent},
    {path:'designers', component:DesignersComponent},
    {path:'rentalattair', component:RentalattairComponent},
    {path:'tailers', component:TailersComponent},
    {path:'login', component:LoginComponent},
    {path:'shopping', component:ShoppingComponent},
    {path:'details', component:ViewdetailsComponent},
    {path:'men', component:MenComponent},
    {path:'upload', component:UploadComponent},
    {path:'productdetails', component:ProductdetailsComponent}
];
