
module.exports = function towelSort (matrix) {
    if (!matrix) {
        return []
    }
   matrix.forEach(( item, i) => {
    if (i % 2 !== 0) {
      return item.reverse();
    }
    else{
        return ''
    }
});
return matrix.flat()
}

