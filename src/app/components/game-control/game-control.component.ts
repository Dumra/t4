import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

    constructor() {
    }

    counter: number;
    intervalReference: any;
    gameIsRunning;
    continueOrPauseLabel: String;
    @Output() counterEmitter = new EventEmitter<number>();
    @Output() unsetCounter = new EventEmitter<boolean>();

    ngOnInit() {
        this.counter = 0;
        this.gameIsRunning = false;
        this.continueOrPauseLabel = 'Pause Game';
    }

    startGame() {
        this.gameIsRunning = true;
        this.intervalReference = setInterval(() => {
            this.counterEmitter.emit(++this.counter);
        }, 1000);
    }

    pauseGame() {
        this.gameIsRunning = !this.gameIsRunning;
        this.clearCurrentInterval();
    }

    stopGame() {
        this.gameIsRunning = false;
        this.clearCurrentInterval();
        this.counter = 0;
        this.unsetCounter.emit(false);
    }

    clearCurrentInterval() {
        if (this.intervalReference) {
            clearInterval(this.intervalReference);
        }
    }

}
