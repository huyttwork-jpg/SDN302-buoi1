import express from "express";  //thêm type module vào package.json để sử dụng import
import dotenv from "dotenv";  //thêm dotenv để sử dụng biến môi trường từ file .env
import app from "./app.js"; //import app từ file app.js
import connectDB from "./config/db.js"; //import hàm connectDB từ file db.js trong thư mục config


connectDB(); //kết nối đến database

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});  