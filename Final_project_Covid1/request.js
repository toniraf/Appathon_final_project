var request;
  

function myFunction(){
    request = new XMLHttpRequest();
	request.onreadystatechange = onComplete;
	drug = document.getElementById("dru").value;
	request.open("GET", "/search_authors?drug="+drug, true);
	request.send(null);
    }
    

function validateForm(){
    var x=document.forms["myForm"]["drug"].value;
    if(x=="") {
        alert("Drug field must be filled in");
        return false;
    }
    else return true;
}
        
function onComplete(event){
    var x=validateForm();
	if (request.readyState == 4 && x==true)
	Display_html_table();
}
		
function Display_html_table(){
    var count=1;
	var results = "<table><tr><th>Authors</th><th>Number_of_articles</th><th>FirstPublish_Date</th><th>LastPublish_Date</th></tr>";
	var data = JSON.parse(request.responseText);
	for (x in data){
        if(data[x].authors!="" && count<11) {
			results = results + "<tr><td>" + data[x].authors + "</td><td>" + data[x].number_of_articles + "</td><td>"+data[x].mintime+"</td><td>"+data[x].maxtime+"</td></tr>";
            count=count+1;
        }
    }
	results = results + "</table>";
	document.getElementById("myTable").innerHTML = results;
}