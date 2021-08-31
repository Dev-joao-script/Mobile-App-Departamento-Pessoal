import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ViewChild, ElementRef  } from '@angular/core';
import { map } from 'rxjs/operators';  
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import ScanbotSDK from 'cordova-plugin-scanbot-sdk';
import { NavController, Platform } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-justify',
  templateUrl: './justify.page.html',
  styleUrls: ['./justify.page.scss'],
})
export class JustifyPage implements OnInit {
  pdfObj = null;
  private SBSDK = ScanbotSDK.promisify();
  justtext: any;
  sourseresolve: any;
  url = 'https://www.cepelma.com.br/';
  SERVER_URL = "http://www.cepelma.com.br/DOCUMENTOS/";
  uploadForm: FormGroup;
  basepath = "http://localhost";
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  
  Posts: any;
  pages: any;
  constructor(
    private location: Location,
    public router: Router,
    private formBuilder: FormBuilder, 
    private https: HttpClient,
    public http: Http,
    public navCtrl: NavController, 
    public platform: Platform,
    // private file: File,
    // private fileOpener: FileOpener
    ){
      this.justtext = "";
      platform.ready().then(() => this.initScanbotSDK());
    }


  ngOnInit() {
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    this.sourseresolve = fn[2]; 
    console.log(this.sourseresolve)
    this.uploadForm = this.formBuilder.group({
      File: ['']
    });
    this.GetKeys();
  }

  private async initScanbotSDK() {
    await this.SBSDK.initializeSdk({
      loggingEnabled: true,
      licenseKey: '', // see the license key notes!
      storageImageFormat: 'JPG',
      storageImageQuality: 80
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    });
  }

  Back(): void {
    this.location.back()
  }



file = new FormControl('');
file_data:any = '';
fileChange(event) {
  
  const fileList: FileList = event.target.files;
  //check whether file is selected or not
  if (fileList.length > 0) {

      const file = fileList[0];
      //get file information such as name, size and type
      console.log('finfo',file.name,file.size,file.type);
      //max file size is 4 mb
      if((file.size/1048576)<=4)
      {
        let formData = new FormData();
        let info={id:2,name:'raja'}
        formData.append('file', file, file.name);
        formData.append('id','2');
        formData.append('tz',new Date().toISOString())
        formData.append('update','2')
        formData.append('info',JSON.stringify(info))
        this.file_data=formData
        
      }else{
        //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
      }
      
  }

}

ip="https://www.cepelma.com.br/"

uploadFile()
{
// this.createPdf();
let justifi = this.justtext;
let ID = this.sourseresolve;
    this.https.post(this.ip+'justify.php?justifi='+justifi+'&ID='+ID,this.file_data)
    .subscribe(() => {
      this.location.back();
    }, () => {
    this.location.back();
  });
  }

  GetKeys(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2]; 
    console.log(sourseresolve);
    const source = this.http.get(this.url+'FeedJustfy.php?Data='+sourseresolve).pipe(map(res=>res.json()));
    return source.subscribe(
       data => this.Posts = data,
       err => console.log(err)
     );
  }



  // async startDocumentScanner() {
  //   const result = await this.SBSDK.UI.startDocumentScanner({
  //     uiConfigs: {
  //       // Customize colors, text resources, behavior, etc..
  //       cameraPreviewMode: 'FIT_IN',
  //       orientationLockMode: 'PORTRAIT',
  //       pageCounterButtonTitle: '%d Page(s)',
  //       multiPageEnabled: true
  //       // ...
  //     }
  //   });
  
  //   if (result.status === 'CANCELED') {
  //     // user has canceled the scanning operation
  //     return;
  //   }
  
  //   // Get the scanned pages from result:
  //   this.pages = result.pages;
  // }

  // convertFileUri(fileUri) {
  //   return (<any>window).Ionic.WebView.convertFileSrc(fileUri);
  // }


  // createPdf() {
  //   var docDefinition = {
  //     content: [
  //       { text: 'REMINDER', style: 'header' },
  //       { text: new Date().toTimeString(), alignment: 'right' },
 
  //       { 
  //         text: this.pages.documentPreviewImageFileUri, style: 'story', margin: [0, 20, 0, 20] },
 
  //       {
  //         ul: [
  //           'Bacon',
  //           'Rips',
  //           'BBQ',
  //         ]
  //       }
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 18,
  //         bold: true,
  //       },
  //       subheader: {
  //         fontSize: 14,
  //         bold: true,
  //         margin: [0, 15, 0, 0]
  //       },
  //       story: {
  //         italic: true,
  //         alignment: 'center',
  //         width: '50%',
  //       }
  //     }
  //   }
  //   this.pdfObj = pdfMake.createPdf(docDefinition);
  // }

  // downloadPdf() {
  //   if (this.platform.is('cordova')) {
  //     this.pdfObj.getBuffer((buffer) => {
  //       var blob = new Blob([buffer], { type: 'application/pdf' });
 
  //       // Save the PDF to the data Directory of our App
  //       this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
  //         // Open the PDf with the correct OS tools
  //         this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
  //       })
  //     });
  //   } else {
  //     // On a browser simply use download!
  //     this.pdfObj.download();
  //   }
  // }
}
