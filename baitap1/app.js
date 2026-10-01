const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

const cleanAppointmentCode = rawAppointmentCode.trim().toUpperCase();

const isValidPrefix = cleanAppointmentCode.startsWith("MED-");

const departmentCode = cleanAppointmentCode.slice(4, 7);
const appointmentNumber = cleanAppointmentCode.slice(8, 12);

const formattedPatientName = cleanPatientName.trim().toUpperCase();

const isCodeValid = isValidPrefix;

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);