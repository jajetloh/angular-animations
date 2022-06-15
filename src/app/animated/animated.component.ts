import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
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
            transition('void => visible_forward', [
                style({ opacity: 0, transform: 'translateX(0px)', position: 'absolute', top: 0 }),
                animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(-123px)' })),
            ]),
            transition('void => visible_backward', [
                style({ opacity: 0, transform: 'translateX(-246px)', position: 'absolute', top: 0 }),
                animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(-123px)' })),
            ]),
            transition('visible_forward => hidden_forward, visible_backward => hidden_forward', [
                animate('400ms ease-out', style({ opacity: 0, transform: 'translateX(-123px)' })),
            ]),
            transition('visible_forward => hidden_backward, visible_backward => hidden_backward', [
                animate('400ms ease-out', style({ opacity: 0, transform: 'translateX(123px)' })),
            ]),
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedComponent {

    state: AnimationState = 'visible'
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

    animationDone(event: any) {
        if (event.fromState.split('_')[0] === 'visible' && event.toState.split('_')[0] === 'hidden') {
            this._show = false
        }
    }
}
