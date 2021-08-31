import { EpiService, Epi } from 'src/app/epi.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist-epi',
  templateUrl: './checklist-epi.page.html',
  styleUrls: ['./checklist-epi.page.scss'],
})
export class ChecklistEpiPage implements OnInit {
  @Input() Epi: Epi;
  isUpdate = false;

  epi = {
    seq: '',
    cod: '',
    cpf: '',
    calcado: '',
    luvas: '',
    olhos: '',
    ouvidos: '',
    dorso: '',
    pescoco: '',
    pernas: '',
    bracos: '',
    cabeca: '',
    uniforme: '',
    cinto: '',
    acessorio: '',
  };

  epiSend = {
    seq: '',
    cod: '',
    cpf: '',
    calcado: '',
    luvas: '',
    olhos: '',
    ouvidos: '',
    dorso: '',
    pescoco: '',
    pernas: '',
    bracos: '',
    cabeca: '',
    uniforme: '',
    cinto: '',
    acessorio: '',
  };

  catEpi: {
    seq: String,
    Numero: String,
    Nome: String,
    Descricao: String,
    Indicacao: String,
    Fabricantes: String,
    Durabilidade: String,
    Scan: String,
    Laudo: String,
    NumeroCa: String,
    Validade: String,
    NumeroProcesso: String,
    Natureza: String,
    Cor: String,
    Cnpj: String,
    Quantidade: String,
    DataCompra: String,
    Valor: String,
    NFCompra: String,
    Fornecedor: String,
    CNPJFornecedor: String,
    Scan2: String,
  }

  Name = "Teste";
  valueB: string;
  valueA: string;
  Tipo = "Atraso.";
  Titulo = "Jornada de Trabalho Inferior.";
  Descricao = "jornada incompleta, conforme marcações no relogio.";
  selected: any;


  KeyArray: any;
  KeyCpf: any;
  Token: string;
  URL: string;
  Userid: string;
  cabeca: any;
  calcado: any;
  luvas: any;
  olhos: any;
  ouvidos: any;
  dorso: any;
  pescoco: any;
  pernas: any;
  bracos: any;
  uniforme: any;
  cinto: any;
  acessorio: any;
  dataDay: string;
  param: any;
  optionsOn: Boolean;
  OptDuo: boolean;
  options_luva: boolean;
  opt_olho: boolean;
  opt_ouvido: boolean;
  opt_dorso: boolean;
  opt_pescoco: boolean;
  opt_pernas: boolean;
  opt_bracos: boolean;
  opt_cabeca: boolean;
  opt_uniforme: boolean;
  opt_cinto: boolean;
  opt_acessorio: boolean;


  constructor(
    private modalCtrl: ModalController,
    private service: EpiService,
    private http: Http,
    public router: Router,
  ) { }


  ngOnInit() {


    this.dataDay = new Date().toISOString();
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    this.Userid = sourseresolve;
    this.service.get(sourseresolve).subscribe(response => {
      this.epi[0] = response;
      console.log(this.epi)


      this.optionsOn = true;
      if (this.epi[0].calcado !== "vazio") {
        const mod = this.epi[0].calcado
        this.service.getAllModJ(mod).subscribe(res => {
          this.calcado = [res];
          // this.calcado=res[0];
          console.log(this.calcado)
          this.epiSend.calcado = "Possui"
        })
      }


      this.options_luva = true;
      if (this.epi[0].luvas !== "vazio") {
        const mod = this.epi[0].luvas
        this.service.getAllModJ(mod).subscribe(response => {
          this.luvas = [response];
          console.log(this.luvas)
          this.epiSend.luvas = "Possui"
        })
      }



      this.opt_olho = true;
      if (this.epi[0].olhos !== "vazio") {
        const mod = this.epi[0].olhos
        this.service.getAllModJ(mod).subscribe(response => {
          this.olhos = [response];
          console.log(this.olhos)
          this.epiSend.olhos = "Possui"

        })
      }

      this.opt_ouvido = true;
      if (this.epi[0].ouvidos !== "vazio") {
        const mod = this.epi[0].ouvidos
        this.service.getAllModJ(mod).subscribe(response => {
          this.ouvidos = [response];
          console.log(this.ouvidos)
          this.epiSend.ouvidos = "Possui"
        })
      }

      this.opt_dorso = true;
      if (this.epi[0].dorso !== "vazio") {
        const mod = this.epi[0].dorso
        this.service.getAllModJ(mod).subscribe(response => {
          this.dorso = [response];
          console.log(this.dorso)
          this.epiSend.dorso = "Possui"
        })
      }

      this.opt_pescoco = true;
      if (this.epi[0].pescoco !== "vazio") {
        const mod = this.epi[0].pescoco
        this.service.getAllModJ(mod).subscribe(response => {
          this.pescoco = [response];
          console.log(this.pescoco)
          this.epiSend.pescoco = "Possui"
        })
      }

      this.opt_pernas = true;
      if (this.epi[0].pernas !== "vazio") {
        const mod = this.epi[0].pernas
        this.service.getAllModJ(mod).subscribe(response => {
          this.pernas = [response];
          console.log(this.pernas)
          this.epiSend.pernas = "Possui"
        })
      }

      this.opt_bracos = true;
      if (this.epi[0].bracos !== "vazio") {
        const mod = this.epi[0].bracos
        this.service.getAllModJ(mod).subscribe(response => {
          this.bracos = [response];
          console.log(this.bracos)
          this.epiSend.bracos = "Possui"
        })
      }

      this.opt_cabeca = true;
      if (this.epi[0].cabeca !== "vazio") {
        const mod = this.epi[0].cabeca
        this.service.getAllModJ(mod).subscribe(response => {
          this.cabeca = [response];
          console.log(this.cabeca)
          this.epiSend.cabeca = "Possui"
        })
      }

      this.opt_uniforme = true;
      if (this.epi[0].uniforme !== "vazio") {
        const mod = this.epi[0].uniforme
        this.service.getAllModJ(mod).subscribe(response => {
          this.uniforme = [response];
          console.log(this.uniforme)
          this.epiSend.uniforme = "Possui"
        })

      }

      this.opt_cinto = true;
      if (this.epi[0].cinto !== "vazio") {
        const mod = this.epi[0].cinto
        this.service.getAllModJ(mod).subscribe(response => {
          this.cinto = [response];
          console.log(this.cinto)
          this.epiSend.cinto = "Possui"

        })
      }

      this.opt_acessorio = true;
      if (this.epi[0].acessorio !== "vazio") {
        const mod = this.epi[0].acessorio
        this.service.getAllModJ(mod).subscribe(response => {
          this.acessorio = [response];
          console.log(this.acessorio)
          this.epiSend.acessorio = "Possui"

        })
      }

    })
  }

