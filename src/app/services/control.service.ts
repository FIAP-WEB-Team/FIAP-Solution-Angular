import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ControlService {
    private formPosition = new BehaviorSubject<number>(0)

    getFormPosition() {
        return this.formPosition.asObservable()
    }

    updateFormPosition(newPosition: number) {
        this.formPosition.next(newPosition)
    }
}