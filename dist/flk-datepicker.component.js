class Datepicker {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.name = 'datepicker';
        this.input = null;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.label = this.inputs.getOption('label');
        this.onSelect = this.inputs.getEvent('select');
        this.format = this.inputs.getOption('format', Config.get('form.datepicker.format', 'DD/MM/YYYY'));
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    datepicker(input) {
        if (input.hasDatepicker) return;

        input.hasDatepicker = true;

        options = {
            field: input,
            isRTL: Config.get('app.direction') == 'rtl',
            onSelect: this.onSelect,
            format: this.format,
            onOpen: e => {
                if (this.minDate) {
                    this.datePicker.setMinDate(this.minDate)
                }
            },
        };

        this.datePicker = new Pikaday(options);
    }
}