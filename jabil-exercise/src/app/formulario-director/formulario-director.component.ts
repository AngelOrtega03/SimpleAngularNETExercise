import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { DirectorService } from '../director.service';
import { Director, DirectorCreacion } from '../director.models';

@Component({
  selector: 'app-formulario-director',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatOptionModule],
  templateUrl: './formulario-director.component.html',
  styleUrl: './formulario-director.component.css'
})
export class FormularioDirectorComponent implements OnInit {
  
  private readonly formBuilder = inject(FormBuilder);
  
  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: Director;

  @Output()
  posteoFormulario = new EventEmitter<DirectorCreacion>();

  form = this.formBuilder.group({
    name: [''],
    age: [0],
    active: [false]
  })

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    if (this.form.valid) {

      const raw = this.form.value;

      const director = {
        Name: String(raw.name),
        Age: Number(raw.age),
        Active: (String(raw.active) === 'true') ? true : false 
      }

      this.posteoFormulario.emit(director);
    }
  }
}
