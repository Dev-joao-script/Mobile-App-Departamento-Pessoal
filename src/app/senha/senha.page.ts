import { OnInit, OnDestroy } from '@angular/core';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { NavController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
})

export class SenhaPage implements OnInit, OnDestroy{
  cpf:any;
  basepath = "login";
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cpf_date: any;
  logindata: any = {};
  foo: any;
  returndata: any;
  datasource: any;
  file_data:any = '';

  constructor(public navCtrl: NavController,
    public http: Http,
    private router: Router,
    private https: HttpClient,
    public toastController: ToastController
    ) {
    // eslint-disable-next-line no-trailing-spaces

    // eslint-disable-next-line @typescript-eslint/quotes
    this.logindata.new = "";

    // eslint-disable-next-line @typescript-eslint/quotes
    this.logindata.confirm = "";

  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 3000
    });
    toast.present();
  }


  ionViewDidLeave(): void{
    this.cpf =  this.logindata.cpf;
    console.log(this.cpf);
  }

  cadastrar() {
    // eslint-disable-next-line @typescript-eslint/quotes
    // eslint-disable-next-line
    if (this.logindata.new != "" && this.logindata.confirm != "") {
      // eslint-disable-next-line @typescript-eslint/quotes
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      // eslint-disable-next-line prefer-const
    if (this.logindata.new === this.logindata.confirm ) {

      const datasource = this.router.url;
      console.log(datasource);
      const fn = datasource.split("/");
      const sourseresolve = fn[2];

      let url: string = 'http://www.cepelma.com.br/userInsert.php';
      console.log("confirm:", this.logindata.confirm),
      console.log('new:', this.logindata.new),
      console.log('email:', this.logindata.email),
      this.https.post(url+'?new='+this.logindata.new+'&email='+this.logindata.email+'&user='+sourseresolve,"")
      .subscribe(res => {
      this.presentToast("Cadastro concluido!");
      
      this.router.navigate(['login']);
  }, (err) => {
      this.presentToast("Cadastro concluido!");
      this.router.navigate(['login']);
    });
    
    }else{
      this.presentToast("Senhas não coencidem");
    }
    } else {
      console.log("preencha todos os campos");
      this.presentToast("preencha todos os campos");
    }
    
  }


  Cadastro(){
    this.router.navigate(['cadastro']);
  }


};


