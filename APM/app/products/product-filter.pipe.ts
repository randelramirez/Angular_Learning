import { PipeTransform, Pipe } from '@angular/core'

import { IProduct } from './product'

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {


    transform(value: IProduct[], ...args: string[]): IProduct[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }

    // transform(value: IProduct[], ...args: string[]): IProduct[] {
    //     let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    //     return filter ? value.filter(function (product) {
    //        return product.productName.toLocaleLowerCase().indexOf(filter) !== -1
    //     }) : value

    // }

    // transform(value: IProduct[], ...args: string[]): IProduct[] {
    //     let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    //     return filter ? value.filter((product: IProduct) => { return this.callbackFilter(product, filter) }) : value;
    // }

    //same as the above, just removed the scope/body/block for the arrow function, automatically uses return in the compiled JS
    // transform(value: IProduct[], ...args: string[]): IProduct[] {
    //     let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    //     return filter ? value.filter((product: IProduct) => this.callbackFilter(product, filter)) : value;
    // }

    // callbackFilter(product: IProduct, filter: string): boolean {
    //     return product.productName.toLocaleLowerCase().indexOf(filter) !== -1
    // };

    // note: In TS, arrow functions with body e.g. () => {}; does not automatically return
    // in comparison with this () => true === true, it actully becomes return true === true;
}
