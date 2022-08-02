import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Form, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private fb:FormBuilder){}

  title = 'dynamicForm';



  mcqsForm=this.fb.group({
    mcqs:this.fb.array([])
  })

  addFormGroup() {
    const profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  get mcqs() {
    return this.mcqsForm.get('mcqs') as FormArray;
  }


  addMcq() {
    const profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
    this.mcqs.push(profileForm);
  }

  onSubmit() {
    console.log(this.mcqsForm);
    console.log(this.mcqsForm.controls['mcqs'].value);
  }

  mcqFn(mcq:any) {
    console.log(mcq);
  }

  mcqsFn(mcqs:any) {
    console.log("Array of queations i.e mcqs");
    console.log(mcqs);
  }

}
