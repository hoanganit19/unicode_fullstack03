# Package

## Vấn đề

- Phát triển sản phẩm -> Coding + Thư viện có sẵn
- Sản phẩm lớn lên -> Số lượng thư viện càng nhiều
- Cập nhật phiên bản, xóa thư viện, cài thêm thư viện --> Thủ công, mất thời gian
- Di chuyển sản phẩm (Git) --> Phải mang theo các thư viện --> Nặng, mất thời gian

## Giải pháp

Sử dụng các công cụ quản lý thư viện (Xuất hiện trong hầu hết các ngôn ngữ lập trình)

- JS: npm, yarn,...
- PHP: Composer
- C#: .net framework
- Ruby: rubygems

--> Thao tác với thư viện thông qua câu lệnh (CLI = CommandLine Interface)

Môi trường trong lập trình phần mềm

- Development --> Cần package hỗ trợ
- Test
- Production --> Cần package hỗ trợ

Ví dụ:

- Khi dev sản phẩm có sử dụng scss, cần package sass để hỗ trợ biên dịch từ scss --> css
- Khi build sản phẩm thành production, không cần package sass

==> Package Manager chia thành 2 kiểu cài đặt

- dependencies --> Những package cần thiết để 1 sản phẩm phần mềm hoạt động
- devDependencies --> Những package phục vụ cho việc dev sản phẩm
