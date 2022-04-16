import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

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
import { CardCursoComponent } from './shared/card-curso/card-curso.component';
import { TelaForumVisualizarPerguntaComponent } from './modules/forum/tela-forum-visualizar-pergunta/tela-forum-visualizar-pergunta.component';
import { TelaForumCriarPerguntaComponent } from './modules/forum/tela-forum-criar-pergunta/tela-forum-criar-pergunta.component';
import { CardDuvidaComponent } from './shared/card-duvida/card-duvida.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    CardCursoComponent,
    TelaForumVisualizarPerguntaComponent,
    TelaForumCriarPerguntaComponent,
    CardDuvidaComponent,
  ],
  imports: [HttpClientModule,BrowserModule, ReactiveFormsModule, routing, FontAwesomeModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
