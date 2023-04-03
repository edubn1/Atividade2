import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  form: FormGroup
  imc : number
  tipo: string
  

  constructor(private routeActive : ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      peso : new FormControl('',[Validators.required,Validators.min(1),Validators.max(500)]),
      altura: new FormControl('',[Validators.required,Validators.min(0.01),Validators.max(4)]),
      
    });
     

  }

  calcular(){
    this.imc=(   this.form.value.peso / (this.form.value.altura * this.form.value.altura)   )
    if(this.imc<=18.5)
    {
      this.tipo='Abaixo do peso normal'
    }
    if(this.imc>18.5 && this.imc<=24.9)
    {
      this.tipo='Peso normal'
    }
    if(this.imc>=25 && this.imc<=29.9)
    {
      this.tipo='Obesidade'
    }
    if(this.imc>=30 && this.imc<=34.9)
    {
      this.tipo='Obesidade 1'
    }
    if(this.imc>=35 && this.imc<=39.9)
    {
      this.tipo='Obesidade 2'
    }
    if(this.imc>=40)
    {
      this.tipo='Obesidade 3 '
    }
  }

}
