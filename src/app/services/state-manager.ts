import { Injectable } from "@angular/core";

export type Listener = () => void;

export type State = {[key:string]:any}

export interface Action {
    type: string;
    payload?: any;
}

@Injectable()
export class StateManager {

    public listeners: Listener[] = [];

    private actions: {
        [key: string]: (state: State, payload?) => State
    }

    private state: State = {
        value: 10
    };

    constructor(){
        this.actions = {
            "increment": state => {
                const newState = { ...state };
                newState.value += 1;
                return newState;
            },
            "decrement": state => {
                const newState = { ...state };
                newState.value -= 1;
                return newState;
            }
        }
    }

    getState() {
        return {...this.state};
    }

    registerListener(listener: Listener): void {
        this.listeners = [...this.listeners, listener];
    }

    trigger(){
        this.listeners.forEach(l => l());
    }

    executeAction(action: Action) {
        this.state = this.actions[action.type](this.state, action.payload);
        this.trigger();
    }
    
}