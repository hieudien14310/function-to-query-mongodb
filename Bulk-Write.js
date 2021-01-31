// Là thực thi nhiều action (insert/update/delete) xuống db theo thứ tự lần lượt và tương ứng với từng điều kiện.
/**
 * Ví dụ: Bạn gặp tình huống là muốn update nhiều documents mà mỗi document lại được update theo từng id và giá trị khác nhau.  
    Khi đó không thể dùng updateMany(vì updateMany là update 1 lần cho tất cả documents). 
    Vì vậy lúc này cần dùng bulkWrite.
 */
// Cách làm: Bạn cần tạo ra 1 array bên trong chứa các object tương ứng với các operation mà bạn muốn. Ở ví dụ trên là update vậy mình sẽ làm update.
var data = [
    {
        // Nếu bạn chưa biết về updateOne thì nên coi lại trên docs của mongo db.
        updateOne: {
            filter: {
                _id: "1"
            },
            update: {
                //Tên field cần update
                name: 'Goku'
            }
        }
    },
    {
        // Nếu bạn chưa biết về updateOne thì nên coi lại trên docs của mongo db.
        updateOne: {
            filter: {
                _id: "2"
            },
            update: {
                //Tên field cần update
                name: 'Luffy'
            }
        }
    }
]
// Sau đó đưa array chứa các operations vào bulkWrite() là xong. DB ở đây của mình tên là CharacterModel
var updateManyByEachCondition = await CharacterModel.bulkWrite(data);

/**
 *  Vậy là xong.
 *  Đến đây bạn có thể hiểu là bulkWrite thực chất cũng chỉ là insert/update/delete/replace (một hoặc nhiều tùy vào operation mà bạn cung cấp)
 *  theo từng dòng mà thôi. 
 *  bulkWrite nhận các operation hợp lý là : insertOne, updateOne, updateMany, deleteOne, deleteMany, replaceOne.
 */
