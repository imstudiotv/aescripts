/**
* Create null object name "controller" and add "slider" expression effect = "amp" "freq" "decay" "time_max"
**/
amp = thisComp.layer("controller").effect("amp")("Slider");
freq = thisComp.layer("controller").effect("freq")("Slider");
decay = thisComp.layer("controller").effect("decay")("Slider");
time_max=thisComp.layer("controller").effect("time_max")("Slider");
n = 0;
if (numKeys > 0) {
	n = nearestKey(time).index;
	if (key(n).time > time){
		n--;
	}
}
if (n == 0) {
	t = 0;
} else {
	t = time - key(n).time;
}
if (n > 0 && t < time_max) {
	v = velocityAtTime (key(n).time - thisComp.frameDuration/10);
	value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);   
} else {
	value
}
