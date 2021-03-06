import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaLoginComponent } from './modules/login/tela-login/tela-login.component';
import { TelaInicialComponent } from './modules/inicio/tela-inicial/tela-inicial.component';
import { TelaCadastroComponent } from './modules/login/tela-cadastro/tela-cadastro.component';
import { TelaPerfilComponent } from './modules/perfil/tela-perfil/tela-perfil.component';
import { TelaDicasComponent } from './modules/dicas/tela-dicas/tela-dicas.component';
import { TelaForumComponent } from './modules/forum/tela-forum/tela-forum.component';
import { TelaAulasComponent } from './modules/cursos/tela-aulas/tela-aulas.component';
import { TelaForumCriarPerguntaComponent } from './modules/forum/tela-forum-criar-pergunta/tela-forum-criar-pergunta.component';
import { TelaForumVisualizarPerguntaComponent } from './modules/forum/tela-forum-visualizar-pergunta/tela-forum-visualizar-pergunta.component';
import { TelaDicasSalvasComponent } from './modules/dicas/tela-dicas-salvas/tela-dicas-salvas.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TelaInicialComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: TelaCadastroComponent },
  { path: 'perfil', component: TelaPerfilComponent },
  { path: 'dicas', component: TelaDicasComponent },
  { path: 'dicas/salvas', component: TelaDicasSalvasComponent },
  { path: 'forum', component: TelaForumComponent },
  {path:'forum/criar-topico',component:TelaForumCriarPerguntaComponent},
  {path:'forum/visualizar-pergunta',component:TelaForumVisualizarPerguntaComponent},
  { path: 'aulas', component: TelaAulasComponent },
  { path: 'criar-pergunta', component: TelaForumCriarPerguntaComponent },
];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(APP_ROUTES);
