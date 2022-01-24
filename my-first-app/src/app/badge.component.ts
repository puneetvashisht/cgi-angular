import { Component } from "@angular/core";

@Component({
    selector: 'app-badge',
    template: `
    <button type="button" (click)="incrementCount()" class="btn btn-primary">
        Votes <span class="badge bg-secondary">{{count}}</span>
    </button>
    `
})

export class BadgeComponent{
    count: number = 10;

    incrementCount(){
        console.log('button clicked..')
        this.count++;
    }
}