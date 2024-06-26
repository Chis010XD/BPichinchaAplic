import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Registro } from 'src/app/interfaces/PListado.interfaces';
import { ListadoService } from '../../services/listado.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>CRUD works!</p>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CRUDComponent {

  Lista:Registro[]=[]
  constructor(private listadoService: ListadoService){}


  ngOnInit(): void {
    this.listadoService.getAll().subscribe(
      e=>this.Lista=e
    )
  }

  eliminar(pacien:Registro):void{
    this.listadoService.delete(pacien.id!).subscribe(
      resp=>this.listadoService.getAll().subscribe(
        b=>this.Lista=b
      )
    )

  }
}
