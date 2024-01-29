var subtitles = {
	T_9911: {
		lang: "en",
		name: "English",
		tracks: [
			//from		To			Text
			T(TTime("00:00:00.000:00"), TTime("00:00:03.000:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:03.500:00"), TTime("00:00:07.000:00"), "Simon Hyllested <br/>Foto: Tobias Meier"),
			T(TTime("00:00:15.000:00"), TTime("00:00:17.500:00"), "William Frederik Thomsen <br/>Elev i 8.Klasse, Th. Langs skole, Silkeborg"),
			T(TTime("00:00:20.500:00"), TTime("00:00:22.000:00"), "Amalie Vinding Nielsen <br/>Elev i 8.Klasse, Th. Langs skole, Silkeborg"),
			T(TTime("00:00:22.500:00"), TTime("00:00:24.000:00"), "Sylvester Runekilde Hansen <br/>Elev i 8.Klasse, Th. Langs skole, Silkeborg"),


		]		
	},
};

/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if (arguments.length == 1) {
		frames = (arguments[0] * 1) / 24;
	}
	else if (arguments.length == 2) {
		frames = (arguments[1] * 1) / 24;
		seconds = arguments[0] * 1;
	}
	else if (arguments.length == 3) {
		frames = (arguments[2] * 1) / 24;
		seconds = arguments[1] * 1;
		minutes = (arguments[0] * 1) * 60;
	}
	else if (arguments.length == 4) {
		frames = (arguments[3] * 1) / 24;
		seconds = arguments[2] * 1;
		minutes = (arguments[1] * 1) * 60;
		hours = (arguments[0] * 1) * 3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * *//*@param {*} value *//*
 */
function UndefinedToZero(value) {
	if (typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 //* @param {numeric} frames Not Required
 //* @param {numeric} seconds Not Required
 //* @param {numeric} minutes Not Required
 //* @param {numeric} hours Not Required
 */

function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if (typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3] * 1) / 24;
	var seconds = split[2] * 1;
	var minutes = (split[1] * 1) * 60;
	var hours = (split[0] * 1) * 3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}