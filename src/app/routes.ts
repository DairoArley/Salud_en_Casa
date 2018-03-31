import {Routes} from '@angular/router';

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
import { LoginComponent } from './views/usuario/login/login.component';
import { ChangePasswordComponent } from './views/usuario/change-password/change-password.component';
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
import { ListClientsComponent } from './views/cliente/list-clients/list-clients.component';
import { RegisterClientsComponent } from './views/cliente/register-clients/register-clients.component';
import { ListMedicamentsComponent } from './views/medicaments/list-medicaments/list-medicaments.component';




export const Router: Routes = [
{path:'',pathMatch:'full', redirectTo:'/login'}, 
{ path: 'login', component: LoginComponent},
{ path: 'change-password', component: ChangePasswordComponent},
{ path: 'add-drugs', component: AddDrugsComponent},
{ path: 'admin-drugs', component: AdminDrugsComponent},
{ path: 'admin-users', component: AdminusersComponent},
{ path: 'completed-services', component: CompletedServicesComponent},
{ path: 'completed-services/:service', component: DescriptionCompletedServicesComponent},
{ path: 'pending-services', component: PendingServicesComponent},
{ path: 'pending-services/:service', component: DescriptionPendingServicesComponent},
{ path: 'real-time-service-description', component: DescriptionRealTimeServicesComponent},
{ path: 'real-time-services', component: RealTimeServicesComponent},
{ path: 'generate-report', component: GenerateReportComponent},
{ path: 'listClient', component: ListClientsComponent},
{ path: 'registerClient', component: RegisterClientsComponent},
{ path: 'listMedicament', component: ListMedicamentsComponent}]


