import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() photoCover:string = 'https://picsum.photos/850/350';
  @Input() cardTitle:string = 'Temporary Title';
  @Input() id:string|null = '1';
  

  constructor() { }

  ngOnInit(): void {
    this.setValueToContent(this.id)
  }

  setValueToContent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]

    this.photoCover = result.photoCover
    this.cardTitle = result.cardTitle

  }

}
