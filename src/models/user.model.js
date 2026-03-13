//Đây là 1 bản thiết kế 
import moogoose from "mongoose";

const userSchema = new moogoose.Schema({  //Không cần thêm id vì moongoose tự động sinh ra id cho mỗi document
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default moogoose.model("User", userSchema, "users");
//tham số đầu tiên là tên model,
// tham số thứ hai là schema,
// tham số thứ ba là tên collection trong database
// (nếu không có tham số thứ ba thì mongoose sẽ tự động chuyển
// tên model thành số nhiều và viết thường để làm tên collection)


//_v: là version key, được mongoose tự động thêm vào
// mỗi document để quản lý phiên bản của document đó.
// Mỗi khi document được cập nhật, giá trị của _v sẽ tăng lên 1.
// Điều này giúp mongoose kiểm soát việc cập nhật đồng thời
// và tránh xung đột dữ liệu khi có nhiều người dùng cùng cập nhật
// một document. Nếu bạn không muốn sử dụng version key,
// bạn có thể thêm tùy chọn { versionKey: false } vào schema của mình.