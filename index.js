//Ever wondered which car you should by? This app is just for you!

//Have you ever been in this tough spot where you have a couple hundred thousand bucks in your wallet and you want to buy a new car, but you can't find which??
//Think no more. This skill is just for you.

//Alexa, open Car Shopper
//Alexa, Ask Car Shopper what car should i buy today
//Alexa, Ask Car Shopper what car would you recommend


'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Car Shopper';

var unirest = require('unirest');

var theEvent;
var theContext;

var cars = [
		"a Ferrari Enzo",
		"a Ford mustang",
		"a Shelby Cobra",
		"a Porsche panamera",
		"a Dodge Charger",
		"an Audi R8",
		"a Tesla Model S",
		"a Porsche Cayman GT4",
		"a BMW Z4",
		"a Dodge Viper",
		"a Nissan GT-R",
		"a Chevrolet Camaro",
		"a BMW M4",
		"a Lamborghini Huracan",
		"a Aston Martin Vanquish",
		"a Bugatti Chiron",
		"a Koenigsegg Regera"
	];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    theEvent = event;
    theContext = context;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        console.log("Launch Request");
         this.emit(':ask', "Welcome! I feel like car shopping today. Go ahead. Ask me to recommend you a car to buy.", SKILL_NAME)
    },

    'RequestNewCar': function () {
        if(theEvent === null){
	        this.emit(':tellWithCard', "event null", SKILL_NAME);
        }else{
					var car = cars[Math.floor(Math.random() * cars.length)];
	    		var reply = "You should buy "+car;
					this.emit(':tell',reply, SKILL_NAME);
        }
    },

		'EndIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },

		'Unhandled': function () {
        this.emit(':tell', 'Goodbye!');
    },

		'HelpIntent': function () {
			var speechOutput = "You can ask me which car you should buy, or, you can say exit... What can I help you with?";
			var reprompt = "What can I help you with?";
			this.emit(':ask', speechOutput, reprompt);
    },

    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can ask me which car you should buy, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
