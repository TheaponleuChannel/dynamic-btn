# dynamic-btn

A lightweight, dynamic Angular button component library.

## Installation

```bash
npm install dynamic-btn
```

## Requirements

| Dependency | Version |
|---|---|
| Angular | >= 17.0.0 |
| Node.js | >= 18.0.0 |

---

## Usage

### 1. Import the Component

#### Standalone Component (Recommended)
```ts
import { Component } from '@angular/core';
import { DynamicBtnComponent } from 'dynamic-btn';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicBtnComponent],
  template: `
    <dynamic-btn (clicked)="handleClick()">Click Me</dynamic-btn>
  `
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

#### NgModule-based App
```ts
import { NgModule } from '@angular/core';
import { DynamicBtnModule } from 'dynamic-btn';

@NgModule({
  imports: [DynamicBtnModule],
})
export class AppModule {}
```

---

### 2. Basic Examples

#### Default Button
```html
<dynamic-btn>Click Me</dynamic-btn>
```

#### Primary Button
```html
<dynamic-btn variant="primary" (clicked)="onSubmit()">
  Submit
</dynamic-btn>
```

#### Secondary Button
```html
<dynamic-btn variant="secondary" (clicked)="onCancel()">
  Cancel
</dynamic-btn>
```

#### Disabled Button
```html
<dynamic-btn [disabled]="true">Unavailable</dynamic-btn>
```

#### Dynamic Disabled State
```html
<dynamic-btn [disabled]="isLoading" (clicked)="save()">
  {{ isLoading ? 'Saving...' : 'Save' }}
</dynamic-btn>
```

---

### 3. Using the Service

The library includes `DynamicBtnService` for programmatic control:

```ts
import { Component } from '@angular/core';
import { DynamicBtnService } from 'dynamic-btn';

@Component({ ... })
export class AppComponent {
  constructor(private btnService: DynamicBtnService) {}

  triggerAction() {
    this.btnService.doSomething();
  }
}
```

---

## API Reference

### `DynamicBtnComponent`

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style of the button |
| `disabled` | `boolean` | `false` | Disables the button |

| Output | Type | Description |
|---|---|---|
| `clicked` | `EventEmitter<MouseEvent>` | Emitted when the button is clicked |

### Selector
```html
<dynamic-btn></dynamic-btn>
```

---

## Example: Form Submit Button

```ts
@Component({
  standalone: true,
  imports: [DynamicBtnComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="email" type="email" placeholder="Email" />

      <dynamic-btn
        variant="primary"
        [disabled]="form.invalid || isSubmitting"
        (clicked)="submit()">
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </dynamic-btn>
    </form>
  `
})
export class FormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  isSubmitting = false;

  submit() {
    if (this.form.valid) {
      this.isSubmitting = true;
      // your logic here
    }
  }
}
```

---

## Versioning

This library follows [Semantic Versioning](https://semver.org/):

- `patch` — bug fixes
- `minor` — new features (backward compatible)
- `major` — breaking changes

---

## Contributing

1. Clone the repo
2. Install dependencies: `npm install`
3. Build the library: `ng build dynamic-btn`
4. Test locally: `npm pack` then install the `.tgz` in a test project

---

## License

MIT © Ecoinsoft