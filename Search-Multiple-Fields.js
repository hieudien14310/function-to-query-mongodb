//Tìm kiếm 1 giá trị trong nhiều fields ở mongodb là theo cấu trúc sau:
// db.collection.find(
//     // Find documents matching any of these values
//     {$or:[
//         {"field1": value},
//         {"field2":{"$in":["foo","bar"]}}
//     ]}
// )

//Có thể làm 1 function để build câu query.
module.exports.searchMultipleFields = (keyword) => {
    const query = {
        $or: []
    }
    if(keyword.length === 0 || keyword === ''){
        return {};
    }
    query.$or.push(
        // $options: "i" là kiểu tìm %text%.
        {"tên field cần filter": {$regex: keyword, $options: "i"}},
        {"tên field cần filter": {$regex: keyword, $options: "i"}},
        {"tên field cần filter": {$regex: keyword, $options: "i"}},
        {"tên field cần filter": {$regex: keyword, $options: "i"}}
    );
    return query
}