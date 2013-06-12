// JavaScript Document

	
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

function displaybdays() {
	
if (window.localStorage.length > 1) {
			for (var i=1; i <  window.localStorage.length; i++) {
				var keyname = window.localStorage.key(i);
				var value = window.localStorage.getItem(keyname);
			
			// check if birthday needs a reminder
			//	$("#view").append("length:" + window.localStorage.length + "Name:" + keyname + "   " + "Value:" + value);
				var space = "    ";
				var displayname = "<li>" + keyname + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + value + "</li>";
				$("#mylistview").append(displayname);
			//	$("#view").append(keyname + space + value + "\r\n");
			    
			}
		} else {
			$("p.zero").text("Displaying 0 Birthdays");
		}	
}		
//	
	document.addEventListener("deviceready", onDeviceReady, false);
//
function onDeviceReady() {
	//$(document).ready(function() {
		console.log("documentReady");
		var clickOk = true;
		$("#savebirthday").click(function() {
			//if (clickOk === true) {
        	//	clickOk = false;
        	//	setTimeout(function () {
            //	clickOk = true;
        	//	}, 350);
       		//	 //run click code now
    		//}
   			//return false;			
			console.log("savebirthday Function");
		 	var fName = $("#Fname").val();
		 	var lName = $("#Lname").val();
		 	var month = $("#bmonth").val();
		 	var day   = $("#bday").val();
		 	var year  = $("#byear").val();
			//alert(fName);
			console.log(fName); 
			var name = lName + ", " + fName;
			var date = month + "/" + day + "/" + year ;
			//alert(name+date);
			console.log(name + date);
			window.localStorage.setItem(name, date);
			$("#output").html("Save completed");
			
			var displayname = "<li>" + name + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + date + "</li>";
			$("#mylistview").append(displayname);
			//$("#mylistview").append(name + space + date);
			$("#Fname").val('');
			$("#Lname").val('');
		});
	//});
	    console.log("onDeviceReady");
		displaybdays();
	//	$("#home").click(function() {
	//		$("#view").html('');
    //   	displaybdays();
   	//	 });
}


	


