import {CurrentUserEffects} from './current-user.effects';
import {RouterEffects} from './router.effects';

export const effects: any[] = [CurrentUserEffects, RouterEffects];

export * from './current-user.effects';
export * from './router.effects';
