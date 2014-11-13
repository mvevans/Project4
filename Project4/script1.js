//mark evans project 4

$( go );

function go( )
{
 $( "#txtID" ).datepicker({ onSelect: dateAlert });
 
 alert("Changing class of h1_2 and h1_3 to greenClass, new background color is green");
 $(".h1Class").addClass("greenClass");
 $(".greenClass").removeClass("h1Class");
 
 alert("changing width of all paragraphs to 200");
 $("p").width("200px");
 
 alert("sliding second paragraph up");
 $( "p:eq(1)" ).slideUp(400, slideUpDone);
}

function slideUpDone(){
	alert("sliding second paragraph down");
	$( "p:eq(1)" ).slideDown(2000, functionCall);
}

function functionCall(){
	this.innerHTML = "the function was called";
	
	alert("making the paragraph with the id pID draggable and resizeable");
	$("#pID").draggable();
	$("#pID").resizable( { ghost: true, handles: 'ne, se, e'} );
}

function dateAlert( dateText, inst )
{
  alert( "Inside dateAlert, dateText is " + dateText );
}