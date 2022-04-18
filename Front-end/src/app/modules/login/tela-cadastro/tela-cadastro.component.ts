import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss'],
})
export class TelaCadastroComponent implements OnInit {
  nomeFormOpcoes = 'opcaoInteresse';

  itensOpcaoInteresse = [
    {
      id: 'aplicativos_bancos_opcao',
      conteudo: 'Aplicativos de Bancos',
      nomeForm: 'opcaoInteresseAplicativosBanco',
    },
    {
      id: 'redes_sociais_opcao',
      conteudo: 'Redes sociais',
      nomeForm: 'opcoesInteresseRedesSociais',
    },
    {
      id: 'ferramenta_escritorio_opcao',
      conteudo: 'Ferramentas de escritório',
      nomeForm: 'opcoesInteresseFerramentaEscritorio',
    },
    {
      id: 'computacao_geral_opcao',
      conteudo: 'Computação em geral',
      nomeForm: 'opcoesInteresseComputacaoGeral',
    },
  ];

  cadastroForm = new FormGroup({
    nomeUsuario: new FormControl('', Validators.required),
    senhaUsuario: new FormControl('', Validators.required),
    confirmacaoSenhaUsuario: new FormControl('', Validators.required),
    opcaoInteresseAplicativosBanco: new FormControl(),
    opcoesInteresseRedesSociais: new FormControl(),
    opcoesInteresseFerramentaEscritorio: new FormControl(),
    opcoesInteresseComputacaoGeral: new FormControl(),
    opcoesInteresseOutros: new FormControl(),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cadastroForm.value);

    if (this.cadastroForm.value) {
      this.router.navigate(['/login/']);
    }
  }
}
