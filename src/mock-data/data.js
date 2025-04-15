import xanh_3 from "../assets/numbers/3_xanh.avif";
import xanh_4 from "../assets/numbers/4_xanh.jpeg";
import xanh_5 from "../assets/numbers/5_xanh.jpeg";
import hong_khunglong_4 from "../assets/numbers/4_hong_khunglong.jpeg";
import hong_khunglong_5_1 from "../assets/numbers/5_1_hong_khunglong.jpeg";
import hong_6 from "../assets/numbers/6.avif";
import hong_vit_8 from "../assets/numbers/8_hong_vit.avif";
import hong_7 from "../assets/numbers/7.jpeg";
import hong_vit_5_2 from "../assets/numbers/5_2_hong_vit.jpeg";
import xanh_3_1 from "../assets/numbers/3_1_xanh.jpeg";
import hong_meo_5_3 from "../assets/numbers/5_3_hong_meo.jpeg";
import hong_khunglong_3_1 from "../assets/numbers/3_hong.jpeg";
import hong_khunglong_8 from "../assets/numbers/8_hong_khunglong.jpeg";

const quizs = [
  {
    question: "2 + 1 bằng mấy?",
    options: [xanh_3, xanh_4, xanh_5],
    correctAnswer: 0,
    time: 63019,
    // time: 2000,
  },
  {
    question: "2 + 3 bằng mấy?",
    options: [hong_khunglong_4, hong_khunglong_5_1, hong_6],
    correctAnswer: 1,
    time: 101015,
    // time: 4000,
  },
  {
    question: "5 + 3 bằng mấy?",
    options: [hong_vit_8, hong_7, hong_vit_5_2],
    correctAnswer: 0,
    // time: 6000,
    time: 139070,
  },
  {
    question: "2 + 1 bằng mấy?",
    options: [xanh_3_1, xanh_4, hong_meo_5_3],
    correctAnswer: 0,
    time: 182037,
    // time: 8000,
  },
  {
    question: "2 + 3 bằng mấy?",
    options: [hong_khunglong_3_1, hong_khunglong_4, hong_khunglong_5_1],
    correctAnswer: 2,
    time: 193045,
    // time: 9000,
  },

  {
    question: "5 + 3 bằng mấy?",
    options: [hong_6, hong_khunglong_8, hong_khunglong_4],
    correctAnswer: 1,
    time: 211040, //3:31:40
    // time: 10000,
  },
];
export { quizs };
