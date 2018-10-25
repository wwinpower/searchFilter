import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
         <div class="row justify-content-center">
            <div class="col-6">
               <input type="text" class="form-control mb-4 mt-4" [(ngModel)]="searchCar">
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar:'desc'; let i = index">
                        <b>{{i+1}}</b> - {{car.name }} <i>{{car.desc }}</i>
                    </li>
                </ul>
             </div>
            </div>
        </div>
    `
})
export class AppComponent {
    searchCar = '';
    cars = [
        {name: 'BMW', desc: 'WinPower 1'},
        {name: 'Mercedes Benz', desc: 'WinPower 2'},
        {name: 'Bently', desc: 'WinPower 3'},
        {name: 'Audi', desc: 'WinPower 4'},
        {name: 'Jeep', desc: 'WinPower 5'},
        {name: 'Mazda', desc: 'WinPower 6'},
        {name: 'Vaz', desc: 'WinPower 7'}
    ]
}
