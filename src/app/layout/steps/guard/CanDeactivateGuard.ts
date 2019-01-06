import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {StepsComponent} from '../steps.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<StepsComponent> {

    canDeactivate(component: StepsComponent): boolean {
        if (component.hasUnsavedData()) {
            if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }
}
