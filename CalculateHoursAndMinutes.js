// 3. Calculate total hours passed between two time
// Accepted input format example "9:00 AM"
// Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
// Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes


//to check the format of time
function checkTimeFormat(time) {
    const regex = /(\d+):(\d+) ([APap][Mm])/; // Regex to match "hh:mm AM/PM"
    return time.match(regex); //true if it matches
}

function timeIntoMinutes(inputTime) {
    let [hours, minutes, ampm] = inputTime.split(/:| /);
    
    // const minutes = inputTime.split(':')[1];
    // const ampm = inputTime.split(':')[2];
    
    
    minutes = parseInt(minutes);
    if (ampm === 'pm') {
        minutes += 12 * 60; // Add 12 hours for PM
    }
    return minutes;
}


function hoursBetweenTwoTimes(time1, time2) {

    //type and format check
    if(typeof time1 === 'string' && typeof time2 === 'string' && checkTimeFormat(time1) && checkTimeFormat(time2)){

    // Convert time into 24-hour format
    time1 = time1.replace(/\s+/g, ''); // Remove spaces
    time2 = time2.replace(/\s+/g, '');
  
    //works for both lower and uppercase (am or AM)
    time1 = time1.toLowerCase();
    time2 = time2.toLowerCase();

    const hour1 = parseInt(time1);
    const am1 = time1.includes('am');
    const hour2 = parseInt(time2);
    const am2 = time2.includes('am');

    // the time difference in hours
    let hoursDifference = Math.abs(hour2 - hour1);

    // check  AM/PM
    if (am1 && !am2) {
        hoursDifference += 12;
    } else if (!am1 && am2) {
        hoursDifference -= 12;
    }

    // check the result is positive and within 24 hours
    hoursDifference = (hoursDifference + 24) % 24;

    //the difference in minutes
    const minuteDifference = timeIntoMinutes(time1) - timeIntoMinutes(time2);

    const minutes = Math.abs(minuteDifference % 60);

    // console.log(minutes1,minutes2,minutes);

 
    return `${hoursDifference} hours ${minutes} minutes`;
  }
  else{
    console.error("Invalid input");
    return false;
  }
} 


const time1 = "02:10 PM";
const time2 = "04:00 AM";


console.log(hoursBetweenTwoTimes(time1, time2));
// console.log(hoursBetweenTwoTimes('',[]));
