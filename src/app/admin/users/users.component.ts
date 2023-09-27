import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User, UserControllerService} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {filterUser} from "../../../util/filter";
import {CreateUserDialogComponent} from "./dialogs/create-user-dialog/create-user-dialog.component";
import {EditUserDialogComponent} from "./dialogs/edit-user-dialog/edit-user-dialog.component";
import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {SnackbarService} from "../../../util/snackbar-handler";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
    users: User[] = [];
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phoneNumber', 'username', 'email', 'options'];
    dataSource = new MatTableDataSource<User>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,
                private userService: UserControllerService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    getAllUsers(): void {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users;
            this.dataSource.data = this.users;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchUser(inputPar: string) {
        if (inputPar) {
            this.dataSource.data = this.users.filter(user => filterUser(user, inputPar));
        } else {
            this.dataSource.data = this.users;
        }
    }

    openCreateUserDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        this.dialog.open(CreateUserDialogComponent, dialogConfig).afterClosed().subscribe(() => {
            this.getAllUsers();
        });
    }

    openEditUserDialog(user: User): void {
        const dialogConfig = this.dialog.open(EditUserDialogComponent, {
            width: '500px',
            data: user
        });
        dialogConfig.afterClosed().subscribe(() => {
            this.getAllUsers();
        });
    }

    openDeleteUserDialog(id: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
            backdropClass: 'background'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result === 'yes') {
                    this.userService.deleteUserById(id).subscribe(() => {
                        this.getAllUsers();
                        this.snackBarService.showSuccessSnackbar('Successfully deleted user');
                    });
                } else if (result === 'no') {
                    this.dialog.closeAll();
                }
            }
        });
    }
}
