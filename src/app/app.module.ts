import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JustifyPage } from './justify/justify.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPage } from './login/login.page';
import { SenhaPageModule } from './senha/senha.module';
import { SenhaPage } from './senha/senha.page';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SenhaPage,
    JustifyPage
    
    
  ],
  entryComponents: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FileUploadModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreviewAnyFile,
    LoginPage,
    Push,
    StatusBar,
    SplashScreen,
    File,
    FileOpener
  ],
  bootstrap: [AppComponent],

  
})
export class AppModule {
}
