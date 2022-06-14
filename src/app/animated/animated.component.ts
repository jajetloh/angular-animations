import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from "@angular/animations"

export type AnimationState = 'visible' | 'hidden'

@Component({
    selector: 'app-animated',
    templateUrl: './animated.component.html',
    styleUrls: ['./animated.component.css'],
    animations: [
        trigger('state', [
            state('visible',
                style({ opacity: 1 })
            ),
            state('hidden',
                style({ opacity: 0 })
            ),
            transition('* => visible', [
                animate('500ms ease-out')
            ]),
            transition('visible => hidden', [
                animate('500ms ease-out')
            ]),
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedComponent {

    state: AnimationState = 'visible'
    private _show: boolean = true
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
        if (event.fromState === 'visible' && event.toState === 'hidden') {
            this._show = false
        }
    }
}
