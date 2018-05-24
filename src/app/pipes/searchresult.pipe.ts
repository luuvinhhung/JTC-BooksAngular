import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../models/IBook';

@Pipe({
    name: 'search'
})

export class SearchResultPipe implements PipeTransform {
    transform(products: IBook[], ...args: any[]): any {
        const keyword = args[0];
        return products.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
    }
}
