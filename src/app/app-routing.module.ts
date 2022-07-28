import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { LandingPageComponent } from './modulo-teste/landing-page/landing-page.component';
import { ModuloComponent } from './modulo-teste/modulo/modulo.component';
import { Routes, RouterModule } from '@angular/router';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida/ciclo-de-vida.component';
import { ComponentAngularComponent } from './component-angular/component-angular.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { PostSimulatorComponent } from './data-binding/post-simulator/post-simulator.component';
import { DataBindingComponent } from './data-binding/data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas/diretivas.component';
import { ListaAlunosComponent } from './diretivas/lista-alunos/lista-alunos.component';
import { ExternoComponent } from './comunicacao-de-componentes/externo/externo.component';
const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'post-simulator',
    component: PostSimulatorComponent
  },
  {
    path: 'component-angular',
    component: ComponentAngularComponent
  },
  {
    path: 'in-out',
    component: ExternoComponent
  },
  {
    path: 'diretivas',
    component: DiretivasComponent
  },
  {
    path: 'lista-alunos',
    component: ListaAlunosComponent
  },
  {
    path: 'ciclo-de-vida',
    component: CicloDeVidaComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'modulos',
    component: ModuloComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent
  }
];
export const RoutingModule = RouterModule.forRoot(routes);
