import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onButtonClick(input: HTMLInputElement) {
        console.log('input', input);
        console.log('value', input.value);
    }
}
