import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  time: string = 'Time:';

  constructor() {
    setInterval(() => {
      const cDate = new Date();
      const time = [
        cDate.getHours(),
        cDate.getMinutes(),
        cDate.getSeconds(),
      ].map(part => part < 10 ? `0${part}` : part);
      this.time = `Time now: ${time.join(':')}`;
    }, 1000);
  }

  ngOnInit(): void {
  }

}
