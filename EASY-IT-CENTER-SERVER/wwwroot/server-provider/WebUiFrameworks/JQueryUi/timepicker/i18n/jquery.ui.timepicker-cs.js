/* Czech initialisation for the timepicker plugin */
/* Written by David Spohr (spohr.david at gmail). */
jQuery(function($){
    $.timepickerbt.regional['cs'] = {
                hourText: 'Hodiny',
                minuteText: 'Minuty',
                amPmText: ['AM', 'PM'] ,
                closeButtonText: 'Zavřít',
                nowButtonText: 'Nyní',
                deselectButtonText: 'Odoznačit' }
    $.timepickerbt.setDefaults($.timepickerbt.regional['cs']);
});