import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { Routes, RouterModule } from '@angular/router';
import {  HttpModule } from '@angular/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { PessoaService } from './pessoa.service';

const routes : Routes = [
  {path : '', redirectTo: 'pessoas', pathMatch: 'full'},
  {path : 'pessoas', component: ListagemComponent},
  {path : 'pessoas/cadastrar', component: CadastroComponent},
  {path : 'pessoas/:id', component: CadastroComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
