import { Component, OnInit } from '@angular/core';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner';
import { NavController, Platform } from '@ionic/angular';
import ScanbotSDK from 'cordova-plugin-scanbot-sdk';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  private SBSDK = ScanbotSDK.promisify();
  pages: any;
  constructor(
    public navCtrl: NavController, platform: Platform
  ) { 
    platform.ready().then(() => this.initScanbotSDK());
  }

  ngAfterViewInit() {
    this.makeScanHandler();
  }


  private async makeScanHandler() {
    //make infinite scans until error, just as example
    let scanResult = false;
    do {
      scanResult = await this.makeScan();
    } while (scanResult);
  }

  private makeScan(): Promise<boolean> {
    const opts: DocumentScannerOptions = {
      sourceType : 1,
      fileName : "image",
      quality : 3,
      returnBase64 : true
    };

    return DocumentScanner.scanDoc(opts)
      .then((res) => {
        console.log("res = ", res);
        return true;
      })
      .catch((error) => {
        console.log("catched");
        console.log(error);
        return false;
      });

  }

  ngOnInit() {
    this.startDocumentScanner();
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


async startDocumentScanner() {
  const result = await this.SBSDK.UI.startDocumentScanner({
    uiConfigs: {
      // Customize colors, text resources, behavior, etc..
      cameraPreviewMode: 'FIT_IN',
      orientationLockMode: 'PORTRAIT',
      pageCounterButtonTitle: '%d Page(s)',
      multiPageEnabled: true
      // ...
    }
  });
  if (result.status === 'CANCELED') {
    // user has canceled the scanning operation
    return;
  }
  // Get the scanned pages from result:
  this.pages = result.pages;
}
}
