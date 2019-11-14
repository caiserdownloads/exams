
const questions = [{
        question: "what is the formula for distance?",
        options: [
            "Speed/time",
            "Speed*time",
            "time/speed",
            "speed+time"
        ]
    },
    {
        question: "How is distance calculated in ultrasonic sensor?",
        options: [
            "d*2",
            "d<sup>2</sup>",
            "d/2",
            "d<sup>2</sup>/2",
        ]
    },
    {
        question: "What is the detecting range of Ultrasonic sensor?",
        options: [
            "1cm - 400cm",
            "1cm - 300cm",
            "2cm - 300cm",
            "2cm - 400cm",
        ]
    },
    {
        question: "SONAR Stands for?",
        options: [
            "Sound navigation and ranging",
            "Sound number approximation and ranging",
            "Sound nullifying ranging",
            "None of the mentioned"
        ]
    },
    {
        question: "What is the frequency of Ultrasonic sensor?",
        options: [
            '30-70kHz', '40-70kHz', '40-55kHz', '30-60kHz'
        ]
    },
    {
        question: "Name of the microcontroller present in the Arduino UNO board?",
        options: [
            '8051 MC', 'ATmega8 MC', 'ATmega328 MC', 'PIC MC'
        ]
    },
    {
        question: "Operating voltage of Arduino UNO board?",
        options: [
            "5 V",
            "3.3 V",
            "9 V",
            "12 V",
        ]
    },
    {
        question: "what is the header file used for Adafruit motor shield ?",
        options: [
            '#include &lt AFMotor.h &gt',
            '#include &lt AFmotor.h &gt',

            '#include &lt AF-Motor.h &gt' ,
            '#include &lt AF-motor.h &gt'                                                          
            
        ]
    },
    {
        question: "Which IC is present in the Adafruit motor shield?",
        options: [
            "L298N",
            "L293D",
            "LM35",
            "DHT11",
        ]
    },
    {
        question: "find the next number 1,3,2,6,3,11,4,18,5,__",
        options: [
            "27",
            "25",
            "23",
            "29",
        ]
    },
    {
        question: "What are the data types used in Embedded C?",
        options: [
            "Char",
            "float",
            "Int",
            "all",
        ]
    },
    {
        question: "Which method stops the DC motor movement?",
        options: [
            'Motor.run(stop)', 'Motor.run(release)', 'Motor.run(pause)', 'Motor.off()'
        ]
    },
    {
        question: "Which function measures the time period from input signal in ultrasonic sensor?",
        options: [
            "PulseIn()",
            "Tone()",
            "abs()",
            "constrain()",
        ]
    },
    {
        question: "find the next number in the series 1,3,2,9,4,27,8,81,16,__",
        options: [
            "157",
            "243",
            "81",
            "27",
        ]
    },
    {
        question: "How many data pins are available in Adafruit motor shield?",
        options: [
            '0-13', 
            '0-10',
            '0-5', 
            '0-9'
        ]
    },
    {
        question: "What is the function of ECHO pin in Ultrasonic sensor",
        options: [
            'Transmits high frequency sound', 'Receives high frequency sound',
            'Spreads high frequency sound', 'Circulate high frequency sound'
        ]
    },
    {
        question: "Name of the function used to pause the programming process in Arduino UNO board?",
        options: [
            "pause()",
            "break()",
            "interrupt()",
            "delay()",
        ]
    },
    {
        question: "Which function sets the HIGH or LOW value to a specified OUTPUT pin?",
        options: [
            'ananlogWrite()' , 'analogRead()' ,'digitalWrite()','digitalRead()' 
        ]
    },
    {
        question: "Find the odd one out for sensor = ?",
        options: [
            'detector' , 
            'transducer' ,
            'camera',
            'controller' 
        ]
    },
    {
        question: "Which function causes varying brightness to LED & varying speed to DC motor?",
        options: [
            'ananlogWrite()' , 'analogRead()' ,'digitalWrite()','digitalRead()' 
        ]
    },
    {
        question: "What is the range value of analogRead() function?",
        options: [
            "0-511",
            "0-1023",
            "0-127",
            "0-1024",
        ]
    },
    {
        question: "What is the operation of Void Setup() ?",
        options: [
            'Execute statements once',
            'Execute statements multiple',
             'Both a & b', 'None' 
        ]
    },
    {
        question: "pick the odd one out  for actuator =?",
        options: [
            'lever',
             'motor', 
             'feeler',
             'loudspeaker'
        ]
    },
    {
        question: "Which operator increments value of a variable after executing the expression completely?",
        options: [
           "pre-increment",
           "post-increment",
           "pre-decrement",
           "post-decrement",
        ]
    },
    {
        question: "What is the range of motor set speed?",
        options: [
            "0-1023",
            "0-255",
            "0-1024",
            "0-100",
        ]
    },
    {
        question: "Which type of motor gives the precise rotational performance?",
        options: [
            "DC motor",
            "Induction motor",
            "Synchronous motor",
            "Stepper motor",
        ]
    },
    {
        question: "Which electronic component present in transmitter side of IR sensor?",
        options: [
           "Photodiode",
           "Transistor",
           "Led",
           "Thyrister",
        ]
    },
    {
        question: "Which electronic component present in receiver side of IR sensor?",
        options: [
            "Photodiode",
            "Transistor",
            "Led",
            "Thyrister",
        ]
    },
    {
        question: "The IR sensor measures what?",
        options: [
        "Thermal Radiation",
        "infra red Radiation",
        "ultra violet Radiation",
        "gamma Radiation",
        ]
    },
    {
        question: "What is the detection range of IR sensor?",
        options: [
            "2cm - 40cm",
            "2cm - 50cm",
            "2cm - 30cm",
            "2cm - 10cm",
        ]
    },
]
let data = "";
let options = "";
questions.forEach((e, i) => {
    let ques = e.question;
    e.options.forEach(oe => {
        options += `<li>${oe}</li>`
    })
    data += `<div class="card mx-3 my-3"><div class="card-body"><p class="question"><b>${i+1}. ${ques}</b></p><ol type="a">${options}</ol></div></div>`;
    options = '';

})
document.getElementById("data").innerHTML = data;
console.log("created by sharath");