import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import GenreMovie from "../../components/genre";
import Footer from "../../components/footer";
import axios from "../../hooks/useAxios";
import "./movieGenre.css";
import { useEffect, useState } from "react";

const MovieGenre = () => {
  const nameGenre = useParams().genre;

  const setTitle = (title) => {
    switch (title) {
        case "bi-an":
            return 'Bí ẩn';
        case "chien-tranh":
            return 'Chiến tranh';
        case "chinh-kich":
            return 'Chính kịch';
        case "co-trang":
            return 'Cổ trang';
        case "gia-dinh":
            return 'Gia đình';
        case "gia-truong":
            return 'Giả trưởng';
        case "gay-can":
            return 'Gây Cấn';
        case "phim-hai":
            return 'Phim Hài';
        case "hanh-dong":
            return 'Hành động';
        case "hinh-su":
            return 'Hình sự';
        case "hoat-hinh":
            return 'Hoạt hình';
        case "khoa-hoc-vien-tuong":
            return 'Khoa học viễn tưởng';
        case "kinh-di":
            return 'Kinh dị';
        case "lang-man":
            return 'Lãng mạn';
        case "lich-su":
            return 'Lịch sử';
        case "mien-tay":
            return 'Miền tây';
        case "phim-nhac":
            return 'Phim nhạc';
        case "phieu-luu":
            return 'Phiêu lưu';
        case "tai-lieu":
            return 'Tài Liệu';
        case "tam-ly":
            return 'Tâm Lý';
        case "tinh-cam":
            return 'Tình cảm';
    }
    }

  return (
    <>
      <Navbar id={1} />
      <GenreMovie genre={true} title={setTitle(nameGenre)} api={nameGenre} />
      <Footer />
    </>
  );
};

export default MovieGenre;