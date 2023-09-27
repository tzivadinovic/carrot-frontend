import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) {
    }

    showErrorSnackbar = (msg: string, action: string = 'Close', duration: number = 3000) => {
        const config = new MatSnackBarConfig();
        config.duration = duration;
        config.verticalPosition = 'bottom';
        config.panelClass = 'snackbar-container-error';
        this.snackbar.open(msg, action, config);
    };
    showSuccessSnackbar = (msg: string, action: string = 'Close', duration: number = 3000) => {
        const config = new MatSnackBarConfig();
        config.duration = duration;
        config.verticalPosition = 'bottom';
        config.panelClass = ['mat-snackbar-container'];
        this.snackbar.open(msg, action, config);
    };
}

interface TErrorResponse {
    code: number;
    message: string;
    exception: string;
    url: string;
}