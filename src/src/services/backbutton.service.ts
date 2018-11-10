import { Injectable } from "@angular/core";
import { Globals } from "../../app/app.config";

@Injectable()
export class BackbuttonService {
    pageNumberStack = [];
    pageStack = [];
    constructor() {
    }

    pushPage(pageName: string, navCtrl: any) {

        if(navCtrl){
            Globals.navCtrls[pageName] = navCtrl;
            this.pageStack.push(pageName);
            console.log(Globals);
        }

        // if (navCtrl)
        //     Globals.navCtrls[pageNumber] = navCtrl;
        // Globals.tabIndex = pageNumber;

        // let indexOfPageNumber = this.pageNumberStack.indexOf(pageNumber);
        // console.log("pageNumber: " + JSON.stringify(pageNumber));
        // console.log("indexOfPageNumber: " + JSON.stringify(indexOfPageNumber));
        // if (indexOfPageNumber >= 0) {
        //     this.pageNumberStack.splice(indexOfPageNumber, 1);
        // }
        // console.log("Before this.pageNumberStack: " + JSON.stringify(this.pageNumberStack));
        // this.pageNumberStack.push(pageNumber);
        // console.log("After this.pageNumberStack: " + JSON.stringify(this.pageNumberStack));
    }

    popPage() {
        return this.pageStack.pop();
        // if (this.pageNumberStack.length > 0)
        //     this.pageNumberStack.pop();

        // console.log("After pop this.pageNumberStack: " + JSON.stringify(this.pageNumberStack));
        // if (this.pageNumberStack.length > 0)
        //     return this.pageNumberStack[this.pageNumberStack.length - 1];
        // else {
        //     // Always leave 0 in the stack
        //     this.pageNumberStack.push(0);
        //     return -1;
        // }
    }
}