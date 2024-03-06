const getDifferenceTimeFromNow = (fromDate) => {
    let difference = new Date().getTime() - new Date(fromDate).getTime();

    // Convert milliseconds to seconds
    let seconds = Math.floor(difference / 1000);

    // Convert seconds to minutes
    let minutes = Math.floor(seconds / 60);

    // Convert minutes to hours
    let hours = Math.floor(minutes / 60);

    // Convert hours to days
    let days = Math.floor(hours / 24);

    // Construct the message
    let message = "";
    if (days > 0) {
        message += days + " days";
    } else if (hours > 0) {
        message += hours + " hours";
    } else if (minutes > 0) {
        message += minutes + " minutes";
    } else {
        message += seconds + " seconds";
    }

    return message;
};

export { getDifferenceTimeFromNow };
