function addtask()
{

   document.getElementById('todonothing').innerHTML="";

   taskname = document.getElementById('taskname').value;
   description = document.getElementById('description').value;
   duedate = document.getElementById('duedate').value;
   const d = new Date(duedate);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[d.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];


var min=d.getMinutes();
if(min<10) min = "0" + min;

var sec=d.getSeconds();
if(sec<10) sec = "0" + sec;


x=d.getHours();
t="";
if(x>12) 
t=(x-12) +":" + min + ":" + sec + " PM " + day + ", " + month + " " + d.getDate();
else
t=x +":" + min + ":" + sec + " AM " + day + ", " + month + " " + d.getDate();


   //string Date = datePicker1.SelectedDate.Value.ToString("dd-MMM-yyyy");
    
   alert(t);
   var txt = document.getElementById('todotask').innerHTML;
   txt+="<hr><div class='d-flex mx-4'><div><input type='checkbox' class='form-check-input me-4'></div><div> <p class='mb-0'><b>" + taskname + "</b><br>" + description + "</p><p class='text-danger mb-0'>" + t  + "</p></div></div></p>";
   document.getElementById('todotask').innerHTML = txt;

   document.getElementById('taskname').value="";
   document.getElementById('description').value="";
   document.getElementById('duedate').value="";

}
