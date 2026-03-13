import express from "express";  //thêm type module vào package.json để sử dụng import
import User from "../models/user.model.js"; //import model User từ file user.model.js trong thư mục models
import userModel from "../models/user.model.js";

const router = express();



//các route của API    
router.get("/", (req, res) => { //req làm đại diện cho request từ client, res làm đại diện cho response từ server, dùng để gửi dữ liệu về cho client
    res.send('Hello, World!');
});

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userModel.create({ name, email, password });
        res.status(201).send(
            {
                status: "success",
                message: "Tài khoản được tạo thành công",
                data: user,

            });
    } catch (error) {
        res.status(500).send(
            {
                status: "error",
                message: "Lỗi server, không thể lưu dữ liệu vào database",
                error: error.message,
            });
    }
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

export default router;