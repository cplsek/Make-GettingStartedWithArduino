// LED where brightness depends on value from a Light Dependent Resistor (LDR)

const int LED = 9;
int val = 0;

void setup() {
  Serial.begin(9600); //open serial port and send data at 9600 bits/second
  pinMode(LED, OUTPUT);
  //analog pins automatically set as input, so do not need to specify it
}

void loop() {
  val = analogRead(0); //read value from LDR sensor
  Serial.println(val);
  analogWrite(LED, 255-val/4); //turn on LED at opposite value from sensor (when it gets darker, light gets brighter)
  delay(100);
}
