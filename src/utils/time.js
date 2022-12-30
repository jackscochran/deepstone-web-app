
const timeUtil = (() => {

    function getCurrentDay(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}`
        return today
    }

    function addDays(date, days){
        var dateObject = new Date(date)
        dateObject.setDate(dateObject.getDate() + days);
        return dateToString(dateObject)
    }

    function getDifferenceInDays(startDate, endDate) {
        return Math.ceil(Math.abs((new Date(endDate)) - (new Date(startDate)))/ (1000 * 60 * 60 * 24));
    }

    const dateToString = (date) => date.toISOString().split('T')[0]

    return {
        getCurrentDay,
        addDays,
        getDifferenceInDays
    }
})()

export default timeUtil