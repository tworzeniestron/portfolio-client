import {
    trigger,
    transition,
    style,
    query,
    animate,
    group
} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ], { optional: true }),
            query(':leave', [
            animate('200ms ease-out', style({ opacity: 0 }))
            ], { optional: true })
        ])
    ])
]);