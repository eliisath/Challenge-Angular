import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent {
  title = 'ejemplo-validators';
  ocultarConfirmacionContrasenia: boolean = true;
  ocultarContrasenia: boolean = true;
  registerForm = this.formBuilder.group(
    {
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoDoc: ['', Validators.required],
      nroDoc: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      direccion: ['', Validators.required],
      piso: ['', Validators.required],
      dpto: ['', Validators.required],
      provincia: ['', Validators.required],
      localidad: ['', Validators.required],
      cp: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', Validators.required],
      nroTelefono: ['', Validators.required],
      telMovil: ['', Validators.required],
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  get f(): any{
    return this.registerForm.controls;
  }
}
