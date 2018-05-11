import { Injectable } from "@angular/core";

export type Listener = () => void;
export type Unlistener = () => void;

export enum ActionType {
    Increment = "increment",
    Decrement = "decrement"
}

export interface Action {
    type: ActionType,
    payload?: any
}

export type State = { [key: string]: any }

@Injectable()
export class StateManager {

    private listeners: Listener[] = [];

    private actions: {
        [key: string]: (state: State, payload) => State
    }

    private state: State = {
        value: 10
    };

    constructor() {
        console.log("I've been made");
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

    executeAction(action: Action) {
        this.state = this.actions[action.type](this.state, action.payload);
        this.trigger();
    }

    getState() {
        return this.state;
    }

    registerListener(listener: Listener): Unlistener {
        this.listeners = [...this.listeners, listener];
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        }
    }

    private trigger() {
        this.listeners.forEach(l => l());
    }

}