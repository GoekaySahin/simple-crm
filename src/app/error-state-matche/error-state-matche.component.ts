import { Component } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { NgIf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  /**
   * This function controlls the input if it is a correct email form
   *
   * @param control json
   * @param form json
   * @returns
   */
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-error-state-matche",
  templateUrl: "./error-state-matche.component.html",
  styleUrls: ["./error-state-matche.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class ErrorStateMatcheComponent {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
