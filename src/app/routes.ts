import {Routes} from '@angular/router';
import { ClientGuardGuard } from './views/cliente/client-guard.guard';


import { AppComponent } from './app.component';
import { Boton } from './common/form/button/boton.component';
import { InputText } from './common/form/input-text/input-text.component';
import { InputSelectComponent } from './common/form/input-select/input-select.component';
import { ItemPersonaComponent } from './common/lists/item-persona/item-persona.component';
import { ItemServicioComponent } from './common/lists/item-servicio/item-servicio.component';
import { ItemMedicamentoComponent } from './common/lists/item-medicamento/item-medicamento.component';
import { PaginatorComponent } from './common/navigation/paginator/paginator.component';
import { TitleComponent } from './common/layout/title/title.component';
import { InputPasswordComponent } from './common/form/input-password/input-password.component';
import { InputRadioComponent } from './common/form/input-radio/input-radio.component';
import { AddDrugsComponent } from './views/superusercountry/add-drugs/add-drugs.component';
import { AdminDrugsComponent } from './views/superusercountry/admin-drugs/admin-drugs.component';
import { AdminusersComponent } from './views/superusercountry/adminusers/adminusers.component';
import { CompletedServicesComponent } from './views/superusercountry/completed-services/completed-services.component';
import { DescriptionCompletedServicesComponent } from './views/superusercountry/description-completed-services/description-completed-services.component';
import { DescriptionPendingServicesComponent } from './views/superusercountry/description-pending-services/description-pending-services.component';
import { DescriptionRealTimeServicesComponent } from './views/superusercountry/description-real-time-services/description-real-time-services.component';
import { GenerateReportComponent } from './views/superusercountry/generate-report/generate-report.component';
import { PendingServicesComponent } from './views/superusercountry/pending-services/pending-services.component';
import { RealTimeServicesComponent } from './views/superusercountry/real-time-services/real-time-services.component';
import { ListClientsComponent } from './views/usuarioAdmin/list-clients/list-clients.component';
import { RegisterClientsComponent } from './views/common/register-clients/register-clients.component';
import { ListMedicamentsComponent } from './views/usuarioAdmin/list-medicaments/list-medicaments.component';
import { RegisterMedicamentsComponent } from './views/usuarioAdmin/register-medicaments/register-medicaments.component';
import { LoginClientComponent } from './views/common/login-client/login-client.component';
import { HomeClientComponent } from './views/cliente/home-client/home-client.component';
import { ChangePassClientComponent } from './views/cliente/change-pass-client/change-pass-client.component';
import { ListMedicamentsClientComponent } from './views/cliente/list-medicaments-client/list-medicaments-client.component';
import { HomeComponent } from './views/common/home/home.component';
import { LoginAdminUserComponent } from './views/common/login-admin-user/login-admin-user.component';
import { HomeAdminUserComponent } from './views/usuarioAdmin/home-admin-user/home-admin-user.component';
import { ChangePassUserAdminComponent } from './views/usuarioAdmin/change-pass-user-admin/change-pass-user-admin.component';
import { GuardUserAdminGuard } from './views/usuarioAdmin/guard-user-admin.guard';
import { HomeUserMessengerComponent } from './views/usuarioMensajero/home-user-messenger/home-user-messenger.component';
import { LoginUserMessengerComponent } from './views/common/login-user-messenger/login-user-messenger.component';
import { ChangePassUserMessengerComponent } from './views/usuarioMensajero/change-pass-user-messenger/change-pass-user-messenger.component';
import { GuardUserMessengerGuard } from './views/usuarioMensajero/guard-user-messenger.guard';
import { RegisterUserAdminComponent } from './views/usuarioAdmin/register-user-admin/register-user-admin.component';
import { RegisterUserMessengerComponent } from './views/usuarioAdmin/register-user-messenger/register-user-messenger.component';
import { ListUserMessengerComponent } from './views/usuarioAdmin/list-user-messenger/list-user-messenger.component';
import { ListUserAdminComponent } from './views/usuarioAdmin/list-user-admin/list-user-admin.component';
import {ListRecordComponent} from './views/usuarioAdmin/list-record/list-record.component';

export const Router: Routes = [

{path:'',pathMatch:'full', redirectTo:'/home'}, 
{ path: 'home', component: HomeComponent},
{ path: 'loginClient', component: LoginClientComponent},
//{ path: 'change-password', component: ChangePasswordComponent},
//{ path: 'add-drugs', component: AddDrugsComponent},
//{ path: 'admin-drugs', component: AdminDrugsComponent},
//{ path: 'admin-users', component: AdminusersComponent},
//{ path: 'completed-services', component: CompletedServicesComponent},
//{ path: 'completed-services/:service', component: DescriptionCompletedServicesComponent},
//{ path: 'pending-services', component: PendingServicesComponent},
//{ path: 'pending-services/:service', component: DescriptionPendingServicesComponent},
//{ path: 'real-time-service-description', component: DescriptionRealTimeServicesComponent},
//{ path: 'real-time-services', component: RealTimeServicesComponent},
//{ path: 'generate-report', component: GenerateReportComponent},
{ path: 'listClient', component: ListClientsComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'registerClient', component: RegisterClientsComponent},
{ path: 'listMedicament', component: ListMedicamentsComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'registerMedicament', component: RegisterMedicamentsComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'homeClient', component: HomeClientComponent/*, canActivate: [ClientGuardGuard]*/},
{ path: 'changePassClient', component: ChangePassClientComponent/*, canActivate: [ClientGuardGuard]*/},
{ path: 'medicaments', component: ListMedicamentsClientComponent/*,  canActivate: [ClientGuardGuard]*/},
{ path: 'loginAdminUser', component: LoginAdminUserComponent },
{ path: 'homeAdminUser', component: HomeAdminUserComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'changePassUserAdmin', component: ChangePassUserAdminComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'homeUserMessenger', component: HomeUserMessengerComponent/*, canActivate:[GuardUserMessengerGuard]*/},
{ path: 'loginUserMessenger', component: LoginUserMessengerComponent},
{ path: 'changePassUserMessenger', component: ChangePassUserMessengerComponent/*, canActivate:[GuardUserMessengerGuard]*/},
{ path: 'registerUserAdmin', component : RegisterUserAdminComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'registerUserMessenger', component : RegisterUserMessengerComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'listUserAdmin', component : ListUserAdminComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'listUserMessenger', component : ListUserMessengerComponent/*, canActivate:[GuardUserAdminGuard]*/},
{ path: 'listRecord', component : ListRecordComponent/*, canActivate:[GuardUserAdminGuard]*/}]





