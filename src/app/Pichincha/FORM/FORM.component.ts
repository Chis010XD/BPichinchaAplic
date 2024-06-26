import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from 'src/app/interfaces/PListado.interfaces';
import { ListadoService } from 'src/app/services/listado.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>FORM works!</p>`,
  styles: [`
    :host {
      display: block;


      //color para los campos que no estan llenos
      .ng-invalid.ng-touched {
      border-color: red;
}
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  lis: Registro = {
    id: 0,
    nombre: '',
    descripcion: '',
    logo: '',
    fechaLiberacion: null,
    fechaRevision: null
  };



    //Aqui controlamos lo que es la fecha mientras no este seleccionado fechaliberacion, que se deshabilite el sigueinte boton
  fechaLiberacionSelected: boolean = false;
  checkFechaLiberacion() {
    this.fechaLiberacionSelected = this.lis.fechaLiberacion !== null && this.lis.fechaLiberacion !== '';
  }


  constructor( private listadoService:ListadoService,
    private router: Router,
    private activateRouter: ActivatedRoute ){}

    ngOnInit(): void {
      this.cargar();
    }

    agregar():void{
      this.listadoService.create(this.lis).subscribe(
        resp=>this.router.navigate(['/crud'])
      )
    }

    cargar():void{
      this.activateRouter.params.subscribe(
        resp=>{
          let id=resp['id'];
          if(id){
            this.listadoService.get(id).subscribe(
              d=>this.lis=d
            )
          }
        }
      )
    }

    //si bien actualiza, tambien reinicia si los campos estan en rojo o vacios antes de agregar nuevamente un dato
    actualizar():void{
      this.listadoService.update(this.lis).subscribe(
        resp=>this.router.navigate(['/crud'])
      )
      this.fechaLiberacionSelected = false;
     }







}
