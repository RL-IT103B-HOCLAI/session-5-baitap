Dò vết & Sửa lỗi Cắt chuỗi Mã Vận đơn

1. Phân tích lỗi

Mã phiếu hẹn ban đầu:

"  med-nhi-1024  "

Sau khi sử dụng trim():

"med-nhi-1024"

Chuỗi có các vị trí index:

 M  E  D  -  N  H  I  -  1  0  2  4
 0  1  2  3  4  5  6  7  8  9 10 11

Các vị trí cần lấy:

Tiền tố: MED-

Chuyên khoa: index 4 đến 6 → slice(4, 7)

Số thứ tự: index 8 đến 11 → slice(8, 12)

Lỗi 1: Kiểm tra tiền tố trước khi chuẩn hóa chữ hoa

Mã:

cleanAppointmentCode.startsWith("MED-")

Trong khi dữ liệu là:

med-nhi-1024

JavaScript phân biệt chữ hoa và chữ thường nên kết quả là:

false

Cách sửa:

const cleanAppointmentCode = rawAppointmentCode.trim().toUpperCase();

Sau đó kiểm tra:

cleanAppointmentCode.startsWith("MED-");

Kết quả:

true

Lỗi 2: Cắt sai vị trí số thứ tự

Với chuỗi:

MED-NHI-1024

số 1024 bắt đầu tại index 8 và kết thúc tại index 11.

Do slice() không lấy vị trí kết thúc nên phải sử dụng:

slice(8, 12)

Kết quả:

1024

Nếu sử dụng:

slice(8, 11)

thì chỉ nhận được:

102

và bị mất chữ số cuối 4.

2. Bảng Test Cases

Trường hợp kiểm thử

Dữ liệu đầu vào

Kết quả sai thực tế

Kết quả đúng mong đợi

TC01 - Mã có khoảng trắng và chữ thường

"  med-nhi-1024  "

Kiểm tra startsWith("MED-") trên chuỗi chữ thường cho kết quả false

Sau trim() và toUpperCase(), mã thành "MED-NHI-1024" và kết quả kiểm tra là true

TC02 - Cắt số thứ tự 4 chữ số

"MED-NHI-1024"

Nếu dùng slice(8, 11) thì nhận "102" và bị mất số 4

Dùng slice(8, 12) để nhận đầy đủ "1024"

3. Nguyên tắc sửa lỗi

Thứ tự xử lý đúng:

Dữ liệu thô
    ↓
trim()
    ↓
toUpperCase()
    ↓
startsWith()
    ↓
slice()
    ↓
Hiển thị kết quả

4. Kết quả mong đợi

Bệnh nhân: NGUYỄN VĂN AN
Chuyên khoa: NHI
Số thứ tự tiếp đón: 1024
Trạng thái hợp lệ: true