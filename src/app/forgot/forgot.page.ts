import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  cpf:any;
  basepath = "login";
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cpf_date: any;
  cadastrodata: any = {};
  foo: any;
  returndata: any;
  datasource: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    private router: Router,
    public toastController: ToastController
  ) { 
    this.cadastrodata.mae = "";
    this.cadastrodata.data = "";
    this.cadastrodata.cpf = "";
  }
  ngOnInit(): void {
  }
  cadastro() {
  // eslint-disable-next-line @typescript-eslint/quotes
    // eslint-disable-next-line
    if (this.cadastrodata.mae != "" && this.cadastrodata.data != "" && this.cadastrodata.cpf != "") {
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Mae:", this.cadastrodata.mae);
      console.log('data:', this.cadastrodata.data);
      console.log('cpf:', this.cadastrodata.cpf);
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      // eslint-disable-next-line prefer-const
      let url: string = 'http://www.cepelma.com.br/CadastroApp.php';
      console.log("Mae:", this.cadastrodata.mae),
      console.log('data:', this.cadastrodata.data),
      console.log('cpf:', this.cadastrodata.cpf),
      this.http.get(url+'?Mae='+this.cadastrodata.mae+'&Nascimento='+this.cadastrodata.data+'&CPF='+this.cadastrodata.cpf)
      .pipe(map(res => res.json()))
      .subscribe(data => {
        console.log(data);
        if (data != null && data != "Existent") {
          console.log(data);
          this.returndata = data;
          console.log(this.returndata);
          let id = this.cadastrodata.cpf;
          let key = this.cadastrodata.senha;
          this.cpf_date = this.cadastrodata.cpf;
          this.router.navigate(['senha/' + this.cadastrodata.cpf]);
          this.datasource = {
            cpfSource: this.cadastrodata.cpf,
          };
          
        } else {
          if (data == null) {
          this.presentToast("Dados não conferem!");

          }else{
          if (data == "Existent") {
            this.router.navigate(['remember/' + this.cadastrodata.cpf]);
          }
          }
        }
      });
    } else {
      console.log("preencha todos os campos");
      this.presentToast("preencha todos os campos");
    }
  }

  async presentToast(messageSignal:string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 3000
    });
    toast.present();
  }


}
