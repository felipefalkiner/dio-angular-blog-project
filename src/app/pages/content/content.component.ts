import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() photoCover:string = 'https://picsum.photos/850/350';
  @Input() cardTitle:string = 'Temporary Title';
  @Input() cardText:string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ipsa nostrum esse assumenda quidem maxime, sed ut unde adipisci veniam labore modi ullam sunt tempore nemo voluptates accusantium? Vitae, hic!';
  private id:string|null = '0';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      value => this.id = value.get("id")
    )
    
    this.setValueToContent(this.id)
  }

  setValueToContent(id:string){
    const result = dataFake.filter(article => article.id === id)

    result.

  //   if(!result){
  //     this.cardTitle = result.title
  //   }
  }

}
