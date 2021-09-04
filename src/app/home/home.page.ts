import { AssinaturaPage } from './../modal/assinatura/assinatura.page';
import { ChecklistEpiPage } from './../modal/checklist-epi/checklist-epi.page';
import { AppComponent } from './../app.component';
import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoadingController, ModalController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { NgZone } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';

// import { Plugins, PushNotification,
// PushNotificationToken,
// PushNotificationActionPerformed } from '@capacitor/core';
// import {
//   Plugins
//   PushNotification,
//   PushNotificationToken,
//   PushNotificationActionPerformed
// } from '@capacitor/push-notifications';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


// const { PushNotifications, Modals } = Plugins;

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  isLoading = false;
  sourseresolve: any;
  data: any;
  sub: any;
  url = 'https://www.cepelma.com.br/';
  cpfdate: any;
  // documents: any;
  Posts: any;
  routering: any;
  Token: string = "";
  Userid:string = "";
  datatoken: any
  loading: any;

  documents:any
  documentos:any
  
  public notifications: BehaviorSubject<Object> = new BehaviorSubject(false);

  constructor(
    public http: Http,
    public activatedroute: ActivatedRoute,
    public router: Router,
    private loadingController: LoadingController,
    public AppComponent: AppComponent,
    public previewAnyFile: PreviewAnyFile,
    private zone: NgZone,
    public alertCtrl: AlertController,
    private Push: Push,
    private platform: Platform,
    private https: HttpClient,
    public Platform: Platform,
    private modalCtrl: ModalController,

  ) {}


  ngOnInit(): void {
    this.getDados();
    this.loadingPresent();
    this.AppComponent.getreturn();
    this.AppComponent.getRouteres();
    this.GetKeys();

    if (this.Platform.is('cordova')) {

    let push = (<any> window).PushNotification.init({
      android: {
        senderID: '798820140217'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    });

    push.on('registration', (data) => {
      console.log(data.registrationId);
      console.log(data.registrationType);

      this.http.post('https://www.cepelma.com.br/saveToken.php?ID=' + this.Userid + '&Token=' + data.registrationId,"")
      .subscribe(res => {
        console.log("Cadastro concluido!");
    }, (err) => {
        console.log("Cadastro concluido!");
      });
    });

    push.on('notification', (data) => {
      console.log(data.alert);
      console.log(data.message);
      console.log(data.title);
      console.log(data.count);
      console.log(data.sound);
      console.log(data.image);
      console.log(data.additionalData);    
      this.notifications.next(data);
    });

    push.on('error', (err) => {
      console.log(err);
    });
  };

  this.letsdothisnow();
  }

  preview(DocV: any){
    var url ='http://www.cepelma.com.br/DOCUMENTOS/';
    const Strn: any = url+DocV;
    const encoded = encodeURI(Strn);
    this.previewAnyFile.preview(encoded).then(() =>
    {
    }, (err) => {
      alert(JSON.stringify(err));
    }
    )
  }
 
  getDados() {
    // alert(this.sub);
    return this.http
      .get(this.url + 'dados.php?Data=' + this.sub)
      .pipe(map(res => res.json()));
      console.log(this.sub)
  }

  async loadingPresent() {
    this.isLoading = true;
    this.loading = await this.loadingController.create({
      message: 'Aguarde um instante...',
      spinner: 'circles',
      duration: 2000,
    });
    return this.loading.present();
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }

  GetKeys(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    this.Userid = sourseresolve;
    const source = this.http.get(this.url+'Feed_Call.php?Data='+sourseresolve).pipe(map((res: any)=>res.json()));
    return source.subscribe(
       data => this.Posts = data,
       err => console.log(err)
     );
  } 

  async letsdothisnow(){
    await this.loadingPresent();
    this.getCtc();
    this.getCtp();
    this.loading.dismiss();
  }

  getCtc(){
    console.log(this.Posts[0].Cod);
    let Var = this.Posts[0].Cod;
    // const fn = this.sourseresolve[0].codigo;
    const source = this.http.get(this.url+'CtcULt.php?Data='+ Var).pipe(map(res=>res.json()));
      return source.subscribe(
        data =>  this.documents = data,
        // data  => console.log(data),
         err => console.log(err)
       );
} 


  getCtc2(Goens){    
    console.log(this.documents)
    var url ='http://www.cepelma.com.br/DOCUMENTOS/';
    const Strn: any = url+Goens;
    const encoded = encodeURI(Strn);
    window.open(encoded, "_blank");
  }

  getCtp(){
    console.log(this.Posts[0].Cod);
    let Var = this.Posts[0].Cod;
    // const fn = this.sourseresolve[0].codigo;
    const source = this.http.get(this.url+'CtpULt - Copia.php?Data='+ Var).pipe(map(res=>res.json()));
      return source.subscribe(
        data =>  this.documentos = data,
        // data  => console.log(data),
         err => console.log(err)
       );
} 


  getCtp2(Goens, Periodo){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    this.alertCtrl.create({
      header: 'Adicionar',
      message: 'Ultimo cartão de ponto gerado',
      buttons: [{
        text: 'Visualizar',
        handler: () => {
          console.log(this.documentos)
          var url ='http://www.cepelma.com.br/DOCUMENTOS/';
          const Strn: any = url+Goens;
          const encoded = encodeURI(Strn);
          window.open(encoded, "_blank");
        }
      },
      {
        text: 'Assinar',
        handler: () => { 
          this.modalCtrl.create({
            component: AssinaturaPage,
            componentProps: { Goens, Cod:this.Posts[0].Cod, Periodo, sourseresolve}
          })
            .then(modal => {
              modal.present();
              return modal.onDidDismiss();
            })
            .then(({ data, role }) => {
              if (role === 'created') {
                console.log('assinado com sucesso')
              }
            });

        }
      }
      ]
    })
      .then(alertEl => alertEl.present())
  }

  ngOnDestroy(): void {
  }

  ionViewDidEnter(): void{
    this.getDados();
    this.AppComponent.getreturn();
    this.AppComponent.getRouteres();
    this.GetKeys();
  }


  Repost(posting){
    this.router.navigate(['justify/' + posting]);
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      window.location.reload();
      this.zone.run(() => {
        console.log('force update the screen');
      });
    });


  }

  Details(ID){
  this.router.navigate(['details/' + ID]);
  }

getRout(){
  const datasource = this.router.url;
  console.log(datasource);
  const fn = datasource.split("/");
  const sourseresolve1 = fn[1]; 
  const sourseresolve2 = fn[2]; 
  this.routering = fn[1] +"/"+ fn[2];
}


checklistepi() {
  this.alertCtrl.create({
    header: 'Adicionar',
    message: 'Prencher check list diario?',
    buttons: [{
      text: 'Preencher',
      handler: () => {
        this.modalCtrl.create({
          component: ChecklistEpiPage
        })
          .then(modal => {
            modal.present();
            return modal.onDidDismiss();
          })
          .then(({ data, role }) => {
            if (role === 'created') {
              // this.Funcionarios.push(data);
            }
          });
      }
    },
    {
      text: 'Cancelar',
      handler: () => { }
    }
    ]
  })
    .then(alertEl => alertEl.present())
}
  
Msg(){
  alert("Funcionalidade estará disponivel em breve!")
}

}
