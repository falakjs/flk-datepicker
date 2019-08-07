# Datepicker inputs

A component for datepickers for Falak JS framework. 

# Installation
`flk install flk-datepicker`

# Usage

`hello-world.component.html`

```html
<flk-datepicker name="startDate" [value]="this.myData" label="Starting date"></flk-datepicker>
```

# Attributes

## format

**name**: `[format]`

**default**: `DD/MM/YYYY`.

**Configuration key**: `form.datepicker.format`.

Set the format of the input.

> Please make sure to set a proper format according to [momentjs](https://momentjs.com/) formats formula.

# Events

**name**: `select`

Triggered when user selects a date.

# Missing attributes

Any input attribute/event could be applied here, such as `name`, `value` and so on. 

