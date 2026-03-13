import express from "express";  //thêm type module vào package.json để sử dụng import
import mongoose from "mongoose";
import dotenv from "dotenv";  //thêm dotenv để sử dụng biến môi trường từ file .env

const app = express();

dotenv.config(); //load biến môi trường từ file .env vào process.env

app.use(express.json()); //middleware để parse JSON body từ request


//connect to database
mongoose.connect(process.env.MONGODB_URL).
    then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.error("Error connecting to database", error);
    });


//các route của API    
app.get('/', (req, res) => { //req làm đại diện cho request từ client, res làm đại diện cho response từ server, dùng để gửi dữ liệu về cho client
    res.send('Hello, World!');
});

app.post('/', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.status(201).send(
        {
            status: "success",
            message: "data được lưu vào database",
            // data: {
            //     name,
            //     email,
            //     password
            // }
        }
    )

});

app.put("/:id", (req, res) => {
    const { id } = req.params;
    console.log("ID của người dùng", id);
    //check trong database có tồn tại id này không nếu có thì cập nhật thông tin người dùng với id này, nếu không có thì trả về lỗi
    if (!id) {
        return res.status(400).send(
            {
                status: "error",
                message: "ID người dùng không hợp lệ"
            }
        )
    } else if (isNaN(id)) {
        return res.status(400).send(
            {
                status: "error",
                message: "ID người dùng không hợp lệ"
            }
        )
    };

    const { password } = req.body;
    console.log("Mật khẩu mới", password);
    res.status(200).send(
        {
            status: "success",
            message: "Tài khoản đã được cập nhật thành công"
        }
    )
});


app.delete("/:id", (req, res) => {
    const { id } = req.params;
    console.log("ID của người dùng ", id);
    //check trong database có tồn tại id này không nếu có thì cập nhật thông tin người dùng với id này, nếu không có thì trả về lỗi
    if (!id) {
        return res.status(400).send(
            {
                status: "error",
                message: "ID người dùng không hợp lệ"
            }
        )
    } else if (isNaN(id)) {
        return res.status(400).send(
            {
                status: "error",
                message: "ID người dùng không hợp lệ"
            }
        )
    };


    res.status(200).send(
        {
            status: "success",
            message: "Tài khoản đã xoá thành công"
        }
    )
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


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