import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @ViewChild('player') player!: Player;
  @ViewChild('display_button') divElementRef!: ElementRef;
  divElement!: HTMLElement;

  paused: boolean = true;

  tem1: string = `<p>La construcción \n del edificio nos lleva a 1860, en donde el padre Fulgencio Bonilla, dueño en ese entonces del terreno, construye, aproximadamente en esa época, un edificio de una sola planta, en calicanto. En su momento el lugar se usaba como residencia del sacerdote y los espacios libres los alquilaba para dormitorios y oficinas. Es así como termina alquilando parte de la residencia a la Familia Pirie, quienes se convertirían en los icónicos dueños del edificio.</p>`;
  tem2: string = `<p>La familia Pirie, son canadienses que se embarcan en un viaje para llegar a Chile y en su camino a su destino inicial, el barco en el que viajaban sufre un desperfecto y deben esperar en el puerto de Limón en Costa Rica. Es así que deciden conocer parte del país y visitan Cartago, lugar que los enamora y cambian el destino de su viaje.</p><p> La familia esta compuesta por un doctor y un farmacéutico y es así que ellos crean en la casa de Fulgencio Bonilla la primera botica de Cartago y terminan comprando el inmueble y construyendo el segundo piso del mismo. </p><p> La familia y el espacio se terminan convirtiendo en un ícono para la ciudad, generando que al día de hoy el edificio siga llamándose como ellos. Edificio Pirie.</p>`;
  tem3: string = `<p>La primera sede del TEC 	El Edificio Pirie, se convierte en la primera sede de la segunda universidad pública que se creó en nuestro país.</p><p> Para el año de 1971 se discute la creación de la misma y Cartago es elegido como el lugar para el desarrollo de ella y gracias a la donación del edificio por parte de la municipalidad de Cartago a la causa es que termina siendo la primera sede del Tecnológico de Costa Rica, creado el 10 de junio de 1971.</p><p> Inicia sus labores formativas dos años después en 1973 con 3 carreras y se mantiene en este espacio hasta inicio de 1980, donde paulatinamente se va trasladando a la sede actual en Cartago.<p>`;

  img1: string =
    'https://res.cloudinary.com/casa-de-la-ciudad/image/upload/v1646500473/cdciudad/imagenes/FOTO5853-min_muwpiy.jpg';
  img2: string =
    'https://res.cloudinary.com/casa-de-la-ciudad/image/upload/v1646500476/cdciudad/imagenes/IMG-20171126-WA0005-min_woqroo.jpg';
  img3: string =
    'https://res.cloudinary.com/casa-de-la-ciudad/image/upload/v1646500474/cdciudad/imagenes/Imagen_026-min_ngkzgh.jpg';

  constructor() {}

  playVideo() {
    this.paused = !this.paused;
  }

  ngOnInit(): void {}
}
