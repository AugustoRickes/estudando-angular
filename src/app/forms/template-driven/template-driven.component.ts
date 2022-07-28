import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hero: any = {
    name: "clark kent",
    nameHero: "super man",
    force: "super forca",
    age: 40
  }

  onSubmit(form: NgForm): void {
    console.log(this.hero);
    console.log(form.value);

  }
}
