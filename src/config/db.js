import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //load biến môi trường từ file .env vào process.env

const connectDB = async () => { //async để kết nối đến database, nếu kết nối thành công thì in ra "Connected to database", nếu kết nối thất bại thì in ra lỗi và thoát process
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }
};

export default connectDB;


//DATABASE
//Database là nơi lưu trữ dữ liệu của ứng dụng, nó giúp chúng ta quản lý và truy xuất dữ liệu một cách hiệu quả.
//Trong ứng dụng này, chúng ta sẽ sử dụng MongoDB làm database để lưu trữ thông tin người dùng. MongoDB
// là một NoSQL database, nó lưu trữ dữ liệu dưới dạng JSON-like documents, giúp chúng ta dễ dàng quản lý
// và mở rộng dữ liệu khi cần thiết. Chúng ta sẽ sử dụng Mongoose để kết nối
// và tương tác với MongoDB trong ứng dụng của mình.
//Các loại database phổ biến hiện nay bao gồm: MySQL, PostgreSQL, MongoDB, Redis, Cassandra, v.v.
// Mỗi loại database có những ưu điểm và nhược điểm riêng, tùy thuộc vào nhu cầu và
// yêu cầu của ứng dụng mà chúng ta sẽ chọn loại database phù hợp để sử dụng.



//1. Các loại quan hệ
//Database quan hệ (Relational Database) là loại database lưu trữ dữ liệu dưới dạng bảng,
// với các hàng và cột. Mỗi bảng sẽ có một khóa chính (primary key)
// để xác định duy nhất mỗi bản ghi trong bảng, và có thể có các khóa ngoại (foreign key)
// để liên kết giữa các bảng với nhau.
// Các database quan hệ phổ biến bao gồm MySQL, PostgreSQL, Oracle, SQL Server, v.v.



//2. Các loại phi quan hệ
//Database phi quan hệ (NoSQL Database) là loại database
// lưu trữ dữ liệu dưới dạng tài liệu, cặp key-value, đồ thị, hoặc cột.
// Các database phi quan hệ thường được sử dụng để
// lưu trữ dữ liệu không có cấu trúc hoặc dữ liệu có cấu trúc linh hoạt,
// và thường có khả năng mở rộng cao hơn so với database quan hệ.
// Các database phi quan hệ phổ biến bao gồm MongoDB, Redis, Cassandra, v.v.



//3. MongoDB là một NoSQL database, nó lưu trữ dữ liệu dưới dạng JSON-like documents,
// giúp chúng ta dễ dàng quản lý và mở rộng dữ liệu khi cần thiết.
// MongoDB sử dụng một mô hình dữ liệu linh hoạt, cho phép chúng ta lưu trữ dữ liệu
// có cấu trúc khác nhau trong cùng một collection, và hỗ trợ các tính năng
// như indexing, replication, sharding, v.v. MongoDB cũng có một cộng đồng lớn
// và nhiều tài liệu hướng dẫn, giúp chúng ta dễ dàng học tập và sử dụng trong các dự án của mình



//*SCHEMA
// Schema là bản thiết kế (khuôn mẫu) mô tả cấu trúc dữ liệu
// quy trình có những trường nào, kiểu dữ liệu gì, bắt buộc hay không
// nếu mà không có bản vẽ => mỗi người xây mỗi kiểu => dữ liệu không đồng nhất => khó quản lý

//Schema trong database là gì
//Schema mô tả:
//Kiểu dữ liệu (String, number, date)
//Bắt buộc hay không
//Có unique hay không
//Có default value hay không...