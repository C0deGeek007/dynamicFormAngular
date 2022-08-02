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

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.mcqs().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.mcqs().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.mcqs()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.mcqForm?.value);
  }
}
