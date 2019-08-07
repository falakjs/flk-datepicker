const Component = require(COMPONENT_CLASS_PATH);

class DatepickerComponent extends Component {}

module.exports = {
    selector: 'flk-datepicker',
    isChild: false,
    handler: DatepickerComponent,
    isUnique: false,
    component: 'Datepicker',
    htmlFile: __dirname + '/../../flk-datepicker.component.html',
};