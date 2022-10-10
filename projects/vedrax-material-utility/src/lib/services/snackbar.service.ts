import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private snackBar: MatSnackBar,
        private configService:ConfigService) { }

    open(message: string): void {
        if (message) {
            this.snackBar.open(message, 'X', {
                duration: 2000,
                horizontalPosition: this.configService.getHorizontalPosition(),
                verticalPosition: this.configService.getVerticalPosition()
            });
        }
    }

    showError(message: string): void {
        if (message) {
            this.snackBar.open(message, 'X', {
                duration: 2000,
                horizontalPosition: this.configService.getHorizontalPosition(),
                verticalPosition: this.configService.getVerticalPosition(),
                panelClass: ['error']
            });
        }
    }

}