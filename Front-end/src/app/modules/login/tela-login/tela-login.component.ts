import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {
  loginForm = new FormGroup({
    nomeUsuario: new FormControl('', Validators.required),
    senhaUsuario: new FormControl('', Validators.required),
  });

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.loginForm.value.nomeUsuario);

    var user = {
      nome: this.loginForm.value.nomeUsuario,
      senha: this.loginForm.value.senhaUsuario,
    }
    var usuario = this.usuarioService.getUser(user)
    console.log(usuario)
  }
}
