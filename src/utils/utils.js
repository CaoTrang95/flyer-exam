export function convertStatus(exam) {
  switch (exam?.status) {
    case 0:
      return "Chưa nộp bài";
    case 1:
      return "Đang chấm điểm";
    case 2:
      return `Đã chấm điểm: ${exam.points}`;
    default:
      break;
  }
}
