import { Injectable } from "@angular/core";

@Injectable()
export class StateManager {
    public state = {
        value: 10
    };


    constructor() {
        console.log("I've been made");
    }

    getState() {
        return this.state;
    }


}