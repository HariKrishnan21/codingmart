import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';import { District } from './district.model';
'@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'districtSearch';
  form = new FormGroup({
    districtName : new FormControl('',Validators.required),
    area : new FormControl('',Validators.required),
    population: new FormControl('',Validators.required)
  });
  data: District[] = [];
  maxArea = 0;
  maxPopulation = 0;
  onSubmit(){
    //console.log(this.form.value);
    var dist=this.form.value;
    var district={districtName:dist.districtName,area:dist.area,population:dist.population};
    this.data.push(district);
    this.calculateMaxArea();
    this.calculateMaxPopulation();
    console.log(this.data);
    
  }
  calculateMaxArea(){
      this.data.forEach(element =>{
            if(element.area > this.maxArea){
              this.maxArea=element.area;
            }
      });
      console.log(this.maxArea);
      
  }
  calculateMaxPopulation(){
    this.data.forEach(element =>{
      if(element.population > this.maxPopulation){
        this.maxPopulation=element.population;
      }
});
console.log(this.maxPopulation);
  }
}
