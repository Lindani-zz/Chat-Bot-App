"use strict";
class WeatherChatBot{
	
	constructor(acces_token, unique_session_id) {
  	this.acces_token = acces_token;
  	this.unique_session_id = unique_session_id
	};

	weatherInquiry(){

		var apiai = require('apiai');

		var app = apiai(this.acces_token);

		 
		var request = app.textRequest('what is the weather in Cape Town tomorrow?', {
		    sessionId: this.unique_session_id
		});
		 
		request.on('response', function(response) {
		    console.log(response);
		});
		 
		request.on('error', function(error) {
		    console.log(error);
		});
		 
		request.end();
	};
};
