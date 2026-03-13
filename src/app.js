import express from "express";  //thêm type module vào package.json để sử dụng import
import userRoutes from "./routes/user.route.js"; //import router từ file user.route.js trong thư mục routes

const app = express();

app.use(express.json()); //middleware để parse JSON body từ request


//các route của API
app.use("/api/v1/users", userRoutes);
// app.use("/api/v2/post", postRoutes);
// app.use("/api/v3/comment", commentRoutes);
// app.use("/api/v4/like", likeRoutes);


export default app;

//req là lấy user truyền xuống cho mình, res là mình trả về cho user

//mình có tất cả những phương thức restfulAPI như:
// GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, CONNECT, TRACE
// nhưng mình sẽ chỉ sử dụng những phương thức phổ biến nhất là GET, POST, PUT, DELETE

//restfulAPI là một kiến trúc để xây dựng các dịch vụ web, nó sử dụng các phương thức HTTP để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên tài nguyên. Mỗi tài nguyên sẽ được đại diện bởi một URL duy nhất và các phương thức HTTP sẽ được sử dụng để tương tác với tài nguyên đó.
//REST = Representational State Transfer là phong cách thiết kế API
//Ví dụ:
// GET /users - lấy danh sách người dùng
// POST /users - tạo một người dùng mới
// PUT /users/:id - cập nhật thông tin người dùng với id cụ thể
// DELETE /users/:id - xóa người dùng với id cụ thể

//4 nguyên tắc cần nhớ (cốt lõi của RESTful API):
//1. Resource-based (tài nguyên): -API xoay quanh các tài nguyên (resource)
//-Resource là 1 danh từ, không phải động từ, vd: user, product, order,... http:3000/api/users
//2. HTTP methods nói lên hành động
//method: ý nghĩa
//GET: lấy dữ liệu
//POST: tạo mới dữ liệu
//PUT: cập nhật dữ liệu (thay thế hoàn toàn)
//PATCH: cập nhật dữ liệu (thay thế một phần)
//DELETE: xóa dữ liệu
//3. Stateless (trạng thái): -Mỗi yêu cầu từ client đến server phải chứa tất cả thông tin cần thiết để server hiểu và xử lý yêu cầu đó. Server không lưu trữ bất kỳ thông tin nào về client giữa các yêu cầu.
//4. Chuẩn response:
//-Status code: 200 Success, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error,...
//-Message: "Success", "Created", "No Content", "Bad Request", "Unauthorized", "Forbidden", "Not Found", "Internal Server Error",...
//-Data: dữ liệu trả về từ server (nếu có)