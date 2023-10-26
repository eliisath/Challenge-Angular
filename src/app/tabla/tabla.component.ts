import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  localData = [
    { NombreApellido:'John Snow', DNI: 32165852, FechaNacimiento: '20/11/1986' },
    { NombreApellido:'Cameron Díaz', DNI: 27496753, FechaNacimiento: '04/04/1974' },
    { NombreApellido:'Jessica Alba', DNI: 31258741, FechaNacimiento: '24/06/1985' },
    { NombreApellido:'Leonel Messi', DNI: 12345678, FechaNacimiento: '24/06/1985' },
    { NombreApellido:'Luke Skywalker', DNI: 23456987, FechaNacimiento: '24/06/1985' },
    { NombreApellido:'Chester Benington', DNI: 32125489, FechaNacimiento: '14/07/1982' },
  ];
}
