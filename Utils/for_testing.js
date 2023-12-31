const reverse = (String) => {
    return String 
    .split('')
    .reverse('')
    .join('')
}

const average = (array) => {
    const reducer = (sum , item) => {
        return sum + item 
    }
    return array.reducer(reducer , 0) / array.length 
}

module.exports = {
    reverse,
    average
}