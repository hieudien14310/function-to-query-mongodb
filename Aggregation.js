// Có thể hiểu aggregation trong mongo là sự kết hợp của nhiều điều kiện query data(find, group, sort...v...v...) để truy xuất data.

// List data
// { _id: 1, cust_id: "abc1", ord_date: ISODate("2012-11-02T17:04:11.102Z"), status: "A", amount: 50 }
// { _id: 2, cust_id: "xyz1", ord_date: ISODate("2013-10-01T17:04:11.102Z"), status: "A", amount: 100 }
// { _id: 3, cust_id: "xyz1", ord_date: ISODate("2013-10-12T17:04:11.102Z"), status: "D", amount: 25 }
// { _id: 4, cust_id: "xyz1", ord_date: ISODate("2013-10-11T17:04:11.102Z"), status: "D", amount: 125 }
// { _id: 5, cust_id: "abc1", ord_date: ISODate("2013-11-12T17:04:11.102Z"), status: "A", amount: 25 }


// db.orders.aggregate([
//     { $match: { status: "A" } },
//     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
//     { $sort: { total: -1 } }
// ])
// => Giải thích: Lọc ra tất cả giá trị có status là "A", sau đó group chúng lại với _id rồi tính total của chúng dựa trên amount. Và cuối cùng là sort giảm dần.

// Kết quả: 
// { "_id" : "xyz1", "total" : 100 }
// { "_id" : "abc1", "total" : 75 }

//Tài liệu official : https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/