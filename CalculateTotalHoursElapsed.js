// 3. Calculate total hours passed between two time
// Accepted input format example "9:00 AM"
// Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
// Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes


function timeIntoMinutes(inputTime) {
    let [hours, minutes, ampm] = inputTime.split(/:| /);  
    minutes = parseInt(minutes);
    if (ampm === 'pm') {
        minutes += 12 * 60; // Add 12 hours for PM
    }
    return minutes;
}


function calculateTotalHoursElapsed(time1, time2) {

    //type and format check
 if(typeof time1 === 'string' && typeof time2 === 'string'){

    time1 = time1.replace(/\s+/g, ''); // Remove spaces
    time2 = time2.replace(/\s+/g, '');
  
    //works for both lower and uppercase (am or AM)
    time1 = time1.toLowerCase();
    time2 = time2.toLowerCase();

    const hour1 = parseInt(time1);
    const am1 = time1.includes('am');
    const hour2 = parseInt(time2);
    const am2 = time2.includes('am');

    if(hour1 === 0 || hour2 === 0){
        console.error("Invalid input");
        return false;
    }

    let minuteDifference , minutes;

    // the time difference in hours
    let hoursDifference = Math.abs(hour2 - hour1);

    // check  AM/PM
    if (am1 && !am2)
        hoursDifference += 12;
    else if (!am1 && am2) 
        hoursDifference -= 12;
        

        // check the result is positive and within 24 hours
        hoursDifference = (hoursDifference + 24) % 24;
        
        //the difference in minutes
        minuteDifference = timeIntoMinutes(time1) - timeIntoMinutes(time2);
        minutes = Math.abs(minuteDifference % 60); 
        return `${hoursDifference} hours ${minutes} minutes`;
    
    
}
else{
    console.error("Invalid input");
    return false;
}


} 


const time1 = "12:10 AM";
const time2 = "12:10 AM";

console.log(calculateTotalHoursElapsed(time1, time2));
console.log(calculateTotalHoursElapsed('',[]));












// if(hour1 === 12 && hour2 === 12){
//     minuteDifference = timeIntoMinutes(time1) - timeIntoMinutes(time2);
//     minutes = Math.abs(minuteDifference % 60); 
//     return `${hour1} hours ${minutes} minutes`;
// }
// if(hour1 === 12 || hour2 === 12){
//     minuteDifference = timeIntoMinutes(time1) - timeIntoMinutes(time2);
//     minutes = Math.abs(minuteDifference % 60); 
//     return `${hour1+hour2} hours ${minutes} minutes`;
// }
// else{   