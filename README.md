# Những function mà mình hay viết để lấy data từ mongodb theo điều kiện.
- Dùng <b>findOneAndUpdate</b> nhớ thêm <b>{new: true}</b> để nó trả về giá trị vừa mới updated.
- Dùng <b>bulkWrite</b> để thêm/xóa/sửa nhiều documents theo các operation hoặc điều kiện riêng biệt. 