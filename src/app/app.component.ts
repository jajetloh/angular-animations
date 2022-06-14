import { Component } from '@angular/core'
import { animate, state, style, transition, trigger } from "@angular/animations"
import { AnimationDirection } from "./animated/animated.component"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        // trigger('toggleText', [
        //     transition('void => forward', [
        //         style({ opacity: 0, transform: 'translateX(100%)' }),
        //         animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
        //     ]),
        //     transition('forward => void', [
        //         animate('0.5s', style({ opacity: 0, transform: 'translateX(-100%)' }))
        //     ]),
        //     transition('void => backward', [
        //         style({ opacity: 0, transform: 'translateX(-100%)' }),
        //         animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
        //     ]),
        //     transition('backward => void', [
        //         animate('0.5s', style({ opacity: 0, transform: 'translateX(100%)' }))
        //     ])
        // ])
    ],
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
