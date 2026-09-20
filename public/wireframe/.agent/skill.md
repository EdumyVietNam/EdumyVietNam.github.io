# EDUMY — UI Design Prototype

> Bộ **prototype giao diện thuần HTML/CSS** dùng để thiết kế, định hình và kiểm thử giao diện web của nền tảng học trực tuyến **EDUMY** trước khi triển khai thực tế.

---

## Mục lục

- [1. Dự án này để làm gì?](#1-dự-án-này-để-làm-gì)
- [2. Công nghệ](#2-công-nghệ)
- [3. Cấu trúc thư mục](#3-cấu-trúc-thư-mục)
- [4. Hệ thống thiết kế (Design tokens)](#4-hệ-thống-thiết-kế-design-tokens)
- [5. Quy tắc của dự án (Rules)](#5-quy-tắc-của-dự-án)
- [6. Cách thao tác (Workflow)](#6-cách-thao-tác-workflow)
- [7. Điểm cần chú ý (Notes)](#7-điểm-cần-chú-ý)

---

## 1. Dự án này để làm gì?

- Là nơi tập trung thiết kế **toàn bộ giao diện (UI)** của nền tảng EDUMY dưới dạng **prototype tĩnh**.
- Dùng để **định hình và validate** (xác minh) giao diện trước khi code phần frontend thật, giảm rủi ro phải chỉnh sửa layout về sau.
- Mỗi màn hình là **một file HTML độc lập**, có thể mở trực tiếp bằng trình duyệt mà **không cần** build, bundle hay chạy server.
- **Không phải** dự án React / Vue / Angular / backend. Đây **chỉ** là bản vẽ UI bằng HTML + CSS.

---

## 2. Công nghệ

| Thành phần        | Công nghệ được dùng                              |
| ----------------- | ------------------------------------------------ |
| Ngôn ngữ đánh dấu | **HTML5** (HTML ngữ nghĩa)                       |
| Ngôn ngữ kiểu     | **CSS3 thuần**, không preprocessor (Sass/Less)   |
| Script            | **Không dùng JavaScript** (trừ khi được yêu cầu) |
| Framework UI      | Không dùng (React, Vue, Angular, Svelte…)        |
| Build tools       | Không dùng (không npm, không bundler)            |

> **Nguyên tắc cốt lõi:** chỉ HTML + CSS. Muốn có tương tác động thì phải được yêu cầu `explicitly`.

---

## 3. Cấu trúc thư mục

```structure
Wireframe.dev/
├── index.html                     # Hub điều hướng tới mọi màn hình
├── README.md                      # File này
├── .gitignore                     # Bỏ qua .vscode, …
└── shared/                        # TÀI SẢN DÙNG CHUNG (không nhân bản)
    ├── Constants/
    │   ├── color_desc.xlsx        # Bảng màu + mô tả ứng dụng
    │   ├── Headings.pdf           # Thang typography tiêu đề
    │   └── Body.pdf               # Thang typography nội dung
    ├── buttons/
    │   ├── primary-button.html
    │   ├── secondary-button.html
    │   ├── outline-button.html
    │   └── icon-button.html
    ├── layout/
    │   ├── navbar.html
    │   └── footer.html
    ├── icons/                     # 300+ icon SVG (phân theo loại)
    │   ├── Arrow/ Calendar/ Communication/ Edit/ Environment/
    │   ├── File/ Interface/ Media/ Menu/ Navigation/ Shape/
    │   ├── System/ User/ Warning/
    └── logo/
        └── logo-removebg-preview.png   # Logo chính thức của dự án (nền trong suốt)
```

**Quy ước đặt tên màn hình:**

```tree
Web/
├── Home/
│   └── home.html
├── Auth/
│   ├── Login/
│   │   └── login.html
│   ├── Register/
│   │   └── register.html
│   └── forgot-password/
│       ├── forgot-password/forgot-password.html
│       ├── check-email/check-email.html
│       ├── reset-password/reset-password.html
│       └── reset-success/reset-success.html
├── Course/
│   └── course-list/
│       └── course-list.html
├── Cart/
│   ├── Cart/cart.html
│   └── empty-cart/empty-cart.html
└── Exam/
    ├── exam-list/exam-list.html
    ├── exam-intro/
    │   ├── not-purchased-exam/exam-intro.html
    │   └── purchased-exam/exam-intro.html
    ├── exam-taking/exam-taking.html
    ├── exam-result/exam-result.html
    └── exam-result-detail/exam-result-detail.html
```

> Thêm feature mới thì tạo thư mục riêng trong `Web/`. **Tên folder có từ 2 chữ trở lên phải viết theo kebab-case** (vd: `forgot-password`, `course-list`, `exam-result-detail`) — không dùng PascalCase. Mỗi màn hình chỉ có **1 file HTML** duy nhất.

---

## 4. Hệ thống thiết kế (Design tokens)

Toàn bộ màu sắc và typography được định nghĩa trong `shared/Constants/` và được áp dụng qua **CSS variables** khai báo trong khối `:root` của mỗi file.

### 4.1 Màu sắc

**Bảng màu gốc** (`color_desc.xlsx`):

| Nhóm            | Màu chính (500) | Vai trò                                 |
| --------------- | --------------- | --------------------------------------- |
| Primary         | `#2558E5`       | Màu thương hiệu — CTA, Primary Button   |
| Secondary       | `#FF6B4A`       | Màu phụ — Course Tags, Badges, giá Sale |
| Neutral (0–950) | `#0F172A` (900) | Text, nền, border, surface              |
| Success         | `#10B981`       | Điểm đạt, hoàn thành                    |
| Warning         | `#F59E0B`       | Nhãn pending, cảnh báo                  |
| Error           | `#F43F5E`       | Lỗi hệ thống, cảnh báo xóa              |
| Info            | `#0EA5E9`       | Thông báo chung, tips                   |

**Các token chính** (trong `:root`):

```css
:root {
  --primary-50: #eff4ff; /* nền active/selected */
  --primary-500: #2558e5; /* thương hiệu / CTA */
  --primary-600: #1d44cd; /* trạng thái pressed / text link */
  --primary-700: #1634a1; /* chữ nhấn mạnh trên nền sáng */
  --primary-900: #0e1f5a; /* app bar / sidebar tối */

  --secondary-500: #ff6b4a; /* tags, badges, giá sale */

  --neutral-0: #ffffff;
  --neutral-50: #f8fafc; /* app background */
  --neutral-100: #f1f5f9; /* surface hover */
  --neutral-200: #e2e8f0; /* borders, dividers */
  --neutral-300: #cbd5e1; /* disabled / strong border */
  --neutral-400: #94a3b8; /* placeholder */
  --neutral-500: #64748b; /* secondary icons / meta */
  --neutral-600: #475569; /* secondary text */
  --neutral-700: #334155; /* body emphasis */
  --neutral-800: #1e293b; /* headings */
  --neutral-900: #0f172a; /* primary text */

  --text-primary: var(--neutral-900);
  --text-secondary: var(--neutral-600);
  --text-tertiary: var(--neutral-500);
  --border-default: var(--neutral-200);
  --font:
    "Inter", "Segoe UI", system-ui, -apple-system, Roboto, Arial, sans-serif;
}
```

> **Chỉ dùng CSS variables**, không hard-code hex rải rác trong file. Toàn bộ dải màu (50 → 900) đã có sẵn theo `color_desc.xlsx`.

### 4.2 Typography

Font: **Inter** (Google Fonts). Khai báo trong `<head>` của mỗi file:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

**Scale** (từ `Headings.pdf` / `Body.pdf`):

| Loại        | Cỡ chữ | Line-height | Hệ số |
| ----------- | ------ | ----------- | ----- |
| Heading H1  | 56px   | 61.6px      | 1.1×  |
| Heading H2  | 48px   | 52.8px      | 1.1×  |
| Heading H3  | 40px   | 44px        | 1.1×  |
| Heading H4  | 32px   | 35.2px      | 1.1×  |
| Heading H5  | 24px   | 26.4px      | 1.1×  |
| Heading H6  | 20px   | 22px        | 1.1×  |
| Body Large  | 20px   | 28px        | 1.4×  |
| Body Medium | 18px   | 25.2px      | 1.4×  |
| Body Normal | 16px   | 22.4px      | 1.4×  |
| Body Small  | 14px   | 19.6px      | 1.4×  |

> Heading dùng line-height **1.1×**, body dùng **1.4×**. Giữ đúng thang đo, không tự ý đổi font.

### 4.3 Component dùng chung (`shared/`)

- **Buttons:** `primary` (CTA chính), `secondary` (action phụ / Mua ngay), `outline` (hành động phụ), `icon` (44×44 cho giỏ hàng, thông báo). Mỗi style có 4 trạng thái **Default / Hover / Active / Disable**.
- **Navbar** (`shared/layout/navbar.html`): sticky top, logo + nav links + ô tìm kiếm + icon buttons (badge) + user menu + hamburger (mobile).
- **Footer** (`shared/layout/footer.html`): nền Neutral 800, cột brand + cột liên kết + thông tin liên hệ + bottom bar.

> Tái sử dụng tối đa các component này, **không tự thiết kế lại** component đã có.

---

## 5. Quy tắc của dự án

1. **Trước khi làm gì → audit `shared/` trước.** Đọc kỹ tài sản dùng chung rồi mới thao tác.
2. **Không nhân bản style.** Màu, spacing, typography, button, layout đều lấy từ `shared/` và CSS variables.
3. **Công nghệ giới hạn:**
   - Chỉ **HTML + CSS** thuần.
   - **Không JavaScript** (trừ khi yêu cầu rõ).
   - **Không framework** (React, Vue, Angular, Svelte…).
   - **Không build tool / package manager.**
   - **Không CSS preprocessor** (Sass, Less).
4. **Mỗi màn hình = 1 file HTML duy nhất** — không chia màn hình thành nhiều file.
5. **Mọi màn hình mới phải link vào `index.html`.** Tạo màn hình mới là phải cập nhật hub.
6. **Nhất quán giữa các màn hình:** cùng spacing, màu, typography, component, hành vi.
7. **HTML ngữ nghĩa:** dùng đúng thẻ (`header`, `nav`, `main`, `section`, `footer`, `form`, `label`…).
8. **Nếu cần biến thể mới:** thêm vào `shared/` để tất cả màn hình dùng chung, không viết riêng trong từng màn.

---

## 6. Cách thao tác (Workflow)

### 6.1 Bắt đầu nhanh

1. Mở **`index.html`** (nằm tại thư mục gốc của dự án) trong trình duyệt — đây là **hub điều hướng** liệt kê mọi màn hình đã thiết kế.
2. Không cần cài đặt gì. Chỉ cần trình duyệt (Chrome, Edge, Firefox…).

### 6.2 Mở một màn hình

Có 2 cách:

- Từ `index.html`, bấm card màn hình tương ứng (đường dẫn tương đối đã được cấu hình sẵn).
- Mở trực tiếp file: `Web/Home/home.html`, `Web/Auth/Login/login.html`, …

### 6.3 Thêm màn hình mới

Ví dụ thêm màn hình **Khóa học**:

```bash
mkdir -p Web/Course/course-list
```

1. Tạo thư mục + file HTML trong `Web/`.
2. Khai báo `:root` chứa đầy đủ CSS tokens (copy khối từ một màn hình đã có, ví dụ `register.html`).
3. Tái sử dụng navbar / footer / buttons từ `shared/` (copy phần liên quan, chỉnh lại đường dẫn tài nguyên).
4. **Cập nhật `index.html`:** thêm 1 thẻ `<a class="card">` vào nhóm "Màn hình đã thiết kế".
5. Mở file trong trình duyệt kiểm tra.

### 6.4 Đường dẫn tài nguyên

Khi file nằm ở `Web/<Tên-folder>/<file>.html` (folder 2+ từ viết kebab-case), đường dẫn tương đối tới shared:

```bash
logo:   ../../shared/logo/logo-removebg-preview.png
hub:    ../../index.html
login:  ../Login/login.html
```

---

## 7. Điểm cần chú ý

- **Màu:** chỉ dùng CSS variables. Tránh hard-code hex để giữ sự nhất quán.
- **Typography:** giữ đúng thang đo (1.1× / 1.4×) và font Inter. Không tự ý đổi font khác.
- **Đường dẫn:** file đặt đúng `Web/<Tên>/`, đường dẫn tài nguyên phải chính xác (tham khảo bảng ở mục 6.4).
- **Logo:** dùng `logo-removebg-preview.png` (logo chính thức, nền trong suốt) cho mọi màn hình.
- **Icon:** dùng SVG trong `shared/icons/` (đã phân loại sẵn). Không dùng icon ký tự rải rác.
- **Responsive:** dùng chung bộ media query (`max-width: 900px` cho navbar, `640px` cho form). Đảm bảo cột thu gọn khi màn hình nhỏ.
- **`index.html` là bắt buộc:** khi thêm **hoặc xóa** màn hình đều phải cập nhật hub cho đồng nhất.
- **Không dùng JS** trong prototype trừ khi được yêu cầu — các tương tác hiển thị đều là "mock" tĩnh.
- **Audit trước khi code:** trước khi thêm component mới, luôn kiểm tra xem đã có trong `shared/` chưa.
- **Encoding file HTML:** mọi file phải giữ **UTF-8** (tiếng Việt). **KHÔNG dùng `Get-Content`/`Set-Content` của PowerShell** (mặc định ghi ANSI, làm vỡ ký tự tiếng Việt thành `�` → trang render trắng). Khi bulk-edit/sửa link, dùng Edit tool hoặc ghi đè bằng `[System.IO.File]::WriteAllText(path, text, New-Object System.Text.UTF8Encoding($false))`. Sau khi đổi, kiểm tra không còn ký tự `�` (U+FFFD) trong file.

---

## Prompt UI

```bash
Before you start, please audit this file: README.md
This project is a **pure HTML/CSS** prototype used to design and validate the UI of a web application before implementation. It is **not** a React, Vue, Angular, or backend project.

## Requirements

* Before making any changes, always audit the shared resources to maximize reuse.
* Review and reuse common assets such as:

  * Layouts
  * Typography and fonts
  * Icons
  * Buttons
  * Form controls
  * Colors
  * Spacing
  * CSS variables
  * Utility classes
  * Shared components
  * Common constants and design constraints
  * Reference real core entity
  * Never duplicate styles or components that already exist in the shared directory.
* Never duplicate styles or components that already exist in the shared directory.

## Technology

* Use **only HTML and CSS**.
* Do **not** use JavaScript unless explicitly requested.
* Do **not** use any frontend framework (React, Vue, Angular, Svelte, etc.).
* Do **not** use build tools or package managers.
* Do **not** use CSS preprocessors such as Sass or Less.

## File Structure

Each screen must be implemented as a **single HTML file**.

ensure Group screens by feature.


example:

├── Web
│   └── Auth
│       ├── Login
│       │   ├── login.html
│       │   └── login.png
│       └── forgot-password
│           ├── reset-password
│           │   ├── reset-password.html
│           │   └── ResetPassword.jpg
│           └── reset-success
│               ├── reset-success.html
│               └── ResetSuccess.jpg

Folders with 2+ words must use **kebab-case** (e.g. `forgot-password`, `course-list`), not PascalCase.

Do not split a screen into multiple HTML files.

## Navigation

The project root contains a single entry page (index.html) that acts as a navigation hub to every designed screen. Whenever a new screen is created, update the navigation page so it links to the new screen.

## Design Principles

* Prioritize consistency across all screens.
* Reuse existing shared styles whenever possible.
* Keep the HTML semantic and well organized.
* Produce production-quality UI prototypes.
* Follow a modern, clean, responsive design suitable for an online learning platform.
* Maintain consistent spacing, typography, color usage, and component behavior throughout the project.
* index.html is a single entry page that acts as a navigation hub to every designed screen. Check rule index convention.

```

---

## Liên hệ dự án

- **Tên dự án:** EDUMY — Nền tảng học trực tuyến (E-learning) tích hợp AI.
- **Phạm vi:** Đề tài khóa luận tốt nghiệp — Khoa CNTT, Đại học Công Thương TP.HCM.
- **Chủ sở hữu:** quangnhathung (Nhật Hưng).

---

© 2026 EDUMY
