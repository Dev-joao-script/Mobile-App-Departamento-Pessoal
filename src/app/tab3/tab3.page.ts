import { AppComponent } from './../app.component';
import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { NgZone } from '@angular/core';
import { Platform } from  '@ionic/angular';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, OnDestroy{
  isLoading = false;
  sourseresolve: any;
  data: any;
  sub: any;
  url = 'https://www.cepelma.com.br/';
  cpfdate: any;
  documents: any;
  Posts: any;
  routering: string;
  constructor(
    public http: Http,
    public activatedroute: ActivatedRoute,
    public router: Router,
    private loadingController: LoadingController,
    public AppComponent: AppComponent,
    public previewAnyFile: PreviewAnyFile,
    private zone: NgZone,
    public Platform: Platform

  ) {}

  preview(DocV: any){
    if (this.Platform.is('cordova')) {
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
 
  getDados() {
    // alert(this.sub);
    return this.http
      .get(this.url + 'dados.php?Data=' + this.sub)
      .pipe(map((res) => res.json()));
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

  GetKeys(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    const source = this.http.get(this.url+'Feed_Call.php?Data='+sourseresolve+'&Cln=Cln').pipe(map(res=>res.json()));
    return source.subscribe(
       data => this.Posts = data,
       err => console.log(err)
     );

  } 

  ngOnInit(): void {
  this.getDados();
  this.loadingPresent();
  this.AppComponent.getreturn();
  this.AppComponent.getRouteres();
  this.GetKeys();
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
    this.router.navigate([this.routering]);
  }

  getRouttree(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve1 = fn[1]; 
    const sourseresolve2 = fn[2]; 
    this.routering = fn[1] +"/"+ fn[2];
    this.router.navigate([this.routering+"/tab2"]);
  }
}
