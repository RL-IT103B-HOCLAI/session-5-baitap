Sửa lỗi Phân tách Chuỗi Mã Phiếu

1. Phân tích lỗi

Dữ liệu ban đầu:

const rawTicketCode = "   med-card-0428-ut   ";

Mã nguồn cũ sử dụng:

rawTicketCode.trim();
rawTicketCode.toUpperCase();

Hai hàm trim() và toUpperCase() không thay đổi trực tiếp chuỗi ban đầu.

Chúng trả về một chuỗi mới.

Do kết quả không được lưu lại nên rawTicketCode vẫn giữ nguyên:

"   med-card-0428-ut   "

Khi đó chương trình tiếp tục thực hiện:

rawTicketCode.startsWith("MED-");

Kết quả là:

false

vì chuỗi vẫn có khoảng trắng ở đầu và vẫn viết bằng chữ thường.

2. Cách sửa

Tạo một biến mới để lưu chuỗi đã được xử lý:

const cleanTicketCode = rawTicketCode.trim().toUpperCase();

Kết quả:

MED-CARD-0428-UT

Sau đó sử dụng cleanTicketCode cho tất cả các thao tác tiếp theo.

3. Phân tích vị trí index

Chuỗi sau khi xử lý:

MED-CARD-0428-UT

Vị trí:

 M  E  D  -  C  A  R  D  -  0  4  2  8  -  U  T
 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15

Mã khoa là CARD, bắt đầu từ index 4.

Do slice() không lấy vị trí kết thúc nên:

cleanTicketCode.slice(4, 8);

sẽ lấy các index:

4, 5, 6, 7

Kết quả:

CARD

4. Bảng Test Cases

Trường hợp kiểm thử

Dữ liệu đầu vào

Kết quả sai thực tế

Kết quả đúng mong đợi

TC01 - Kiểm tra tiền tố

"   med-card-0428-ut   "

isValidPrefix = false vì biến gốc vẫn có khoảng trắng và chữ thường

Sau trim() và toUpperCase(), mã thành "MED-CARD-0428-UT" → isValidPrefix = true

TC02 - Kiểm tra mã khoa và chuỗi in

"   med-card-0428-ut   "

departmentCode có thể sai và displayCode vẫn chứa khoảng trắng/chữ thường

departmentCode = "CARD" và `displayCode = "MED

CARD

0428

UT"`

5. Kết quả đúng

Mã phiếu hợp lệ: true
Khoa điều trị: CARD
Phiếu ưu tiên: true
Chuỗi in phiếu: MED | CARD | 0428 | UT

6. Nguyên tắc cần nhớ

Các phương thức xử lý chuỗi như:

trim()
toUpperCase()
replace()
replaceAll()

không làm thay đổi chuỗi ban đầu.

Cần lưu kết quả:

const cleanTicketCode = rawTicketCode.trim().toUpperCase();

Sau đó sử dụng biến đã làm sạch:

cleanTicketCode.startsWith("MED-");
cleanTicketCode.slice(4, 8);
cleanTicketCode.includes("-UT");
cleanTicketCode.replaceAll("-", " | ");