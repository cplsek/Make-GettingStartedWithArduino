import express from 'express';
import blink from './sketches/blinking_led';
import onWhenPushed from './sketches/push_led';
import fadeWhenHeld from './sketches/fade_led';
import adjustToLight from './sketches/ldr_led';

const router = express.Router();

router.get('/blinking_led', (req, res, next) => {
    blink();
    res.send('The LED should be blinking!');
});
router.get('/push_led', (req, res, next) => {
    onWhenPushed();
    res.send('The LED should turn on when the button is pushed!');
});
router.get('/fade_led', (req, res, next) => {
    fadeWhenHeld();
    res.send('The LED should fade in and out when the button is held down!');
});
router.get('/ldr_led', (req, res, next) => {
    adjustToLight();
    res.send('The LED should adjust brightness based on ambient light!');
});

export default router;