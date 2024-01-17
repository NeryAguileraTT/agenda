import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KendouiComponent } from './kendoui/kendoui.component';
import { SyncComponent } from './sync/sync.component';
import { HomeComponent } from './home/home.component';
import { TransportComponent } from './transport/transport.component';

export const routes: Routes = [

{
    path:'uikendo',
    component:KendouiComponent
},
{
    path:'sync',
    component:SyncComponent
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'tranport',
    component:TransportComponent
}


];
