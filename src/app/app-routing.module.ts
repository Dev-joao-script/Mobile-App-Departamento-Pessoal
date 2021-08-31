import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: 'home/:id',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
      },

      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
      },
    ]
   },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'contra-cheques',
    loadChildren: () => import('./pages/contra-cheques/contra-cheques.module').then( m => m.ContraChequesPageModule)
  },
  {
    path: 'cartao-ponto/:id',
    loadChildren: () => import('./pages/cartao-ponto/cartao-ponto.module').then( m => m.CartaoPontoPageModule)
  },
  {
    path: 'ferias/:id',
    loadChildren: () => import('./pages/ferias/ferias.module').then( m => m.FeriasPageModule)
  },
  {
    path: 'atestados',
    loadChildren: () => import('./pages/atestados/atestados.module').then( m => m.AtestadosPageModule)
  },
  {
    path: 'regulamento-interno',
    loadChildren: () => import('./pages/regulamento-interno/regulamento-interno.module').then( m => m.RegulamentoInternoPageModule)
  },
  {
    path: 'upload-documents',
    loadChildren: () => import('./pages/upload-documents/upload-documents.module').then( m => m.UploadDocumentsPageModule)
  },
  {
    path: 'anexo1',
    loadChildren: () => import('./pages/anexo1/anexo1.module').then( m => m.Anexo1PageModule)
  },
  {
    path: 'anexo2',
    loadChildren: () => import('./pages/anexo2/anexo2.module').then( m => m.Anexo2PageModule)
  },
  {
    path: 'anexo3',
    loadChildren: () => import('./pages/anexo3/anexo3.module').then( m => m.Anexo3PageModule)
  },
  {
    path: 'anexo4',
    loadChildren: () => import('./pages/anexo4/anexo4.module').then( m => m.Anexo4PageModule)
  },
  {
    path: 'justify/:id',
    loadChildren: () => import('./justify/justify.module').then( m => m.JustifyPageModule)
  },

  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },

  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },

  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'conced',
    loadChildren: () => import('./conced/conced.module').then( m => m.ConcedPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'senha/:id',
    loadChildren: () => import('./senha/senha.module').then( m => m.SenhaPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'remember/:id',
    loadChildren: () => import('./remember/remember.module').then( m => m.RememberPageModule)
  },
  {
    path: 'checklist-epi',
    loadChildren: () => import('./modal/checklist-epi/checklist-epi.module').then( m => m.ChecklistEpiPageModule)
  },
  {
    path: 'sac',
    loadChildren: () => import('./modal/sac/sac.module').then( m => m.SacPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'assinatura',
    loadChildren: () => import('./modal/assinatura/assinatura.module').then( m => m.AssinaturaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
