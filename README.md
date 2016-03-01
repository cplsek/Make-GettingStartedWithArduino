# Make-GettingStartedWithArduino
This respository contains my implementations of the examples and projects from the book *Getting Started with Arduino: The Open Source Electronics Prototyping Platform, 3rd Edition* by Massimo Banzi and Michael Shiloh. These implementations may not match those in the book exactly as I tend to play around beyond the textbook example to actually learn the content.

In addition to versions of the projects created in the Arduino IDE, I also wanted to play with diagramming using [Fritzing](http://fritzing.org/home/) and JavaScript implementations using [Johnny-Five](http://johnny-five.io/).

The book is [available for purchase on Amazon](http://www.amazon.com/Getting-Started-Arduino-Electronics-Prototyping/dp/1449363334). To implement the examples in the book, I used oddWires' [Ultimate Kit with Arduino Uno](http://www.oddwires.com/the-ultimate-arduino-kit/), which is an awesome deal for newbies. 

## Project Files
In the repository, you'll find the following areas:
* arduinoIDE - contain the project implementations that will most closely match those in the book - they are all created using the [Arduino IDE](https://www.arduino.cc/en/Main/Software)
* diagrams - prototype diagrams for each of the project implementations using the [Fritzing](http://fritzing.org/home/) application
* node - contain the project implementations using JavaScript (ES6) and [Johnny-Five](http://johnny-five.io/)
  * Note: The NodeJS examples run through an ExpressJS server that sets up the board and executes the example accessed via the URLs specified in the routing. Once an example is run, the NodeJS server must be restarted to switch to another example - this is because there is no way to terminate things with the Arduino.

## Corresponding Book Examples
* blinking_led: Figure 4-1, Example 4-1
* push_led: Figure 4-5, Example 4-2, Example 4-3, Example 4-4, Example 4-5
* fade_led: Figure 5-4, Example 5-1, Example 5-2
* ldr_led: Figure 5-6, Example 5-3, Example 5-4, Example 5-5

