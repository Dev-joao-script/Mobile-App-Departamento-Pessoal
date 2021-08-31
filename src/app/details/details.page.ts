import { AppComponent } from './../app.component';
import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { NgZone } from '@angular/core';
import { Location } from '@angular/common'

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy{
  isLoading = false;
  sourseresolve: any;
  data: any;
  sub: any;
  url = 'https://www.cepelma.com.br/';
  cpfdate: any;
  documents: any;
  Posts: any;
  constructor(
    public http: Http,
    public activatedroute: ActivatedRoute,
    public router: Router,
    private loadingController: LoadingController,
    public AppComponent: AppComponent,
    public previewAnyFile: PreviewAnyFile,
    private zone: NgZone,
    private location: Location
  ) {}

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
 
  GetKeys(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    const source = this.http.get(this.url+'Feed_Details.php?Data='+sourseresolve).pipe(map(res=>res.json()));
    return source.subscribe(
       data => this.Posts = data,
       err => console.log(err)
     );
  } 

  ngOnInit(): void {
    this.GetKeys();
    this.SetViewe();
  }

  
  ngOnDestroy(): void {
  }

  ionViewDidEnter(): void{
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
  SetViewe(){
    let postData = new FormData();
    postData.append('user' , 'login');
    postData.append('password' , 'pass');
    const URL:any = "http://www.cepelma.com.br/Feed_Viwer.php"
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    this.http.post(URL+'?Data='+ sourseresolve, postData)
    .subscribe(data => {
      console.log(result);
   },
   err => {
        console.log('Error: ' + err.error);
    });
  }
  Back(): void {
    this.location.back()
  }
}
function result(result: any) {
  throw new Error('Function not implemented.');
}

