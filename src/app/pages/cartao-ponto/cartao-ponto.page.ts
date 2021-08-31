import { AppComponent } from './../../app.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';


@Component({
  selector: 'app-cartao-ponto',
  templateUrl: './cartao-ponto.page.html',
  styleUrls: ['./cartao-ponto.page.scss'],
})
export class CartaoPontoPage implements OnInit {
  
  url: string = "http://www.cepelma.com.br/";
  documents: any;
  isLoading = false;
  sourseresolve: any;
  constructor(
              public router: Router,
              public http: Http,
              public activatedroute: ActivatedRoute,
              private loadingController: LoadingController,
              public AppComponent: AppComponent,
              public previewAnyFile: PreviewAnyFile
  ) { }

  ngOnInit() {
  this.loadingPresent();
  this.getreturn();
  }

  getreturn(){
    this.sourseresolve = this.AppComponent.menbros;
    console.log(this.sourseresolve[0]);
    const fn = this.sourseresolve[0].codigo
    const source = this.http.get(this.url+'Ctp.php?Data='+fn).pipe(map(res=>res.json()));
      return source.subscribe(
         data => this.documents = data,
         err => console.log(err)
       );
}

async loadingPresent() {
  this.isLoading = true;
  return await this.loadingController.create({
    message: 'Aguarde um instante...',
    spinner: 'circles',
    duration: 2000
  }).then(a => {
    a.present().then(() => {
      console.log('loading presented');
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort laoding'));
      }
    });
  });
}

async loadingDismiss() {
  this.isLoading = false;
  return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
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

}