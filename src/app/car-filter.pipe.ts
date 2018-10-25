import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'carFilter',
    pure: false
})
export class CarFilterPipe implements PipeTransform {

    transform(carList, searchStr: string, filedName: string) {
        if (carList.lenght === 0 || searchStr === '') {
            return carList;
        }

        return carList.filter(car => car[filedName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }

}
