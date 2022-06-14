import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { animate, style, transition, trigger } from "@angular/animations"

// Based on: https://www.usefuldev.com/post/Angular:%20using%20animations%20with%20NgIf

export type AnimationState = 'visible' | 'hidden'
export type AnimationDirection = 'forward' | 'backward'

@Component({
    selector: 'app-animated',
    templateUrl: './animated.component.html',
    styleUrls: ['./animated.component.css'],
    animations: [
        trigger('state', [
            // state('visible_forward, visible_backward',
            //     style({ opacity: 1 })
            // ),
            // state('hidden_forward, hidden_backward',
            //     style({ opacity: 0 })
            // ),
            // transition('void => visible', [
            //     style({ opacity: 0 }),
            //     animate('400ms ease-out', style({ opacity: 1 })),
            // ]),
            // transition('visible => hidden', [
            //     animate('400ms ease-out', style({ opacity: 0 })),
            // ]),
            transition('void => visible_forward', [
                style({ opacity: 0, transform: 'translateX(100px)', position: 'absolute', top: 0, "transform-origin": "center center" }),
                animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(-123px)', "transform-origin": "center center" })),
            ]),
            transition('void => visible_backward', [
                style({ opacity: 0, transform: 'translateX(-100px)', position: 'absolute', top: 0, "transform-origin": "center center" }),
                animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(123px)', "transform-origin": "center center" })),
            ]),
            transition('visible_forward => hidden_forward, visible_backward => hidden_forward', [
                animate('400ms ease-out', style({ opacity: 0, transform: 'translateX(-223px)' })),
            ]),
            transition('visible_forward => hidden_backward, visible_backward => hidden_backward', [
                animate('400ms ease-out', style({ opacity: 0, transform: 'translateX(223px)' })),
            ]),
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedComponent {

    state: AnimationState = 'visible'
    // @Input() direction: AnimationDirection = 'forward'
    private _show: boolean = false
    @Input() direction: AnimationDirection = 'forward'
    get show() {
        return this._show
    }
    @Input() set show(value: boolean) {
        if (value) {
            this._show = value
            this.state = 'visible'
        } else {
            this.state = 'hidden'
        }
    }

    // get direction() {
    //     return this._direction
    // }
    //
    // @Input() set direction(value: AnimationDirection) {
    //
    // }

    animationDone(event: any) {
        if (event.fromState.split('_')[0] === 'visible' && event.toState.split('_')[0] === 'hidden') {
            this._show = false
        }
    }
}
