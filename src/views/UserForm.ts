import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.change-name': this.onChangeNameClick,
            'click:.save-model': this.onSaveClick,
        };
    }

    onSaveClick = (): void => {
        this.model.save();
    };

    onChangeNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    };

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class='change-name'>Click me</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save</button>
            </div>
        `;
    }
}
