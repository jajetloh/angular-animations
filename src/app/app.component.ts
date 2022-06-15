import { Component } from '@angular/core'
import { AnimationDirection } from "./animated/animated.component"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    currentTextIndex = 0
    goingForward: AnimationDirection = 'forward'
    textList = [
        'First thing',
        'Second thing',
        'Third thing',
        'Fourth thing',
        'Fifth thing',
        'Sixth thing',
        'Seventh thing',
    ]

    constructor() {
    }
    toggleText(forward: boolean) {
        this.goingForward = forward ? 'forward' : 'backward'
        this.currentTextIndex = modulo(this.currentTextIndex + (forward ? 1 : -1), this.textList.length)
    }
}

function modulo(n: number, divisor: number) {
    return ((n % divisor) + divisor) % divisor
}
