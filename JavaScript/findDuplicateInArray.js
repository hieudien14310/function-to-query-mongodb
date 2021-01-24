findDuplicateInArray = function(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(function(item) {
        if (!object[item]) { object[item] = 0; }
        object[item] += 1;
    });

    for (const prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }
    console.log(typeof result[0]);
    return result;
};
findDuplicateInArray([1,1,3,4,5,6,7,8,9,8,9]);
// Trả về 1 array chứa các giá số trùng [1,8,9]