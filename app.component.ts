import {Component, OnInit} from '@angular/core';
import { Client } from './models/client';
import { Server } from './models/servers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'QC';

  constructor() {}

  diffBits = [];

  ngOnInit(): void {
    const server = new Server(this.randomString(40));
    console.log(server.bits);

    server.randomOrientations(server.bits);
    console.log(server.orientations);

    server.createDirections(server.orientations);
    console.log(server.directions);

    const client = new Client();
    console.log(client.generateOrientationFromDirection(server.directions));

    client.generateBitsFromOrientation(client.orientations);
    console.log(server.bits, client.bits);


    for (let i = 0; i < server.bits.length; i++) {
      if (server.bits[i] === client.bits[i]) {
        this.diffBits.push(server.bits[i]);
      }
    }

    console.log(this.diffBits);

  }


  randomString(nr: number) {
    const rb = [];
    for (let i = 0; i < nr; i++) {
      const a = this.randomBit();
      rb.push(a);
    }
    return rb;
  }

  randomBit() {
    return Math.random() > 0.5 ? 1 : 0;
  }

}
