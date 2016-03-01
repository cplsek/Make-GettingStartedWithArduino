import five from 'johnny-five';

export default function adjustToLight() {

    // create standard 'led' component
    const led_red = new five.Led(9);

    // create standard analog sensor component
    // emits data every <freq> ms and emits change events only when value change exceeds <threshold>
    const ldr = new five.Sensor({
        pin: 'A0',
        freq: 250,
        threshold: 5
    });

    let brightness = 0;

    // scale the sensor's data from 0-1023 to 0-255 and set led brightness accordingly
    ldr.scale(0,255).on('change', function(){
        led_red.brightness(255-this.value);
    });

};