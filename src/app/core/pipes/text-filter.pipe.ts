import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../utils';

@Pipe({
    name: 'textFilter',
    pure: false
})
export class TextFilterPipe implements PipeTransform {
    transform(items: any[], text: string): any {
        return Utils.filterArrayByString(items, text);
    }
}
