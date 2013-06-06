// JavaScript Document
$(document).ready(  function() {
	console.log("in documentReady");
	$("#savebirthday").click(function() {
		var name = fname1 + " " + lname2;
		var date = bmonth + "/" + bday + "/" + byear ;
		console.log(name + date);
		window.localStorage.setItem(name, date);
	});
	
//  $("#deletebirthday").click(function() {
//		var name = fname1 + " " + lname2;
//		window.localStorage.removeItem(name);
//	});
//	
//	$("#edittbirthday").click(function() {
//		var name = fname1 + " " + lname2
//		var value = window.localStorage.getItem(name);
//		fname1 = name.fname1
//		lname2 = name.lname2
//		bmonth = name.date
//	});
});

	
	document.addEventListener("deviceready", onDeviceReady, false);
	
	function onDeviceReady() {
	    console.log("in onDeviceReady routine");
		if (window.localStorage.length > 0) {
		for (var i=0; i <  window.localStorage.length; i++) {
			var name = window.localStorage.key(i);
			var value = window.localStorage.getItem(name);
			
			// check if birthday needs a reminder
			$("#view").append(name + value);
		}
		} else {
			$("p.zero").text("Displaying 0 Birthdays");
		}
	}


