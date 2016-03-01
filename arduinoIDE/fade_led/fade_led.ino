const int UP = 1;
const int DOWN = 0;
const int LED_RED = 9;
const int BUTTON = 7;
int buttonVal = 0;
int priorButtonVal = 0;
int ledBrightness = 0;
int ledState = UP;
unsigned long startTime = 0;

void setup() {
  Serial.begin(9600);
  Serial.println("******** PUSH & FADE LEDS ********");
  pinMode(LED_RED, OUTPUT);
  pinMode(BUTTON, INPUT);
}

void loop() {
  buttonVal = digitalRead(BUTTON);

  if(buttonVal == HIGH && priorButtonVal == LOW){
    Serial.println("Button pushed!");
    startTime = millis();
    delay(10);
  }else if(buttonVal == HIGH && priorButtonVal == HIGH){
    if((millis() - startTime)>500){
      Serial.println("Button held long enough to act upon");
      if(ledState == UP){
        if(ledBrightness >= 255){
          Serial.println("Hit the highest brightness - starting down");
          ledState = DOWN;
          ledBrightness = ledBrightness - 5;
        }else{
          Serial.println("Getting brighter");
          Serial.println(ledBrightness);
          ledBrightness = ledBrightness + 5;
        }
      }else if (ledState == DOWN){
        if(ledBrightness <= 0){
          Serial.println("Hit the lowest dimness - starting up");
          ledState = UP;
          ledBrightness = ledBrightness + 5;
        }else{
          Serial.println("Getting dimmer");
          Serial.println(ledBrightness);
          ledBrightness = ledBrightness - 5;
        }
      }
      analogWrite(LED_RED, ledBrightness);
    }
  }
  priorButtonVal = buttonVal;

}
