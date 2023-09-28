import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Address, AddressControllerService} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../util/snackbar-handler";
import {filterAddress} from "../../../util/filter";
import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateAdminAddressesComponent} from "./dialogs/create-admin-addresses/create-admin-addresses.component";
import {EditAdminAddressesComponent} from "./dialogs/edit-admin-addresses/edit-admin-addresses.component";

@Component({
    selector: 'app-admin-addresses',
    templateUrl: './admin-addresses.component.html',
    styleUrls: ['./admin-addresses.component.css']
})
export class AdminAddressesComponent implements OnInit, AfterViewInit {
    addresses: Address[] = [];
    displayedColumns: string[] = ['id', 'user', 'street', 'number', 'country', 'city', 'municipality', 'options'];
    dataSource = new MatTableDataSource<Address>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,
                private addressService: AddressControllerService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllAddresses();
    }

    getAllAddresses(): void {
        this.addressService.getAllAddresses().subscribe(addresses => {
            this.addresses = addresses;
            this.dataSource.data = this.addresses;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchAddress(inputPar: string) {
        if (inputPar) {
            this.dataSource.data = this.addresses.filter(address => filterAddress(address, inputPar));
        } else {
            this.dataSource.data = this.addresses;
        }
    }

    openCreateAddressDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        this.dialog.open(CreateAdminAddressesComponent, dialogConfig).afterClosed().subscribe(() => {
            this.getAllAddresses();
        });
    }

    openEditAddressDialog(address: Address): void {
        const dialogConfig = this.dialog.open(EditAdminAddressesComponent, {
            width: '500px',
            data: address
        });
        dialogConfig.afterClosed().subscribe(() => {
            this.getAllAddresses();
        });
    }

    openDeleteAddressDialog(id: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
            backdropClass: 'background'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result === 'yes') {
                    this.addressService.deleteAddressById(id).subscribe(() => {
                        this.getAllAddresses();
                        this.snackBarService.showSuccessSnackbar('Successfully deleted address');
                    });
                } else if (result === 'no') {
                    this.dialog.closeAll();
                }
            }
        });
    }
}
