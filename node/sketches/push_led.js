import five from 'johnny-five';

export default function onWhenPushed() {

    console.log('Push the button to see the light change...');

    //create standard 'led' and 'button' components
    const led = new five.Led(13);
    const button = new five.Button(7);

    //turn the LED on when the button is pushed
    button.on('press', function() {
        led.toggle();
    });

};