import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ISchool {
  desc: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  public signupForm!: FormGroup;
  checklist: any;
  masterSelected = false;
  public sch: ISchool[] = [];

  checkUncheckAll(evt: any) {
    this.checklist.forEach((c: any) => (c.isSelected = evt.target.checked));
  }

  isAllSelected(evt: any, index: number) {
    this.checklist[index].isSelected = evt.target.checked;
    this.masterSelected = this.checklist.every(
      (item: any) => item.isSelected == true
    );
  }

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.checklist = [
      { id: 1, value: 'Общение', isSelected: false },
      { id: 2, value: 'Вождение', isSelected: false },
      { id: 3, value: 'Иностранные языки', isSelected: false },
      { id: 4, value: 'Программирование', isSelected: false },
      { id: 5, value: 'Бег с припятсвиями', isSelected: false },
      { id: 6, value: 'Управление вертолетом', isSelected: false },
      { id: 7, value: 'Быстрое чтение', isSelected: false },
      { id: 8, value: 'Оперное пение', isSelected: false },
      { id: 9, value: 'Самозащита', isSelected: false },
    ];
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      family: ['', Validators.required],
      check: [''],
      school: [''],
      borning: [''],
    });
  }

  sendForm() {
    this.signupForm.reset();
  }
  addSchool() {
    this.sch.push({
      desc: this.signupForm.value.item,
    });
    console.log(this.sch);
  }
  deleteSchool(i: number) {
    this.sch.splice(i, 1);
    console.log(this.sch);
  }
}
