// 3. Calculate total hours passed between two time
// Accepted input format example "9:00 AM"
// Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
// Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes


function calculateTotalHoursElapsed(time1,time2){

 //timepattern check regex
 const timePattern = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/;

 //type and pattern check
 if(typeof time1 === 'string' && typeof time2 === 'string' && time1.match(timePattern) && time2.match(timePattern)){
    
    //split it as hours , minutes and am/pm
    let [hours1, minutes1, ampm1] = time1.split(/:| /);
    let [hours2, minutes2, ampm2] = time2.split(/:| /);  

    //am/pm can be in Uppercase/lowercase 
    ampm1 = ampm1.toLowerCase();
    ampm2 = ampm2.toLowerCase();

    // console.log(hours1,minutes1,ampm1);
    // console.log(hours2,minutes2,ampm2);

    //get hours and check it is in 'am/pm'
    const startHours = (parseInt(hours1)%12)+(ampm1 === 'pm' ? 12 :0);
    const endHours = (parseInt(hours2)%12)+(ampm2 === 'pm' ? 12 :0);

    //convert hours into minutes and find total minutes
    let totalMinutes = (endHours * 60 + parseInt(minutes2)) - (startHours*60 + parseInt(minutes1)); 

    if(totalMinutes < 0){
        totalMinutes += 24*60;
    }

    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes%60;

    const formatHours = hours === 1 ? 'hour' : 'hours';
    const formatMinutes = minutes === 1 ? 'minute' : 'minutes';

    return `${hours} ${formatHours} ${minutes} ${formatMinutes}`;

}
else{
        console.error("Invalid time");
        return false;
}


}

console.log(calculateTotalHoursElapsed("02:00 PM","03:01 PM"));