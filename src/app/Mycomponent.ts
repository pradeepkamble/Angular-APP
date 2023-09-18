import { Component } from "@angular/core";

@Component({  
    selector: 'my-comp',
    templateUrl: './Mycomponent.html',
    styleUrls: ['./Mycomponent.css']   
})

export class Mycomponent {
    result: number= 0;

    add(first: string,second: string)
    {
         this.result = parseInt(first) +  parseInt(second);
    }
    mul(first: string,second: string)
    {
        this.result = parseInt(first) *  parseInt(second);

    }
    sub(first: string,second: string)
    {
        this.result = parseInt(first) -  parseInt(second);

    }
    div(first: string,second: string)
    {
        this.result = parseInt(first) /  parseInt(second);

    }
}
