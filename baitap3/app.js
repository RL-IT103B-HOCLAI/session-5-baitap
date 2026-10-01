const scheduleCode = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

const parts = scheduleCode.split("-");

const rawDoctor = parts[0];
const rawDepartment = parts[1];
const appointmentTime = parts[2];
const rawRoom = parts[3];

const doctorName = rawDoctor
    .slice(3)
    .replaceAll("_", " ")
    .toLowerCase()
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");

const departmentName = rawDepartment
    .replaceAll("_", " ")
    .toLowerCase()
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");

const roomNumber = rawRoom.slice(6);
const roomName = "Phòng " + roomNumber;

console.log("==========================================");
console.log("       PHÂN CÔNG CA KHÁM BỆNH");
console.log("==========================================");
console.log(`Bác sĩ       : ${doctorName}`);
console.log(`Chuyên khoa  : ${departmentName}`);
console.log(`Giờ khám     : ${appointmentTime}`);
console.log(`Phòng khám   : ${roomName}`);
console.log("==========================================");