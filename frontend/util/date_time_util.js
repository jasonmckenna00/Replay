

function convertToOffset (rails_date){
    // debugger
    if (!rails_date) return null
    const postDate = new Date (rails_date).getTime();
    const currDate = Date.now();
    const months = secondsToMonth(currDate - postDate);

    if (months < 1) {
        const days = Math.floor(months * 30);
        if (days < 7){
            if (!days) return 'Today';
            if (days === 1) return 'Yesterday';
            return days + ' days ago';
        } else {
            const weeks = Math.floor(days/7)
            return weeks + ' weeks ago';
        }
    } else if (Math.floor(months)/12 < 1){
        const months = Math.floor(months);
        return months + ' months ago';
    } else {
        const years = (Math.floor(months)/12)
        return years + ' years ago';
    }
    

    

}

function secondsToMonth(dateDiff){
    return parseInt(dateDiff.toString())/1000/3600/24/30 // milisecs -> secs -> hours -> days -> month
}

export default convertToOffset