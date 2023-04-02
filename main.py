import time, requests
from pirc522 import RFID
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
red_led = 7
green_led = 11
blue_led = 13
GPIO.setup(red_led,GPIO.OUT)
GPIO.setup(green_led,GPIO.OUT)
GPIO.setup(blue_led,GPIO.OUT)
rdr = RFID()
util = rdr.util()
util.debug = True

def green():
    GPIO.output(green_led,GPIO.LOW)
    time.sleep(0.3)
    GPIO.output(green_led,GPIO.HIGH)

def red():
    GPIO.output(red_led,GPIO.LOW)
    time.sleep(0.3)
    GPIO.output(red_led,GPIO.HIGH)

def blue():
    GPIO.output(blue_led,GPIO.LOW)
    time.sleep(0.1)
    GPIO.output(blue_led,GPIO.HIGH)
blue()
red()
green()
while True:
    rdr.wait_for_tag()
    (error, tag_type) = rdr.request()
    if not error:
        print("Tag detected")
        blue()
        (error, uid) = rdr.anticoll()
        if not error:
            green()
            print("UID: " + str(uid))
            hex_uid = hex(uid[0])[2:] + hex(uid[1])[2:] + hex(uid[2])[2:] + hex(uid[3])[2:] + hex(uid[4])[2:]
            print("Hex UID: " + hex_uid)
            print("Sent to server")
            req = requests.post('http://10.10.10.27:8000/game/send_card/', data = {'card_id': str(hex_uid)})
            if req.status_code == 200:
                print("Success")
            time.sleep(2)   
        else:
            print("Error reading UID")
            red()