  onSubmit(form: NgForm) {
    const pendencia = form.value;
    this.service.create(pendencia).subscribe(
      response => {
        this.modalCtrl.dismiss(response, 'created');
      });
    console.log(pendencia)
  }

  closeModal() {
    this.modalCtrl.dismiss(null, 'closed');
  }


  opt_calcato() {
    if (this.optionsOn) {
      this.epiSend.calcado = "";
    } else {
      this.epiSend.calcado = "Possui"
    }
  }


  opt_luva() {
    if (this.options_luva) {
      this.epiSend.luvas = "";
      console.log(this.options_luva)
    } else {
      this.epiSend.luvas = "Possui"
      console.log(this.options_luva)
    }
  }


  opt_olhos() {
    if (this.opt_olho) {
      this.epiSend.olhos = "";
      console.log(this.opt_olho)
    } else {
      this.epiSend.olhos = "Possui"
      console.log(this.opt_olho)
    }
  }

  opt_ouvidos() {
    if (this.opt_ouvido) {
      this.epiSend.ouvidos = "";
      console.log(this.opt_ouvido)
    } else {
      this.epiSend.ouvidos = "Possui"
      console.log(this.opt_ouvido)
    }
  }

  opt_dorsos() {
    if (this.opt_dorso) {
      this.epiSend.dorso = "";
      console.log(this.opt_dorso)
    } else {
      this.epiSend.dorso = "Possui"
      console.log(this.opt_dorso)
    }
  }

  opt_pescocos() {
    if (this.opt_pescoco) {
      this.epiSend.dorso = "";
      console.log(this.opt_pescoco)
    } else {
      this.epiSend.dorso = "Possui"
      console.log(this.opt_pescoco)
    }
  }

  opt_pernass() {
    if (this.opt_pernas) {
      this.epiSend.pernas = "";
      console.log(this.opt_pernas)
    } else {
      this.epiSend.pernas = "Possui"
      console.log(this.opt_pernas)
    }
  }

  opt_bracoss() {
    if (this.opt_bracos) {
      this.epiSend.bracos = "";
      console.log(this.opt_bracos)
    } else {
      this.epiSend.bracos = "Possui"
      console.log(this.opt_bracos)
    }
  }

  opt_cabecas() {
    if (this.opt_cabeca) {
      this.epiSend.cabeca = "";
      console.log(this.opt_cabeca)
    } else {
      this.epiSend.cabeca = "Possui"
      console.log(this.opt_cabeca)
    }
  }

  opt_uniformes() {
    if (this.opt_uniforme) {
      this.epiSend.uniforme = "";
      console.log(this.opt_uniforme)
    } else {
      this.epiSend.uniforme = "Possui"
      console.log(this.opt_uniforme)
    }
  }

  opt_cintos() {
    if (this.opt_cinto) {
      this.epiSend.cinto = "";
      console.log(this.opt_cinto)
    } else {
      this.epiSend.cinto = "Possui"
      console.log(this.opt_cinto)
    }
  }

  opt_acessorios() {
    if (this.opt_acessorio) {
      this.epiSend.acessorio = "";
      console.log(this.opt_acessorio)
    } else {
      this.epiSend.acessorio = "Possui"
      console.log(this.opt_acessorio)
    }
  }
}


