import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
  onServerAdded(serverData:{serverName:string, serverContent:string}){
      this.serverElements.push({
        type:'server',
        name: serverData.serverName,
        content:serverData.serverContent
      })
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
      this.serverElements.push({
        type:'blueprint',
        name:blueprintData.serverName,
        content:blueprintData.serverContent
      })
  }

}
