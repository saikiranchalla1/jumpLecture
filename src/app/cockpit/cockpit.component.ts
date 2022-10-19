import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName =''
  newServerContent = ''


  // define custome event using eventemitter<>     ???????????
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log('add server')
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent

    })
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log('addblueprint')
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent

    })
  }
}
