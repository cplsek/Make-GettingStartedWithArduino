import five from 'johnny-five';

export default function fadeWhenHeld() {

    console.log('Push the button to see the light fade up and down...');

    //create standard 'led' and 'button' components
    const led_red = new five.Led(9);
    const button = new five.Button(7);

    const UP = 1;
    const DOWN = 0;
    let brightness = 0;
    let ledState = UP;


    //fade the LEDs when the button is held
    button.on('hold', function() {

        console.log("Button pushed...");
            if(ledState == UP){
                if(brightness >= 255) {
                    ledState = DOWN;
                    brightness = brightness - 15;
                    console.log("Max brightness reached - going down");
                }else{
                    brightness = brightness + 15;
                }
            }else if(ledState == DOWN){
                if(brightness <=0){
                    ledState = UP;
                    brightness = brightness + 15;
                    console.log("Max dimness reached - going up");
                }else{
                    brightness = brightness - 15;
                }
            }

        console.log("brightness = " + brightness);

            led_red.brightness(brightness);


    });

};