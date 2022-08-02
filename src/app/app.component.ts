import { Component, VERSION } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mcqForm?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.mcqForm = this.fb.group({
      mcqs: this.fb.array([])
    });
  }

  mcqs(): FormArray {
    return this.mcqForm?.get('mcqs') as FormArray;
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      question:'',
      options: this.fb.array([
        this.fb.group({
          option: '',
          iscorrect: ''
        }),
        this.fb.group({
          option: '',
          iscorrect: ''
        }),
        this.fb.group({
          option: '',
          iscorrect: ''
        }),
        this.fb.group({
          option: '',
          iscorrect: ''
        }),
      ])
    });
  }

  addEmployee() {
    this.mcqs().push(this.newQuestion());
  }

  // removeEmployee(empIndex: number) {
  //   this.mcqs().removeAt(empIndex);
  // }

  questionOptions(mcqIndex: number): FormArray {
    return this.mcqs()
      .at(mcqIndex)
      .get('options') as FormArray;
  }

  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skill: '',
  //     exp: ''
  //   });
  // }

  // addEmployeeSkill(mcqIndex: number) {
  //   this.questionOptions(mcqIndex).push(this.newSkill());
  // }

  removeEmployeeSkill(mcqIndex: number, skillIndex: number) {
    this.questionOptions(mcqIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.mcqForm?.value);
  }
}
