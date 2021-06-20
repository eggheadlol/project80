name_array=[];

function submit(){
    display_array=[];
    //to fetch text input and to push the namex using for loop
    for(var j=1;j<=4;j++){

        var name=document.getElementById("name"+j).value;
        name_array.push(name);
    }
    var len=name_array.length;
    for(var k=0;k<len;k++){
        display_array.push("<h4>NAME-"+name_array[k]+"</h4>");
    }

    //to show the output
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_commas=display_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    //to hide submit button and to show sort button
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";   
}

   function sort(){
       name_array.sort(); 
display_array_sort=[];
var len=name_array.length;
    for(var k=0;k<len;k++){
        display_array_sort.push("<h4>NAME-"+name_array[k]+"</h4>");
    }

    //to show the output
    document.getElementById("display_name_with_commas").innerHTML=display_array_sort;

    var remove_commas=display_array_sort.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
   }