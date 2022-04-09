import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './modules/login/tela-login/tela-login.component';
import { TelaInicialComponent } from './modules/inicio/tela-inicial/tela-inicial.component';
import { TelaCadastroComponent } from './modules/login/tela-cadastro/tela-cadastro.component';
import { TelaPerfilComponent } from './modules/perfil/tela-perfil/tela-perfil.component';
import { TelaDicasComponent } from './modules/dicas/tela-dicas/tela-dicas.component';
import { TelaForumComponent } from './modules/forum/tela-forum/tela-forum.component';
import { TelaAulasComponent } from './modules/cursos/tela-aulas/tela-aulas.component';
import { ItensComponent } from './itens/itens.component';
import { BtnDefaultComponent } from './shared/btn-default/btn-default.component';
import { MenuInferiorComponent } from './shared/menu-inferior/menu-inferior.component';
import { CardDicaComponent } from './shared/card-dica/card-dica.component';
import { BarraSuperiorComponent } from './shared/barra-superior/barra-superior.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaInicialComponent,
    TelaCadastroComponent,
    TelaPerfilComponent,
    TelaDicasComponent,
    TelaForumComponent,
    TelaAulasComponent,
    ItensComponent,
    BtnDefaultComponent,
    MenuInferiorComponent,
    CardDicaComponent,
    BarraSuperiorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
