//Push LED - turns on LED when button is pressed

const int LED = 13;
const int BUTTON = 7;
const int ON = 1;
const int OFF = 0;

int val = 0;
int priorVal = 0;
int state = OFF;

void setup() {
  Serial.begin(9600);
  Serial.println("********PUSH LED LOGGING********");
  pinMode(LED, OUTPUT);
  pinMode(BUTTON, INPUT);
}

void loop() {
  val = digitalRead(BUTTON);
 
  if(val == HIGH && priorVal == LOW){
    delay(10); //wait for a minute for the bouncing to stop
    if(state == ON){
      Serial.println("Light is ON - turning it OFF");
      state = OFF;
      digitalWrite(LED, LOW);
    }else if(state == OFF){
      Serial.println("Light is OFF - turning it ON");
      state = ON;
      digitalWrite(LED, HIGH);
    }
  }

  priorVal = val;

}
