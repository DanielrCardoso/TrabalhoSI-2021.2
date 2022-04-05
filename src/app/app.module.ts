import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { TelaDicasComponent } from './tela-dicas/tela-dicas.component';
import { TelaForumComponent } from './tela-forum/tela-forum.component';
import { TelaAulasComponent } from './tela-aulas/tela-aulas.component';
import { ItensComponent } from './itens/itens.component';

@NgModule({
  declarations: [AppComponent, TelaLoginComponent, TelaInicialComponent, TelaCadastroComponent, TelaPerfilComponent, TelaDicasComponent, TelaForumComponent, TelaAulasComponent, ItensComponent],
  imports: [BrowserModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
