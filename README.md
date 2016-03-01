# Make-GettingStartedWithArduino
This respository contains my implementations of the examples and projects from the book [*Getting Started with Arduino: The Open Source Electronics Prototyping Platform, 3rd Edition* by Massimo Banzi and Michael Shiloh](http://www.amazon.com/Getting-Started-Arduino-Electronics-Prototyping/dp/1449363334). These implementations may not match those in the book exactly as I tend to play around beyond the textbook example to actually learn the content.

In addition to versions of the projects created in the Arduino IDE, I also wanted to play with diagramming using [Fritzing](http://fritzing.org/home/) and JavaScript implementations using [Johnny-Five](http://johnny-five.io/).


## Project Files
In the repository, you'll find the following areas:
* arduinoIDE - contain the project implementations that will most closely match those in the book - they are all created using the [Arduino IDE](https://www.arduino.cc/en/Main/Software)
* diagrams - prototype diagrams for each of the project implementations using the [Fritzing](http://fritzing.org/home/) application
* node - contain the project implementations using JavaScript (ES6) and [Johnny-Five](http://johnny-five.io/)
  * Note: The NodeJS examples run through an ExpressJS server that sets up the board and executes the example accessed via the URLs specified in the routing. Once an example is run, the NodeJS server must be restarted to switch to another example - this is because there is no way to terminate things with the Arduino.

### Corresponding Book Examples
* blinking_led: Figure 4-1, Example 4-1
* push_led: Figure 4-5, Example 4-2, Example 4-3, Example 4-4, Example 4-5
* fade_led: Figure 5-4, Example 5-1, Example 5-2
* ldr_led: Figure 5-6, Example 5-3, Example 5-4, Example 5-5


## Equipment Needed
To implement the examples in the book, I used oddWires' [Ultimate Kit with Arduino Uno](http://www.oddwires.com/the-ultimate-arduino-kit/), which is an awesome deal for newbies. Everything listed below is included in this kit, except for the optional lamp.

If you are assembling your own kit, you'll need the following for the exercises in Chapters 1-7:
* Computer (with at least the Arduino IDE installed)
* USB Cable
* Arduino Uno R3
* Breadboard
* 3 x 3mm or 3 x 5mm LED (3 different colors)
* 1 RGB LED (common cathode)
* 20 male/male wires
* 1 button or tactile on/off switch
* 1 x 10K ohm resistor
* 3 x 220 ohm resistor
* Light-dependent resistor (LDR)
* (Optional) Old lamp that you can take apart OR glass sphere and suitable base - the book suggests something like the [Ikea Fado Table Lamp](http://www.ikea.com/us/en/catalog/products/70096377/)

Notes: 
* I skipped chapter 6 since I did not want to buy an Arduino Leonardo or Micro at this time.
* The Automatic Garden Irrigation System from Chapter 8 will likely be tracked as a separate project since it is something I would likely use and adjust even after finishing with this book. When I get to it, I will update this file with a link to that project.


