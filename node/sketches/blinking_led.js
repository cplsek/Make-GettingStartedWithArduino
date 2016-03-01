import five from 'johnny-five';

export default function blink() {

    console.log('Blink that board!');

    //create standard 'led' component
    const led = new five.Led(13);

    //blink the LED in 500ms on-off phase periods
    led.blink(500);

};

