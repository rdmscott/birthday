// JavaScript Document
$(document).ready(function() {
	console.log("in documentReady");
	$("#savebirthday").click(function() {
		 var fName = $("#Fname").val();
		 var lName = $("#Lname").val();
		 var month = $("#bmonth").val();
		 var day   = $("#bday").val();
		 var year  = $("#byear").val();
		//alert(fName);
		var name = lName + ", " + fName;
		var date = month + "/" + day + "/" + year ;
		//alert(name+date);
		console.log(name + date);
		window.localStorage.setItem(name, date);
		$("#output").html("Save completed");
		//onDeviceReady();
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
		if (window.localStorage.length > 1) {
		for (var i=1; i <  window.localStorage.length; i++) {
			var name = window.localStorage.key(i);
			var value = window.localStorage.getItem(name);
			
			// check if birthday needs a reminder
			$("#view").append("length:" + window.localStorage.length + "Name:" + name + "   " + "Value:" + value);
		}
		} else {
			$("p.zero").text("Displaying 0 Birthdays");
		}
	}


