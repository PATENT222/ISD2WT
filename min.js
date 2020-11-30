/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* images slides   */

var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'images/1.jpg';
	images[1] = 'images/2.jpg';
	images[2] = 'images/3.jpg';
	images[3] = 'images/4.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
        
   // clock
   
   
   function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
 
 // BMI
 
 const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click" , ()=>{
    //BMI = Body Mass Index
    //m = Mass Means Weight (KG)
    //h = Height (CM)
    //Formula = B = m/h²
    
    
    if(height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value * height.value) * 10000;
        yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </span>`
    }
    else
        {
            yourBMI.innerHTML = `Please Enter Correct Value`;
        }
});

/* search bar */

// Enable or disable form fields based on another form control
            documentquerySelector("showveg").addEventListener("change", evt => {
                // get the container for the checkboxes
                let topelem = documentquerySelector("toppingitems");
                // TODO: get the checkboxes that do not correspond to vegetarian
                // and turn them on or off based upon the parent checkbox setting
                let cbquery = "input[type='checkbox']:not([data-veg])";
                let thecbs = topelem.querySelectorAll(cbquery);
                for (cb of thecbs) {
                    if (documentquerySelector("showveg").checked) {
                        cb.setAttribute("disabled", "disabled");
                        cb.parentNode.classList.add("disabled");
                        cb.checked = false;
                    }
                    else {
                        cb.removeAttribute("disabled");
                        cb.parentNode.classList.remove("disabled");
                    }
                }
            });