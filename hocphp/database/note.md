# Database

- Cơ sở dữ liệu
- Nơi lưu trữ dữ liệu của ứng dụng phần mềm
- Dễ dàng tra cứu, cập nhật (Truy vấn)

2 loại:

- SQL: Cơ sở dữ liệu quan hệ --> MySQL (MariaDB)
- NoSQL: Cơ sở dữ liệu phi quan hệ

Học cú pháp ngôn ngữ truy vấn SQL

```
Database Server
    - Database 1
        - Table 1
            - Field 1 (Column)
                - Record 1
                - Record 2
                - Record 3
            - Field 2
                - Record 1
                - Record 2
                - Record 3
            - Field 3
                - Record 1
                - Record 2
                - Record 3
            - Field n
        - Table 2
        - Table 3
        - Table n
    - Database 2
    - Database n
```

Kiểu dữ liệu trong MySQL

1. Kiểu số

- int, tinyint, bigint,... --> Số nguyên
- float, double --> Số thực

2. Chuỗi

- char(length): Ký tự
- varchar(length): Chuỗi có độ dài tối đa là length
- text
- mediumtext
- longtext

3. Thời gian

- date
- time
- datetime --> Lưu trữ cả ngày tháng năm và thời gian
- timestamp --> Lưu trữ giống datetime, khác việc tự động cập nhật múi giờ

Lưu ý: Khi làm việc với Database, có 2 bước

1. Tạo cấu trúc Database

- Tạo database
- Tạo các table
- Tạo các field tương ứng với kiểu dữ liệu
- Thiết lập các ràng buộc
- Thiết lập quan hệ

--> Có thể sử dụng công cụ hỗ trợ

2. Thực hiện các truy vấn

- CREATE: Thêm
- UPDATE: Cập nhật
- DELETE: Xóa
- SELECT: Truy vấn lấy dữ liệu (Phức tạp nhất)

--> Học các câu lệnh truy vấn (SQL)

## Toán tử trong SQL

```
>, >=, <, <=, =, <> (Hoặc !=)
AND, OR, NOT
IN
LIKE
IS NULL
BETWEEN
```

## Truy vấn dữ liệu

```
SELECT tencot1, tencot2,... FROM tenbang WHERE dieukien
```

Lưu ý: Nếu muốn chọn tất cả cột --> Khai báo `*` ở phía sau SELECT

## Relationship

- Các kiểu quan hệ trong Database
- Áp dụng khi có từ 2 table trở lên

* Quan hệ 1-1: 1 bản ghi của bảng này sẽ chỉ liên kết tới 1 bản ghi của bảng khác
  Ví dụ: 1 users chỉ có 1 CCCD
* Quan hệ 1-N: 1 bản ghi của bảng này sẽ liên kết tới nhiều bản ghi của bảng khác
  Ví dụ:
  1 users có thể có nhiều cuốn sách
  1 cuốn sách chỉ thuộc 1 user
* Quan hệ N-N: 1 bản ghi của bảng này sẽ liên kết tới nhiều bản ghi của bảng khác và ngược lại
  Ví dụ:
  1 tác giả có thể có nhiều cuốn sách
  1 cuốn sách có thể thuộc nhiều tác giả

Trong SQL muốn thể hiện quan hệ --> Dùng khóa ngoại (Liên kết giữa các bảng)

## Nối bảng

1. Inner Join

```
SELECT column1, column2,...
FROM table1
INNER JOIN table2
ON table1.tencot = table2.tencot
```

2. Left Join

```
SELECT column1, column2,...
FROM table1
LEFT JOIN table2
ON table1.tencot = table2.tencot
```

3. Right Join

```
SELECT column1, column2,...
FROM table1
RIGHT JOIN table2
ON table1.tencot = table2.tencot
```
