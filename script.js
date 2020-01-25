$( document ).ready(function(){
var record =
[
    {
    	id: 1,
        name: "Jet Airways",
        duration: 2.30,
        price: 1200,

    },
    {
    	id: 2,
        name: "Air India",
        duration: 1.15,
        price: 1300,

    },
    {
    	id: 3,
        name: "Vistara",
        duration: 4.15,
        price: 1600,

    },
    {
    	id: 4,
        name: "Vistara",
        duration: 1.05,
        price: 170,

    },
    {
    	id: 5,
        name: "Vistara",
        duration: 2.50,
        price: 1750,

    },
    {
    	id: 6,
        name: "Air India",
        duration: 1.30,
        price: 2000,

    },
    {
    	id: 7,
        name: "Air India",
        duration: 3.45,
        price: 1900,

    },
    {	id: 8,
        name: "Jet Airways",
        duration: 1.25,
        price: 1400,

    },
]

var temp = [];

 function timeconvert(n) {
            hr = Math.floor(n);
		    min = Math.round((n - hr) * 100);
		    if(min >= 60)
		    {
		    	hr = hr + 1;
		    	min = min - 60;
		    }
            return hr + "hr " + min + "m";
};

function displayRecord(array)
{
	
    var hr;
    var min;
    for(let i=0;i<array.length;i++){
        var formattedTime = timeconvert(array[i].duration)

        $("#result").append(
        	
                    		`<tr>
						      <th scope="row">${array[i].name}</th>
						      <td>${formattedTime}</td>
						      <td>${array[i].price}</td>
						    </tr>` 
		        )
		    }

		    temp.push(array);
};

function appendlist(array){
    $("#result").html("");
    displayRecord(array);
    
};
appendlist(record);

$('input:checkbox').click(function(){
    var checkedflight;
    $("#result").html("");
    $("input:checkbox").each(function(){
        if ($(this).prop('checked') == true){
            checkedflight = $(this).val();
            var filtered_record = record.filter(a => a.name == checkedflight);
            console.log("Temp array" ,temp);
			displayRecord(filtered_record);
        }
        else{
        	var len = $("input:checkbox:checked").length;
        	if(!len){
            appendlist(record);
            return false;
        	}
        }
    });   
});



$('#duration').click(function(){
    var time = $("#duration").val();
    console.log("time ",time);
    var temptime = timeconvert(time);
    $("#timeVal").html(`Time : ${temptime}`);
    var filtered_record = record.filter(a => a.duration <= time);
    appendlist(filtered_record);
});


$('#price').click(function(){
    var price = $("#price").val();
    $("#RangeVal").html(`Value : ${price}`);
    console.log("Price ",price);
    var filtered_record = record.filter(a => a.price >= price);
    appendlist(filtered_record);
});

$('.clear-btn').click(function(){
    $("input[type=range]").each(function(){
        $(this).val("0");
        $("#RangeVal").html("Value : 1000");
        $("#timeVal").html("Time : 1hr 00m");
    });
    $("input:checkbox").each(function(){
        $(this).prop("checked", false);
    }); 
    appendlist(record);
});


}); 