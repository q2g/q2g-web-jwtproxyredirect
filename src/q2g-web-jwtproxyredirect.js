var hrefArr = window.location.href.split("?");
var bearer = hrefArr[1].split("=")[1];
$.getJSON( "./config.json", function( config ) {
	$.ajax({
		type: "GET",
		beforeSend: function(request) {
				request.setRequestHeader("Authorization", "Bearer " + bearer);
		},
		url: "https://" + config.host + "/" + config.proxy + "/sense/app",
		success: function() {
				window.location.replace("https://" + config.host + "/" + config.proxy + "/hub");
		},
		error: function (error) {
			console.log("error", error);
		}
	});
});
