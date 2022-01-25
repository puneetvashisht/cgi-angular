import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-badge',
    template: `
    <button type="button" (click)="incrementCount()" class="btn btn-primary">
        {{caption}} <span class="badge bg-secondary">{{count}}</span>
    </button>
    `
})

export class BadgeComponent{
    count: number = 0;
    @Input('caption') caption : string = "Votes"
    incrementCount(){
        console.log('button clicked..')
        this.count++;
    }
}