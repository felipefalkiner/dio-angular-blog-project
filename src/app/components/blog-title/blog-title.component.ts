import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  templateUrl: './blog-title.component.html',
  styleUrls: ['./blog-title.component.css']
})
export class BlogTitleComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
