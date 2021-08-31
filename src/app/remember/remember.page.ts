import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.page.html',
  styleUrls: ['./remember.page.scss'],
})
export class RememberPage implements OnInit {
  isLoading = false;
  sourseresolve: any;
  data: any;
  sub: any;
  url = 'https://www.cepelma.com.br/';
  cpfdate: any;
  documents: any;
  Posts: any;
  routering: any;
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
  ) { 
    this.cadastrodata.mae = "";
    this.cadastrodata.data = "";
    this.cadastrodata.cpf = "";
  }
  ngOnInit(): void {
    this.GetKeys();
  }
  
  GetKeys(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    const source = this.http.get(this.url+'loadpassword.php?cpf='+sourseresolve).pipe(map(res=>res.json()));
    return source.subscribe(
       data => this.Posts = data,
       err => console.log(err)
     );

  } 

}
