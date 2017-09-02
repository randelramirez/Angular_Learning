import { Component, OnChanges, SimpleChanges, Input, 
    Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {

    // get data from parent container using Input decorator
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 86 / 5;
        console.log('changes',changes);
    }

    onClick(): void {

        // if you want to to pass data from this nested component back to the container, use event emitter
         this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

}