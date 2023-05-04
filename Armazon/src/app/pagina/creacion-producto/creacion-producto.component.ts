import { Component } from '@angular/core';
import { PublicacionProductoDTO } from 'src/app/modelo/publicacion-producto-dto';

@Component({
  selector: 'app-creacion-producto',
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css']
})
export class CreacionProductoComponent {
  archivos!:FileList;

  producto: PublicacionProductoDTO;
  constructor() {
    this.producto = new PublicacionProductoDTO();
  }

  categorias: string[] = [];
  constructorCat() {
    this.categorias = [];
  }
  ngOnInit(): void {
    this.categorias.push('Tecnología');
    this.categorias.push('Hogar');
    this.categorias.push('Deportes');
    this.categorias.push('Moda');
    this.categorias.push('Mascotas');
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }

  public crearProducto(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.producto);
    }else{
    console.log('Debe seleccionar al menos una imagen');
    }
    }
}
