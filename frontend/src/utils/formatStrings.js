
const formatStringUtil = (() => {

    const addCommasToNum = (num) => {
        
        if(typeof num === 'string')
            return num
        if (!num)
            return num
        if (num < 999 && num > -999)
            return Math.round(num * 100) / 100
        return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const camelToTitleCase = (str) => {
        const result = str.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return {
        addCommasToNum,
        camelToTitleCase
    }

})()

module.exports = formatStringUtil