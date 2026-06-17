# EDUMY - Nền tảng E-learning tích hợp quản lý khóa học và đánh giá trực tuyến

![.NET 8](https://img.shields.io/badge/.NET-8-512BD4?logo=dotnet) ![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![Flutter 3](https://img.shields.io/badge/Flutter-3-02569B?logo=flutter) ![MySQL 8](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql) ![Redis](https://img.shields.io/badge/Redis-7-DC382D?logo=redis) ![Docker](https://img.shields.io/badge/Docker-24-2496ED?logo=docker) ![Nginx](https://img.shields.io/badge/Nginx-1.26-009639?logo=nginx) ![JWT](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens) ![License](https://img.shields.io/badge/license-MIT-green)

---

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Thông tin đề tài](#thông-tin-đề-tài)
- [Bối cảnh & Động lực](#bối-cảnh--động-lực)
- [Mục tiêu đề tài](#mục-tiêu-đề-tài)
- [Đối tượng & Phạm vi nghiên cứu](#đối-tượng--phạm-vi-nghiên-cứu)
- [Khảo sát hệ thống liên quan](#khảo-sát-hệ-thống-liên-quan)
- [Khoảng trống công nghệ & Điểm mới](#khoảng-trống-công-nghệ--điểm-mới)
- [Kiến trúc hệ thống](#kiến-trúc-hệ-thống)
- [Phân tích yêu cầu chức năng](#phân-tích-yêu-cầu-chức-năng)
  - [Authentication Module](#1-authentication-module)
  - [System Management Module](#2-system-management-module)
  - [Payment Module](#3-payment-module)
  - [Course Management Module](#4-course-management-module)
  - [Artificial Intelligence Module](#5-artificial-intelligence-module)
- [Yêu cầu phi chức năng](#yêu-cầu-phi-chức-năng)
- [Thiết kế cơ sở dữ liệu](#thiết-kế-cơ-sở-dữ-liệu)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
  - [Backend - .NET 8](#tầng-xử-lý-backend-với-net-core)
  - [Frontend Web - React Vite](#tầng-giao-diện-frontend-nền-tảng-web-với-react-vite)
  - [Mobile - Flutter](#tầng-giao-diện-frontend-nền-tảng-mobile-với-flutter)
- [Kế hoạch thực hiện](#kế-hoạch-thực-hiện)
- [Liên hệ](#liên-hệ)

---
<a name="giới-thiệu"></a>
## Giới thiệu

**EDUMY** là đề tài khóa luận tốt nghiệp của nhóm sinh viên Khoa Công nghệ Thông tin, Trường Đại học Công Thương Thành phố Hồ Chí Minh (HUIT), với mục tiêu **xây dựng nền tảng E-learning tích hợp quản lý khóa học và đánh giá trực tuyến**.

Trong bối cảnh nền giáo dục toàn cầu đang trải qua giai đoạn chuyển đổi số mạnh mẽ, các hệ thống E-learning dần khẳng định vai trò là xương sống của hạ tầng công nghệ giáo dục. Tuy nhiên, các hệ thống hiện tại thường bị phân mảnh, tách biệt rõ ràng giữa hệ thống quản lý nội dung học tập và nền tảng tổ chức thi cử độc lập, gây ra sự đứt gãy trong quá trình luân chuyển dữ liệu.

EDUMY ra đời nhằm giải quyết bài toán đó bằng kiến trúc **Microservices** hiện đại, kết hợp trải nghiệm Front-end mượt mà với sự khắt khe trong đánh giá năng lực học thuật, mang lại một giải pháp toàn diện cho các cơ sở giáo dục quy mô vừa và nhỏ.

<a name="thông-tin-đề-tài"></a>
## Thông tin đề tài

| Mục | Nội dung |
|------|----------|
| **Tên đề tài** | Xây dựng nền tảng E-learning tích hợp quản lý khóa học và đánh giá trực tuyến |
| **Tên hệ thống** | EDUMY |
| **Loại hình** | Khóa luận tốt nghiệp |
| **Sinh viên thực hiện** | Quang Nhật Hưng (MSSV: 2001230328) |
| **Cộng tác viên** | Nguyễn Châu Kha (MSSV: 2001230359), Nguyễn Văn Anh Tuấn (MSSV: 2001230863) |
| **Giảng viên hướng dẫn** | TS. Nguyễn Thị Bích Ngân |
| **Đơn vị** | Khoa Công nghệ Thông tin — Trường Đại học Công Thương TP.HCM (HUIT) |
| **Thời gian thực hiện** | Tháng 07/2026 – Tháng 11/2026 (5 tháng) |
| **Trang web giới thiệu** | [edumy.nhathungdev.site](https://edumy.nhathungdev.site) |

<a name="bối-cảnh--động-lực"></a>
## Bối cảnh & Động lực

### Thực trạng

Việc dạy và học trực tuyến không còn là giải pháp tình thế mà đã trở thành phương pháp giáo dục tiêu chuẩn song hành cùng mô hình truyền thống. Tuy nhiên, khi đi sâu vào trải nghiệm thực tế, các hệ thống hiện tại đang bộc lộ nhiều vấn đề đáng lo ngại:

1. **Phân mảnh hệ thống**: Các phần mềm thường bị tách biệt rõ ràng giữa hệ thống quản lý nội dung học tập (LMS) và nền tảng tổ chức thi cử độc lập, gây đứt gãy luồng dữ liệu.

2. **Giao diện lạc hậu**: Nhiều hệ thống mã nguồn mở hiện hành sở hữu giao diện Front-end khá cũ kỹ, không chú trọng đến trải nghiệm người dùng (UX/UI).

3. **Nút thắt cổ chai về hiệu năng**: Khi đối mặt với lượng truy cập đồng thời lớn trong các kỳ thi trực tuyến, kiến trúc Back-end của nhiều hệ thống thiếu tính linh hoạt, dẫn đến quá tải, giật lag hoặc mất đồng bộ dữ liệu.

4. **Chi phí vận hành cao**: Các giải pháp Cloud LMS thương mại đi kèm chi phí bản quyền lớn, không phù hợp với các cơ sở đào tạo quy mô vừa và nhỏ.

### Động lực

Việc lựa chọn đề tài xuất phát từ mong muốn vận dụng các kiến thức chuyên sâu về công nghệ phần mềm vào một bài toán thực tế đầy thách thức. Phát triển một sản phẩm công nghệ giáo dục hoàn chỉnh là cơ hội để rèn luyện:

- Tư duy thiết kế kiến trúc hệ thống (System Architecture Design)
- Kỹ năng lập trình Full-stack (Backend + Frontend Web + Mobile)
- Kỹ năng quản trị cơ sở dữ liệu và tối ưu hiệu năng
- Kỹ năng triển khai và vận hành hệ thống (DevOps)

<a name="mục-tiêu-đề-tài"></a>
## Mục tiêu đề tài

### Mục tiêu tổng quát

Nghiên cứu, phân tích, thiết kế và xây dựng thành công nền tảng E-learning **EDUMY** — một hệ thống phần mềm hoàn chỉnh tích hợp liền mạch giữa hai phân hệ cốt lõi là **quản lý khóa học** và **đánh giá trực tuyến**. Hệ thống đảm bảo vận hành ổn định với kiến trúc Back-end vững chắc, có khả năng mở rộng tốt và sở hữu giao diện Front-end hiện đại, thân thiện.

### Mục tiêu cụ thể

1. **Khảo sát và đặc tả yêu cầu**: Trích xuất chính xác các Use case nghiệp vụ của người dùng (Admin, Giảng viên, Học viên).

2. **Thiết kế cơ sở dữ liệu**: Xây dựng mô hình dữ liệu chuẩn hóa, giảm thiểu dư thừa, đảm bảo tính toàn vẹn tham chiếu.

3. **Xây dựng hệ thống API RESTful**: Thiết kế chuẩn giao tiếp giữa Client và Server, đảm bảo bảo mật và hiệu năng.

4. **Phát triển module chức năng**:
   - Module quản lý người dùng và xác thực (Authentication & Authorization)
   - Module quản trị hệ thống (Admin Dashboard)
   - Module quản lý khóa học (CRUD, cấu trúc bài giảng, tài nguyên đa phương tiện)
   - Module đánh giá trực tuyến (đa dạng định dạng câu hỏi, chấm điểm tự động)
   - Module thanh toán (tích hợp cổng thanh toán QR)
   - Module AI (Chatbot RAG, tự động sinh đề thi)

5. **Kiểm thử và triển khai**: Kiểm thử toàn diện các luồng chức năng, triển khai lên môi trường thực tế, đánh giá hiệu năng chịu tải.

<a name="đối-tượng--phạm-vi-nghiên-cứu"></a>
## Đối tượng & Phạm vi nghiên cứu

### Đối tượng nghiên cứu

Ba trụ cột chính của hệ thống giáo dục trực tuyến:

1. **Quy trình nghiệp vụ giáo dục hiện đại**: Quy trình tổ chức lớp học, phương pháp phân phối nội dung bài giảng, chuẩn mực trong kiểm tra đánh giá năng lực.

2. **Nhóm đối tượng người dùng**: Quản trị viên (Admin), Giảng viên (Instructor), Học viên (Student) — phân tích hành vi và kỳ vọng về UX/UI.

3. **Công nghệ nền tảng**: Framework lập trình Web (React), Mobile (Flutter), Backend (.NET 8), kỹ thuật xây dựng kiến trúc Microservices, quản trị cơ sở dữ liệu (MySQL + Redis).

### Phạm vi nghiên cứu

**Phạm vi chức năng**:
- Quản lý tài khoản người dùng (đăng ký, đăng nhập, phân quyền)
- Quản trị vòng đời khóa học (tạo, sửa, xóa, xuất bản)
- Cung cấp không gian tương tác tài liệu học tập (video, PDF, Slide)
- Thiết lập và tổ chức bài thi đánh giá trực tuyến
- Quản lý giao dịch thanh toán và đối soát doanh thu
- Trợ lý ảo AI và tự động sinh đề thi

**Giới hạn** (không nằm trong phạm vi):
- Công cụ họp trực tuyến Video Call thời gian thực
- Thuật toán AI giám sát gian lận thi cử phức tạp

<a name="khảo-sát-hệ-thống-liên-quan"></a>
## Khảo sát hệ thống liên quan

Để định hình kiến trúc và tính năng cốt lõi cho EDUMY, nhóm thực hiện đã khảo sát ba nền tảng E-learning tiêu biểu, đại diện cho ba triết lý thiết kế khác nhau:

### 1. Moodle — LMS Open-source truyền thống

**Ưu điểm**:
- Hệ sinh thái Plugin khổng lồ, cho phép tùy biến sâu
- Phổ biến nhất trong môi trường học thuật
- Cộng đồng người dùng lớn, tài liệu phong phú

**Nhược điểm**:
- Kiến trúc Back-end **Monolithic** thế hệ cũ
- Cồng kềnh, tiêu tốn nhiều tài nguyên Server
- Nút thắt cổ chai (Bottleneck) khi scale đột ngột trong các kỳ thi tập trung
- Giao diện người dùng phức tạp, trải nghiệm rời rạc

### 2. Canvas — Cloud LMS hiện đại

**Ưu điểm**:
- Vận hành trên nền tảng điện toán đám mây
- Thiết kế lấy người dùng làm trung tâm (User-centric Design)
- Hệ thống API phong phú, UI/UX tốt cho giáo dục chính quy

**Nhược điểm**:
- Mô hình SaaS đi kèm **chi phí vận hành rất cao**
- Mã nguồn đóng, hạn chế khả năng can thiệp Database
- Không phù hợp với các tổ chức giáo dục vừa và nhỏ

### 3. Udemy — MOOC Marketplace thương mại

**Ưu điểm**:
- Kiến trúc **Microservices** chịu tải cực tốt
- Hàng triệu luồng Streaming video đồng thời
- Trải nghiệm người dùng (UX) cực kỳ mượt mà

**Nhược điểm**:
- Công cụ kiểm tra đánh giá rất sơ sài (chủ yếu trắc nghiệm đơn giản)
- Thiếu tính khắt khe, minh bạch trong đánh giá
- Không có cơ sở giám sát quá trình học tập theo chuẩn hàn lâm

<a name="khoảng-trống-công-nghệ--điểm-mới"></a>
## Khoảng trống công nghệ & Điểm mới

### Khoảng trống cần giải quyết

1. **Sự đánh đổi giữa trải nghiệm và tính chuyên sâu**: Hệ thống UX mượt (Udemy) thì đánh giá sơ sài; hệ thống đánh giá tốt (Moodle) thì UX phức tạp.

2. **Chi phí và rào cản vận hành**: Sự cồng kềnh trong quản trị hạ tầng (Moodle) hay rào cản chi phí bản quyền (Canvas) khiến các cơ sở đào tạo quy mô vừa và nhỏ khó tiếp cận chuyển đổi số toàn diện.

3. **Nút thắt cổ chai về dữ liệu thi cử**: Trong các bài thi đồng thời quy mô lớn, hệ thống chưa được tối ưu truy vấn thường xuyên gặp Deadlock hoặc Timeout.

### Điểm mới của EDUMY

1. **Thiết kế tinh gọn, lai tạo ưu điểm**: Kết hợp trải nghiệm Front-end mượt mà (như Udemy) với sự khắt khe trong đánh giá năng lực (như Moodle).

2. **Chuẩn hóa giao tiếp hệ thống**: Áp dụng chặt chẽ kiến trúc RESTful API, Front-end và Back-end hoạt động độc lập, dễ dàng đóng gói Docker và mở rộng theo lưu lượng thực tế.

3. **Luồng đánh giá tích hợp (Integrated Flow)**: Module kiểm tra đánh giá trực tuyến được liên kết trực tiếp vào tiến trình học, tự động hóa lưu trữ điểm số với độ toàn vẹn dữ liệu cao nhất.

4. **Chi phí tối ưu**: Tận dụng công nghệ mã nguồn mở và miễn phí, phù hợp với ngân sách của các cơ sở đào tạo vừa và nhỏ.

<a name="kiến-trúc-hệ-thống"></a>
## Kiến trúc hệ thống

EDUMY được thiết kế theo kiến trúc **Microservices**, chia nhỏ hệ thống thành các dịch vụ nghiệp vụ hoạt động hoàn toàn độc lập, giúp bảo trì và mở rộng thuận lợi hơn so với khối mã nguồn Monolithic truyền thống.

### Sơ đồ kiến trúc tổng thể

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                         │
│                                                              │
│  ┌─────────────────┐    ┌──────────────────────────────────┐ │
│  │   Web Browser    │    │        Mobile App (Flutter)      │ │
│  │  (React + Vite)  │    │     iOS & Android (Native)       │ │
│  │  Admin/Instructor│    │          Student                  │ │
│  └────────┬─────────┘    └──────────────┬───────────────────┘ │
└───────────┼─────────────────────────────┼─────────────────────┘
            │ HTTPS / RESTful API         │ HTTPS / RESTful API
┌───────────▼─────────────────────────────▼─────────────────────┐
│                      API GATEWAY LAYER                        │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                     Nginx Server                         │  │
│  │  • SSL/TLS Termination    • Load Balancing (Round-Robin) │  │
│  │  • Rate Limiting          • Request Routing              │  │
│  │  • Reverse Proxy          • Static File Serving          │  │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────┬───────────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                     MICROSERVICES LAYER                       │
│                                                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌─────────┐ │
│  │  Auth API  │  │ System API │  │ Payment API│  │Course   │ │
│  │  .NET 8    │  │  .NET 8    │  │  .NET 8    │  │Mgmt API │ │
│  │  JWT+RBAC  │  │  Admin     │  │  VNPAY QR  │  │ .NET 8  │ │
│  └─────┬──────┘  └─────┬──────┘  └──────┬─────┘  └────┬────┘ │
│        │               │                │             │      │
│        └───────────────┼────────────────┼─────────────┘      │
│                        │                │                    │
│  ┌─────────────────────┴────────────────┴──────────────┐     │
│  │                    AI Service                        │     │
│  │        Chatbot RAG + Auto-generate Exam             │     │
│  │        (Async Processing via Message Queue)         │     │
│  └────────────────────────────────────────────────────┘     │
└───────────────────────────┬───────────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                      DATA LAYER                               │
│                                                               │
│  ┌─────────────────────┐    ┌─────────────────────────────┐   │
│  │      MySQL 8        │    │       Redis 7               │   │
│  │  (Relational DB)    │    │   (In-Memory Cache)         │   │
│  │                     │    │                             │   │
│  │  • Users & Profiles │    │  • Session State            │   │
│  │  • Courses & Lessons│    │  • Exam Draft State         │   │
│  │  • Question Banks   │    │  • Static Category Cache    │   │
│  │  • Transactions     │    │  • Rate Limiting Counters   │   │
│  │  • Quiz Results     │    │                             │   │
│  └─────────────────────┘    └─────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                 Cloud Storage                           │  │
│  │       Video (MP4), PDF, Slide, Images                   │  │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

### Nguyên lý hoạt động

1. **API Gateway (Nginx)** là điểm tiếp nhận duy nhất, chịu trách nhiệm:
   - Giải mã SSL/TLS cho toàn bộ request
   - Phân bổ đều lưu lượng bằng Load Balancing
   - Thiết lập Rate Limiting chống DDoS/Brute-force
   - Định tuyến request đến đúng Microservice

2. **Các Microservice** giao tiếp với nhau qua RESTful API nội bộ, đảm bảo hệ thống vận hành trơn tru ngay cả khi một service gặp sự cố.

3. **AI Service** hoạt động bất đồng bộ qua Message Queue để tránh gián đoạn trải nghiệm người dùng khi xử lý các tác vụ nặng.

<a name="phân-tích-yêu-cầu-chức-năng"></a>
## Phân tích yêu cầu chức năng

Hệ thống EDUMY được chia thành 5 module chức năng chính, mỗi module đảm nhận một nhóm nghiệp vụ riêng biệt trong kiến trúc Microservices.

<a name="1-authentication-module"></a>
### 1. Authentication Module

**Vai trò**: Người gác cổng của hệ thống, chịu trách nhiệm định danh người dùng và cấp phát quyền truy cập trước khi request được chuyển tiếp đến các service nghiệp vụ khác.

**Cơ chế xác thực**: Token-based Authentication sử dụng **JSON Web Token (JWT)**. Khi xác thực thành công, hệ thống trả về Access Token (thời gian ngắn) và Refresh Token (thời gian dài), cho phép Client đính kèm vào Header của các lần gọi API tiếp theo.

**Phân quyền**: Mô hình **Role-Based Access Control (RBAC)** với 3 vai trò:

| Vai trò | Quyền hạn chính |
|---------|----------------|
| **Quản trị viên (Admin)** | Quản lý người dùng, phê duyệt giảng viên, CRUD danh mục, thống kê toàn hệ thống, cấu hình API |
| **Giảng viên (Instructor)** | CRUD khóa học, quản lý ngân hàng câu hỏi, tạo đề thi, chấm điểm, theo dõi doanh thu |
| **Học viên (Student)** | Xem khóa học, làm bài kiểm tra, theo dõi tiến độ, chat với AI |

**Chức năng chi tiết**:

| Chức năng | Mô tả |
|-----------|-------|
| Đăng ký nội bộ | Email + Mật khẩu, gửi mã OTP kích hoạt tài khoản |
| Đăng nhập nội bộ | Email + Mật khẩu, trả về JWT |
| SSO | Đăng nhập qua Google Workspace / Microsoft Account |
| Quên mật khẩu | Gửi email reset password |
| Đổi mật khẩu | Yêu cầu mật khẩu cũ + mật khẩu mới |
| Refresh Token | Cấp lại Access Token khi hết hạn |
| Đăng xuất | Thu hồi Refresh Token, xóa session |

**Luồng xác thực**:
```
Client                    Auth Service                    Database
  │                          │                              │
  │── POST /api/auth/login ──│                              │
  │   {email, password}      │── Verify credentials ────────│
  │                          │                              │
  │                          │◄── User found ───────────────│
  │                          │                              │
  │                          │── Generate JWT ──────────────│
  │                          │  (Access + Refresh Token)    │
  │                          │                              │
  │◄── 200 OK ──────────────│                              │
  │   {accessToken,          │                              │
  │    refreshToken,         │                              │
  │    user, role}           │                              │
```

<a name="2-system-management-module"></a>
### 2. System Management Module

**Vai trò**: Trung tâm điều khiển dành riêng cho Admin, tập trung vào việc duy trì sự ổn định của hệ thống, quản lý thông tin định danh cấp cao và thiết lập tham số vận hành chung.

| Chức năng | Mô tả |
|-----------|-------|
| Quản lý người dùng | Xem, tìm kiếm, khóa/mở khóa tài khoản |
| Phê duyệt giảng viên | Workflow: Gửi yêu cầu → Xét duyệt → Approve/Reject kèm lý do |
| CRUD danh mục | Tạo/sửa/xóa danh mục khóa học, tags |
| Admin Dashboard | Biểu đồ tổng quan: số người dùng, khóa học, doanh thu |
| Nhật ký hoạt động | Audit log: ghi lại toàn bộ thao tác quan trọng |
| Phân quyền RBAC | Thiết lập quyền chi tiết cho từng vai trò |
| Cấu hình hệ thống | API config, backup settings, tham số vận hành |

**Workflow phê duyệt giảng viên**:
```
Học viên               System                 Admin
  │                      │                      │
  │── Yêu cầu nâng cấp ──│                      │
  │   (kèm hồ sơ)        │── Thông báo ─────────│
  │                      │                      │
  │                      │◄── Duyệt/Từ chối ────│
  │                      │                      │
  │◄── Thông báo kết quả─│                      │
  │   (Approved/Rejected)│                      │
```

<a name="3-payment-module"></a>
### 3. Payment Module

**Vai trò**: Dịch vụ tài chính độc lập, chịu trách nhiệm quản lý toàn bộ vòng đời giao dịch từ khởi tạo đơn hàng, kết nối cổng thanh toán bên thứ ba, đến đối soát doanh thu.

**Yêu cầu đặc thù**: Tính nhất quán dữ liệu tuyệt đối (ACID). Khi giao dịch thành công, Payment Module phát tín hiệu đến Course Module để tiến hành mở khóa (Enroll) nội dung cho học viên.

| Chức năng | Mô tả |
|-----------|-------|
| Khởi tạo đơn hàng | Tạo Order ID duy nhất, lưu thông tin giao dịch |
| Thanh toán QR Code | Tích hợp VNPAY, tạo mã QR, xử lý bất đồng bộ |
| Xử lý Webhook/IPN | Nhận callback từ cổng thanh toán, cập nhật trạng thái |
| Quản lý giao dịch | Lịch sử mua hàng, tra cứu giao dịch |
| Đối soát doanh thu | Thống kê doanh thu theo tháng/quý/năm |
| Yêu cầu rút tiền | Giảng viên yêu cầu rút tiền về tài khoản ngân hàng |
| Tỷ lệ ăn chia | Cấu hình % hoa hồng nền tảng / giảng viên |

**Luồng thanh toán**:
```
Học viên              Payment Service             VNPAY            Course Service
  │                        │                       │                    │
  │── Mua khóa học ────────│                       │                    │
  │                        │── Tạo Order ──────────│                    │
  │                        │   (Pending)           │                    │
  │◄── Mã QR ──────────────│                       │                    │
  │                        │                       │                    │
  │── Quét QR thanh toán ──┼───────────────────────│                    │
  │                        │                       │                    │
  │                        │◄── Webhook: Success ──│                    │
  │                        │                       │                    │
  │                        │── Cập nhật Order ─────│                    │
  │                        │   (Completed)         │                    │
  │                        │                       │                    │
  │                        │── Gọi API Enroll ─────┼────────────────────│
  │                        │                       │                    │
  │◄── Thông báo thành công────────────────────────┼────────────────────│
```

<a name="4-course-management-module"></a>
### 4. Course Management Module

**Vai trò**: Trái tim của toàn bộ nền tảng, quản lý vòng đời trọn vẹn của khóa học — từ tải lên tài nguyên, cấu hình học liệu, đến tương tác bài giảng và thực hiện đánh giá năng lực.

#### Quản lý khóa học

**Vòng đời khóa học**:
```
Draft ──→ Review ──→ Published ──→ Archived
  ↑          │            │
  └──────────┘            │
  (Chỉnh sửa)      Học viên truy cập
```

| Chức năng | Mô tả |
|-----------|-------|
| CRUD khóa học | Tạo/sửa/xóa khóa học với metadata đầy đủ |
| Cấu trúc học liệu | Tổ chức theo cấp bậc Section → Lesson |
| Đa phương tiện | Hỗ trợ Video MP4, PDF, Slide, nội dung văn bản |
| Quản lý trạng thái | Draft, Review, Published, Archived |
| Cloud Storage | Liên kết lưu trữ tệp video dung lượng lớn |

#### Ngân hàng câu hỏi

**4 định dạng câu hỏi**:

| Định dạng | Chấm điểm | Ví dụ |
|-----------|-----------|-------|
| Trắc nghiệm 1 đáp án | Tự động | A, B, C, D chỉ 1 đáp án đúng |
| Trắc nghiệm nhiều đáp án | Tự động | Chọn tất cả đáp án đúng |
| Đúng / Sai | Tự động | True/False |
| Tự luận (Essay) | Thủ công | Viết đoạn văn, giảng viên chấm |

| Chức năng | Mô tả |
|-----------|-------|
| CRUD câu hỏi | Tạo/sửa/xóa từng câu hỏi |
| Import/Export | Nhập xuất hàng loạt (CSV/Excel) |
| Gán thang điểm | Cấu hình điểm cho từng câu hỏi |
| Phân loại | Gán danh mục, tags, độ khó |

#### Bài kiểm tra & Chấm điểm

| Chức năng | Mô tả |
|-----------|-------|
| Tạo đề thi | Chọn câu hỏi từ ngân hàng, cấu hình tham số |
| Bộ đếm thời gian thực | Đếm ngược, tự động thu bài khi hết giờ |
| Xáo trộn đề | Random thứ tự câu hỏi và đáp án |
| Tự động lưu nháp | Lưu bài làm theo từng phút |
| Chấm tự động | Trắc nghiệm + Đúng/Sai: đối chiếu đáp án tức thời |
| Chấm thủ công | Tự luận: giảng viên chấm kèm phản hồi |
| Thống kê kết quả | Báo cáo điểm số, biểu đồ phân tích |

<a name="5-artificial-intelligence-module"></a>
### 5. Artificial Intelligence Module

**Vai trò**: Dịch vụ nâng cao hoạt động độc lập, ứng dụng Machine Learning và NLP để giảm tải công việc thủ công cho giảng viên, mang đến trải nghiệm học tập cá nhân hóa 24/7 cho học viên.

**Cơ chế hoạt động**: Các tác vụ AI giao tiếp với hệ thống lõi qua cơ chế **bất đồng bộ** (Message Queue), đảm bảo không làm gián đoạn trải nghiệm chung của nền tảng.

#### Tính năng 1: Trợ lý ảo học tập (Chatbot RAG)

- **Công nghệ**: Retrieval-Augmented Generation (RAG)
- **Cách hoạt động**: Khi học viên đặt câu hỏi, Chatbot truy xuất tài liệu khóa học có liên quan (PDF, Slide, Transcript), đọc hiểu ngữ cảnh và sinh câu trả lời chính xác.
- **Lợi ích**: Hỗ trợ 24/7, giải đáp theo đúng nội dung khóa học, không trả lời chung chung.

#### Tính năng 2: Tự động tạo bài kiểm tra

- **Công nghệ**: NLP, Text Summarization, Question Generation
- **Cách hoạt động**:
  1. Giảng viên tải lên tài liệu (PDF, Slide) hoặc file Transcript video
  2. Hệ thống phân tích ngữ nghĩa, trích xuất ý chính
  3. Tự động sinh câu hỏi trắc nghiệm kèm đáp án
- **Lợi ích**: Tiết kiệm thời gian soạn đề, câu hỏi bám sát nội dung bài giảng

| Chức năng | Mô tả |
|-----------|-------|
| Chatbot hỏi đáp | Trò chuyện theo ngữ cảnh khóa học |
| Trích xuất ý chính | Phân tích tài liệu, tóm tắt nội dung |
| Sinh câu hỏi trắc nghiệm | Tự động tạo câu hỏi kèm đáp án |
| Xử lý bất đồng bộ | Queue tác vụ, không block UI |
| Tích hợp đa nguồn | PDF, Slide, Video Transcript |

<a name="yêu-cầu-phi-chức-năng"></a>
## Yêu cầu phi chức năng

Để nền tảng EDUMY vận hành ổn định trong môi trường thực tế, hệ thống phải tuân thủ nghiêm ngặt các tiêu chuẩn sau:

### Hiệu năng (Performance)

| Tiêu chí | Mục tiêu | Ghi chú |
|----------|----------|---------|
| Thời gian phản hồi API thông thường | < 2 giây | Áp dụng cho đa số API (CRUD, tìm kiếm) |
| Thời gian phản hồi API nộp bài | < 500ms | Yêu cầu tốc độ cao, đặc biệt trong thi cử |
| Thời gian xử lý AI (tạo đề thi) | < 30 giây | Tác vụ bất đồng bộ, không gián đoạn UI |

### Khả năng chịu tải (Scalability)

| Tiêu chí | Mục tiêu |
|----------|----------|
| Người dùng đồng thời | Tối thiểu 1.000 người dùng |
| Kiến trúc mở rộng | Horizontal Scaling — từng service scale độc lập |
| Assessment Engine | Ưu tiên scale trước trong các kỳ thi tập trung |

### Bảo mật (Security)

| Biện pháp | Mô tả |
|-----------|-------|
| HTTPS (SSL/TLS) | Mã hóa toàn bộ giao tiếp Client-Server |
| JWT Authentication | Token-based, có thời hạn, hỗ trợ Refresh Token |
| Bcrypt Hash | Mật khẩu được băm trước khi lưu vào Database |
| RBAC | Role-Based Access Control cho 3 vai trò |
| Rate Limiting | Giới hạn request tại API Gateway chống DDoS/Brute-force |
| Input Validation | Kiểm tra đầu vào ở cả Client và Server |

### Độ tin cậy (Reliability)

| Tiêu chí | Mục tiêu |
|----------|----------|
| Uptime | Hướng tới 99.9% |
| Tính nhất quán | ACID cho giao dịch thanh toán |
| Sao lưu | Automated Backup định kỳ |
| Phục hồi | Disaster Recovery Plan |

### Khả năng bảo trì (Maintainability)

| Tiêu chí | Mô tả |
|----------|-------|
| Containerization | Docker cho toàn bộ service |
| CI/CD | Sẵn sàng tích hợp pipeline tự động |
| API Documentation | RESTful API chuẩn, dễ mở rộng |
| Logging | Audit log tập trung, truy vết lỗi |

### Trải nghiệm người dùng (UX)

| Tiêu chí | Mô tả |
|----------|-------|
| Responsive | Tối ưu cho Desktop, Tablet, Mobile |
| Cross-browser | Hoạt động trên Chrome, Firefox, Safari, Edge |
| Dark/Light Mode | Hỗ trợ giao diện tối/sáng |
| Loading State | Hiệu ứng loading, skeleton screen |

<a name="thiết-kế-cơ-sở-dữ-liệu"></a>
## Thiết kế cơ sở dữ liệu

Chiến lược quản trị dữ liệu của hệ thống được phân tầng rõ ràng để vừa đảm bảo tốc độ truy xuất nhanh, vừa giữ tính toàn vẹn của dữ liệu giao dịch.

### Tầng 1: MySQL — Cơ sở dữ liệu quan hệ

**Vai trò**: Lưu trữ vĩnh viễn dữ liệu có cấu trúc phức tạp.

**Công nghệ**: MySQL 8 với Entity Framework Core (ORM) — tự động hóa ánh xạ mã nguồn vào bảng dữ liệu.

**Dữ liệu lưu trữ**:
- Hồ sơ người dùng (User, Role, Profile)
- Cấu trúc khóa học (Course, Section, Lesson)
- Ngân hàng câu hỏi (QuestionBank, Question, Answer)
- Bài kiểm tra (Quiz, QuizAttempt, QuizResult)
- Giao dịch thanh toán (Order, Transaction, Withdrawal)
- Danh mục hệ thống (Category, Tag)

### Tầng 2: Redis — Bộ nhớ đệm In-Memory

**Vai trò**: Lưu trữ tạm thời trên RAM để giảm tải áp lực đọc ghi cho MySQL, cung cấp thời gian phản hồi gần như tức thời.

**Dữ liệu lưu trữ**:
- Danh mục hệ thống tĩnh (categories, tags)
- Trạng thái bài thi đang làm dở (draft answers, timer)
- Session và Token blacklist
- Rate Limiting counters
- Cache truy vấn thường xuyên

### Tầng 3: Cloud Storage

**Vai trò**: Lưu trữ tệp tin đa phương tiện dung lượng lớn.

**Dữ liệu lưu trữ**:
- Video bài giảng (MP4)
- Tài liệu PDF, Slide
- Hình ảnh, thumbnail khóa học

**Cơ chế**: MySQL chỉ lưu URL trỏ đến tệp tin trên Cloud Storage, giúp tiết kiệm không gian máy chủ nội bộ.

<a name="công-nghệ-sử-dụng"></a>
## Công nghệ sử dụng

Ngăn xếp công nghệ (Tech Stack) được lựa chọn dựa trên tiêu chí: hiệu năng cao, tốc độ phát triển nhanh, tính ổn định cho môi trường giáo dục quy mô lớn.

<a name="tầng-xử-lý-backend-với-net-core"></a>
### Tầng xử lý Backend với .NET Core

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| .NET | 8 | Nền tảng Backend Microservices |
| C# | 12 | Ngôn ngữ lập trình |
| Entity Framework Core | 8 | ORM, tự động ánh xạ Database |
| ASP.NET Core Web API | 8 | Xây dựng RESTful API |
| System.IdentityModel.Tokens.Jwt | — | Xử lý JWT Authentication |
| BCrypt.Net | — | Băm mật khẩu |
| Docker | 24+ | Containerization |

**Lý do chọn .NET 8**:
- Hiệu năng xử lý luồng dữ liệu vượt trội nhờ Garbage Collection tiên tiến
- Ngôn ngữ C# mang tính chặt chẽ về kiểu dữ liệu, mô hình OOP hoàn chỉnh
- Khả năng xử lý đa luồng (Concurrency) giúp tiếp nhận hàng ngàn lượt nộp bài cùng lúc
- Hệ sinh thái thư viện phong phú, hỗ trợ mạnh từ Microsoft

<a name="tầng-giao-diện-frontend-nền-tảng-web-với-react-vite"></a>
### Tầng giao diện Frontend nền tảng Web với React Vite

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| React | 18 | Thư viện xây dựng giao diện SPA |
| Vite | 5 | Công cụ biên dịch, HMR |
| TypeScript | 5 | Kiểu dữ liệu tĩnh |
| React Router | 6 | Điều hướng SPA |
| Axios | — | HTTP Client |
| Chart.js / Recharts | — | Biểu đồ Dashboard |

**Lý do chọn React + Vite**:
- Kiến trúc SPA (Single Page Application) giúp giao diện phản hồi nhanh, không tải lại trang
- Vite mang lại tốc độ biên dịch cực nhanh và Hot Module Replacement
- Tối ưu hóa hiệu suất làm việc với các trang quản trị chứa biểu đồ phức tạp

<a name="tầng-giao-diện-frontend-nền-tảng-mobile-với-flutter"></a>
### Tầng giao diện Frontend nền tảng Mobile với Flutter

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| Flutter | 3 | Framework Mobile đa nền tảng |
| Dart | 3 | Ngôn ngữ lập trình |
| Provider / Riverpod | — | Quản lý trạng thái |
| video_player | — | Phát video bài giảng |
| http / dio | — | HTTP Client |

**Lý do chọn Flutter**:
- Biên dịch trực tiếp thành ứng dụng Native cho cả iOS và Android
- Công cụ kết xuất đồ họa độc lập (Skia), hiển thị sắc nét trên mọi thiết bị
- Quản lý trạng thái cục bộ tuyệt vời, xử lý trơn tru video và bài kiểm tra
- Hot Reload giúp tăng tốc phát triển

### Tóm tắt Tech Stack

| Thành phần | Công nghệ |
|------------|-----------|
| Backend Framework | .NET 8 (ASP.NET Core Web API) |
| Ngôn ngữ Backend | C# 12 |
| ORM | Entity Framework Core 8 |
| Frontend Web | React 18 + Vite + TypeScript |
| Mobile | Flutter 3 + Dart |
| Database | MySQL 8 |
| Cache | Redis 7 |
| API Gateway | Nginx 1.26 |
| Container | Docker 24+ |
| Authentication | JWT + Bcrypt |
| Payment Gateway | VNPAY QR Code |
| AI | RAG (Retrieval-Augmented Generation), NLP |
| Storage | Cloud Storage |

<a name="kế-hoạch-thực-hiện"></a>
## Kế hoạch thực hiện

Quá trình xây dựng nền tảng EDUMY được chia thành 5 giai đoạn, kéo dài 5 tháng (07/2026 – 11/2026).

### Giai đoạn 1: Thiết lập nền tảng (Tháng 7, 2026)

| Công việc | Mô tả |
|-----------|-------|
| Thiết lập Repository | Git, branching strategy (Git Flow) |
| Thiết lập Docker | Docker Compose cho môi trường Dev |
| Cấu hình CI/CD | GitHub Actions, tự động build/test |
| Thiết kế Database | ERD, migration scripts, seeding data |
| Thiết lập Nginx | Cấu hình API Gateway, SSL |
| Tài liệu API | Swagger/OpenAPI cho các endpoint |

### Giai đoạn 2: Authentication & System Management (Tháng 8, 2026)

| Module | Công việc |
|--------|-----------|
| Auth | Đăng ký/đăng nhập, JWT, OTP, SSO, RBAC |
| Auth | Refresh Token, Quên mật khẩu, Đăng xuất |
| System | Quản lý người dùng (CRUD), khóa/mở khóa |
| System | Workflow phê duyệt giảng viên |
| System | Admin Dashboard (biểu đồ cơ bản) |
| System | CRUD danh mục, nhật ký hoạt động |

### Giai đoạn 3: Course Management & Assessment (Tháng 9, 2026)

| Module | Công việc |
|--------|-----------|
| Course | CRUD khóa học, quản lý vòng đời |
| Course | Cấu trúc Section → Lesson |
| Course | Upload video/PDF/Slide, Cloud Storage |
| Assessment | Ngân hàng câu hỏi (4 định dạng) |
| Assessment | Import/Export câu hỏi |
| Assessment | Tạo đề thi, cấu hình tham số |
| Assessment | Bộ đếm thời gian thực, tự động lưu nháp |
| Assessment | Chấm điểm tự động + thủ công |
| Assessment | Thống kê và báo cáo kết quả |

### Giai đoạn 4: Payment, AI & Frontend (Tháng 10, 2026)

| Module | Công việc |
|--------|-----------|
| Payment | Tích hợp VNPAY QR Code |
| Payment | Xử lý Webhook/IPN, quản lý giao dịch |
| Payment | Đối soát doanh thu, rút tiền |
| AI | Xây dựng Chatbot RAG |
| AI | Tự động sinh đề thi từ tài liệu |
| AI | Xử lý bất đồng bộ (Message Queue) |
| Frontend | React: trang Admin, Instructor Dashboard |
| Frontend | React: quản lý khóa học, ngân hàng câu hỏi |
| Frontend | React: biểu đồ thống kê, form phức tạp |
| Mobile | Flutter: đăng nhập, danh sách khóa học |
| Mobile | Flutter: xem video, làm bài kiểm tra |
| Mobile | Flutter: Chatbot AI, theo dõi tiến độ |

### Giai đoạn 5: Kiểm thử & Triển khai (Tháng 11, 2026)

| Công việc | Mô tả |
|-----------|-------|
| Unit Test | Kiểm thử từng module riêng lẻ |
| Integration Test | Kiểm thử luồng liên module |
| Load Test | Đánh giá hiệu năng với 1000+ người dùng đồng thời |
| Security Test | Kiểm tra bảo mật, xác thực, phân quyền |
| Bug Fix | Sửa lỗi, tối ưu hiệu năng |
| Triển khai Production | Deploy lên server thực tế |
| Tài liệu hướng dẫn | Hướng dẫn sử dụng cho Admin, Instructor, Student |
| Viết báo cáo | Hoàn thiện luận văn tốt nghiệp |
| Chuẩn bị bảo vệ | Slide, demo, Q&A |

<a name="liên-hệ"></a>
## Liên hệ

Mọi thắc mắc, góp ý về đề tài EDUMY, xin vui lòng liên hệ:

| Kênh | Thông tin |
|------|-----------|
| **Email** | quangnhathung2005@gmail.com |
| **Điện thoại** | 0838557433 |
| **Địa chỉ** | 77 Bùi Xuân Phái, Phường Phú Mỹ Hưng, Quận 7, TP.HCM |
| **Website** | [edumy.nhathungdev.site](https://edumy.nhathungdev.site) |
| **Giờ làm việc** | Thứ 2 – Thứ 6: 8:00 – 18:00, Thứ 7: 8:00 – 12:00 |

---

## Bản quyền

© 2026 EdumyVietNam. All rights reserved.

**Đề tài khóa luận tốt nghiệp** — Khoa Công nghệ Thông tin, Trường Đại học Công Thương Thành phố Hồ Chí Minh (HUIT)

*Made by Quang Nhat Hung*
