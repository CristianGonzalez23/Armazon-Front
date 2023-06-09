import { ProductoDTO } from './producto-dto';

export class PublicacionProductoDTO {
  precio: number = 0;
  unidades: number = 0;

  descripcion: string = '';
  codigoVendedor: number = 0;
  codigoProducto: number = 0;

  productoDTO: ProductoDTO = new ProductoDTO(
    'nombre',
    ['imagen1'],
    ['categoria1'],
    ['ciudad1']
  );

  comentarioDTO: any[] = [];

}
