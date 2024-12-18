import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Propiedad profileForm correctamente declarada como opcional y inicializada
  profileForm!: FormGroup;

  // Carrusel de imágenes
  images: string[] = [
    'https://i.pinimg.com/564x/79/51/68/795168244ac06cda9cae7ff0e47cd45b.jpg',
    'https://assets.dev-filo.dift.io/img/2023/03/27/cazzu7202_sq.jpg',
    'https://www.clarin.com/img/2019/07/16/-sfjZ2Pp__600x600__1.jpg',
    'https://www.clarin.com/img/2024/09/15/AMgUaorlt_600x600__1.jpg',
    'https://assets.dev-filo.dift.io/img/2020/08/05/zu_sq.jpg',
    'https://assets.dev-filo.dift.io/img/2023/04/17/34138600437217340514770441810125032647274242_n_(1)5682_sq.jpg'
  ];

  // Opciones de carrusel para adaptarse a diferentes tamaños de pantalla
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  // Inyectar FormBuilder para crear el formulario
  constructor(private fb: FormBuilder) {}

  // Inicializar el formulario con los controles
  ngOnInit() {
    // Aquí inicializamos el formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
