 export function showRandomGame() {

   // Get the value of field number
    var number=document.getElementById("number").value;
   // generate random number between 1 and 10
    var random_number =Math.floor((Math.random() * 10) + 1); 
     // Write the value of the random number in the field name randNumber
    document.getElementById("randNumber").innerHTML = random_number;
     // Condition if number egals random_number result is write inside the field result
  if (number==random_number) {
       
        document.getElementById("result").innerHTML = "You win";
        
        var oldHTML = document.getElementById('result').innerHTML;
	    var newHTML = "<span style='color: green'>" + oldHTML + "</span>";
	    document.getElementById('result').innerHTML = newHTML;
        
        }
        
     else {
     
         document.getElementById("result").innerHTML = "You lost";
          var oldHTML = document.getElementById('result').innerHTML;
	      var newHTML = "<span style='color: red'>" + oldHTML + "</span>";
	      document.getElementById('result').innerHTML = newHTML;
     
     }
}



