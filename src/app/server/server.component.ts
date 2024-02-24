import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId: number = 98;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5? 'online' : 'offline';
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}