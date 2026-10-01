const rawTicketCode = " med-rhm-0815-bhyt ";
const examinationFee = 150000;

const cleanTicketCode = rawTicketCode.trim().toUpperCase();

const isValidPrefix = cleanTicketCode.startsWith("MED-");

const departmentCode = cleanTicketCode.slice(4, 7);

const hasInsurance = cleanTicketCode.includes("BHYT");

const ticketNumber = cleanTicketCode.slice(8, 12);

let discount = 0;
let finalFee = examinationFee;

if (hasInsurance) {
    discount = examinationFee * 0.8;
    finalFee = examinationFee - discount;
}

let departmentName = "";

if (departmentCode === "RHM") {
    departmentName = "Răng Hàm Mặt";
} else if (departmentCode === "TAI") {
    departmentName = "Tai Mũi Họng";
} else if (departmentCode === "MAT") {
    departmentName = "Mắt";
} else {
    departmentName = "Không xác định";
}

const line = "=".repeat(35);

console.log(line);
console.log("       PHIẾU TIẾP ĐÓN BỆNH NHÂN");
console.log(line);
console.log(`Mã phiếu       : ${cleanTicketCode}`);
console.log(`Trạng thái     : ${isValidPrefix ? "Hợp lệ" : "Không hợp lệ"}`);
console.log(`Chuyên khoa    : ${departmentCode}`);
console.log(`Tên chuyên khoa: ${departmentName}`);
console.log(`Số thứ tự      : ${ticketNumber}`);
console.log(`BHYT           : ${hasInsurance ? "Có" : "Không"}`);
console.log(`Giá khám       : ${examinationFee.toLocaleString("vi-VN")} VNĐ`);
console.log(`Giảm giá       : ${discount.toLocaleString("vi-VN")} VNĐ`);
console.log(`Phải thanh toán: ${finalFee.toLocaleString("vi-VN")} VNĐ`);
console.log(line);