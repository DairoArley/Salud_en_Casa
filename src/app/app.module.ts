import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';



import { AppComponent } from './app.component';
import { Boton } from './common/form/button/boton.component';
import { InputText } from './common/form/input-text/input-text.component';
import { InputSelectComponent } from './common/form/input-select/input-select.component';
import { ItemPersonaComponent } from './common/lists/item-persona/item-persona.component';
import { ItemServicioComponent } from './common/lists/item-servicio/item-servicio.component';
import { ItemMedicamentoComponent } from './common/lists/item-medicamento/item-medicamento.component';
import { PaginatorComponent } from './common/navigation/paginator/paginator.component';
import { TitleComponent } from './common/layout/title/title.component';



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
    TitleComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, BrowserAnimationsModule,NoopAnimationsModule, MatButtonModule,MatInputModule,MatPaginatorModule, MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
