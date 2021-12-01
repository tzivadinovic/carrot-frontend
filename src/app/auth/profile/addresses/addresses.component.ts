import {Component, OnInit} from '@angular/core';
import {MockData} from "../../../../@types/MockData";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-addresses',
    templateUrl: './addresses.component.html',
    styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

    dt: MockData[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
    ];

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<MockData>(this.dt);


    constructor() {
    }

    ngOnInit(): void {
    }

}
