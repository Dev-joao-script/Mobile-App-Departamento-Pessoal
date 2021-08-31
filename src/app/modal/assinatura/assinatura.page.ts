import { AssinaturaService, assinatura } from 'src/app/service/assinatura.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.page.html',
  styleUrls: ['./assinatura.page.scss'],
})
export class AssinaturaPage implements OnInit {
  @Input() assinatura: assinatura;
  @Input("Goens") Goens;
  @Input("Cod") Cod;
  @Input("Periodo") Periodo;
  @Input("sourseresolve") sourseresolve;
  
  isUpdate = false;

  dataSbt = {
    seq: '',
    cod: '',
    scan: '',
  };

  Name = "Teste";
  valueB: string;
  valueA: string;
  Tipo = "Advertencia.";
  Titulo = "Advertencia Verbal.";
  Descricao:string;
  selected: any;
  senha:string;

  KeyArray:any;
  KeyCpf:any;
  Token:string;
  URL: string;
  returndata: any;


  constructor(
    private modalCtrl: ModalController,
    private service: AssinaturaService,
    private http: Http,
    private alertController: AlertController,
    public toastController: ToastController
    ) { }


  ngOnInit() {
  console.log(this.Goens)
  console.log(this.Cod)
  console.log(this.Periodo)
  }

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 3000
    });
    toast.present();
  }

 async Assinar() {
  this.alertController.create({
    header: 'Solicitação de Senha.',
    subHeader: 'Senha de confirmação',
    message: 'Por favor digite sua senha e confirme.',
    inputs: [
      {
        name: 'Place',
        placeholder: 'Senha...',
        type: 'password'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: (data: any) => {
          console.log('Canceled', data);
        }
      },
      {
        text: 'Assinar',
        handler: (data: any) => {
          console.log('Saved Information', data);
          this.senha = data.Place;
          console.log(this.senha)
          this.registres(this.senha,this.sourseresolve)
        }
      }
    ]
  }).then(res => {
    res.present();
  });

 }

 registres(senha, user){

    if (user != "" && senha != "") {
      console.log("user:", user);
      console.log('pass:', senha);
      let url: string = 'http://www.cepelma.com.br/loginAPP.php';
      console.log("user:", user),
      console.log('pass:', senha),
      this.http.get(url+'?user='+user+'&Data='+senha)
      .pipe(map(res => res.json()))
      .subscribe(data => {
        console.log(data);
        if (data != null) {
          console.log(data);
          this.returndata = data;
          console.log(this.returndata);
          let id = user;
          id = id.replace('.','');
          id = id.replace('.','');
          id = id.replace('-','');
          let key = senha;
          this.service.create(this.Periodo,this.Cod,this.Goens).subscribe(
            response => {
              this.modalCtrl.dismiss(response, 'created');
            });
          alert("Salve uma copia do seu contra-cheque.");
            var url ='http://www.cepelma.com.br/DOCUMENTOS/';
            const Strn: any = url+this.Goens;
            const encoded = encodeURI(Strn);
            window.open(encoded, "_blank");
            this.modalCtrl.dismiss('created');
        } else {
          this.presentToast("Senha incorreta!");
        }
      });
    } else {
      console.log("preencha a senha");
      this.presentToast("preencha a senha");
    }
    
 }


closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}



view(){
  window.open("http://www.cepelma.com.br/DOCUMENTOS/"+this.Goens, "_blank");
}

}

