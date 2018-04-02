import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
import{
	MatCardModule, 
	MatMenuModule,
	MatToolbarModule,
  MatIconModule	, 
  MatSelectModule
} from '@angular/material';
import {Ng2Webstorage} from 'ngx-webstorage';

import {Router} from './routes'
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


import { clientService } from './services/client.service';
import { HttpService } from './services/http.service';
import { medicamentService } from './services/medicament.service';
import { RegisterMedicamentsComponent } from './views/usuarioAdmin/register-medicaments/register-medicaments.component';
import { LoginClientComponent } from './views/common/login-client/login-client.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeClientComponent } from './views/cliente/home-client/home-client.component';
import { ChangePassClientComponent } from './views/cliente/change-pass-client/change-pass-client.component';
import { ListMedicamentsClientComponent } from './views/cliente/list-medicaments-client/list-medicaments-client.component';
import { HomeComponent } from './views/common/home/home.component';
import { LoginAdminUserComponent } from './views/common/login-admin-user/login-admin-user.component';
import { HomeAdminUserComponent } from './views/usuarioAdmin/home-admin-user/home-admin-user.component';
import { ClientGuardGuard } from './views/cliente/client-guard.guard';
import { ChangePassUserAdminComponent } from './views/usuarioAdmin/change-pass-user-admin/change-pass-user-admin.component';
import { userAdminService } from './services/userAdmin.service';
import { GuardUserAdminGuard } from './views/usuarioAdmin/guard-user-admin.guard';
import { userMessengerService } from './services/userMessenger.service';
import { HomeUserMessengerComponent } from './views/usuarioMensajero/home-user-messenger/home-user-messenger.component';
import { LoginUserMessengerComponent } from './views/common/login-user-messenger/login-user-messenger.component';
import { ChangePassUserMessengerComponent } from './views/usuarioMensajero/change-pass-user-messenger/change-pass-user-messenger.component';
import { GuardUserMessengerGuard } from './views/usuarioMensajero/guard-user-messenger.guard';
import { ModifyMedicamentComponent } from './views/usuarioAdmin/modify-medicament/modify-medicament.component';
import { ResultSearchComponent } from './views/usuarioAdmin/result-search/result-search.component';
import { RegisterUserAdminComponent } from './views/usuarioAdmin/register-user-admin/register-user-admin.component';
import { RegisterUserMessengerComponent } from './views/usuarioAdmin/register-user-messenger/register-user-messenger.component';
import { ListUserAdminComponent } from './views/usuarioAdmin/list-user-admin/list-user-admin.component';
import { ListUserMessengerComponent } from './views/usuarioAdmin/list-user-messenger/list-user-messenger.component';


@NgModule({
  declarations: [
    AppComponent,
    Boton,
    InputText,
    InputSelectComponent,
    ItemPersonaComponent,
    ItemServicioComponent,
    ItemMedicamentoComponent,
    PaginatorComponent,
    TitleComponent,
    InputPasswordComponent,
    InputRadioComponent,
    AddDrugsComponent,
    AdminDrugsComponent,
    AdminusersComponent,
    CompletedServicesComponent,
    DescriptionCompletedServicesComponent,
    DescriptionPendingServicesComponent,
    DescriptionRealTimeServicesComponent,
    GenerateReportComponent,
    PendingServicesComponent,
    RealTimeServicesComponent,
    ListClientsComponent,
    RegisterClientsComponent,
    ListMedicamentsComponent,
    RegisterMedicamentsComponent,
    LoginClientComponent,
    HomeClientComponent,
    ChangePassClientComponent,
    ListMedicamentsClientComponent,
    HomeComponent,
    LoginAdminUserComponent,
    HomeAdminUserComponent,
    ChangePassUserAdminComponent,
    HomeUserMessengerComponent,
    LoginUserMessengerComponent,
    ChangePassUserMessengerComponent,
    ModifyMedicamentComponent,
    ResultSearchComponent,
    RegisterUserAdminComponent,
    RegisterUserMessengerComponent,
    ListUserAdminComponent,
    ListUserMessengerComponent
  ],
  imports: [
    RouterModule.forRoot(Router), 
    HttpModule,
    BrowserModule,FormsModule,
     ReactiveFormsModule, 
     BrowserAnimationsModule,
     NoopAnimationsModule,
     MatRadioModule, 
     MatButtonModule,
     MatInputModule,
     MatPaginatorModule, 
     MatAutocompleteModule,
     MatCardModule, 
	MatMenuModule,
	MatToolbarModule,
  MatIconModule	, 
  MatSelectModule,
  Ng2Webstorage
  ],
  providers: [clientService, HttpService, medicamentService, AuthenticationService, ClientGuardGuard,
    userAdminService, GuardUserAdminGuard, userMessengerService, GuardUserMessengerGuard, 
    ModifyMedicamentComponent, ResultSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

