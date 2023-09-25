import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() photoCover:string = 'https://picsum.photos/850/350';
  @Input() cardTitle:string = 'Temporary Title';
  @Input() cardText:string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ipsa nostrum esse assumenda quidem maxime, sed ut unde adipisci veniam labore modi ullam sunt tempore nemo voluptates accusantium? Vitae, hic!';

  constructor() { }

  ngOnInit(): void {
  }

}
