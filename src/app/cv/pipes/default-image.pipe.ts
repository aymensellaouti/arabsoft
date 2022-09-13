import { Pipe, PipeTransform } from '@angular/core';
import { MES_CONSTANTES } from '../../config/constantes.config';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (!path.trim().length) {
      return MES_CONSTANTES.defaultImage;
    }
    return path;
  }
}
