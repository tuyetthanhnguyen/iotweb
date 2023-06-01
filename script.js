// Lưu trữ ngôn ngữ hiện tại
let currentLanguage = 'english';

// Lấy các phần tử cần thay đổi ngôn ngữ
const titleElement = document.getElementById('title');
const headingElement = document.getElementById('heading');
const descriptionElement = document.getElementById('description');
const languageBtn = document.getElementById('languageBtn');
const languageOptions = document.getElementById('languageOptions');

// Đặt sự kiện click cho nút ngôn ngữ
languageBtn.addEventListener('click', function () {
    languageOptions.style.display = languageOptions.style.display === 'none' ? 'block' : 'none';
});

// Đặt sự kiện click cho các lựa chọn ngôn ngữ
const languageLinks = languageOptions.getElementsByTagName('a');
for (let i = 0; i < languageLinks.length; i++) {
    languageLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        const language = this.getAttribute('data-lang');
        changeLanguage(language);
        languageOptions.style.display = 'none';
    });
}

// Hàm thay đổi ngôn ngữ
function changeLanguage(language) {
    if (language === currentLanguage) {
        return; // Không làm gì nếu ngôn ngữ không thay đổi
    }

    if (language === 'english') {
        titleElement.textContent = 'My Website';
        headingElement.textContent = 'Welcome to the website!';
        descriptionElement.textContent = 'This is a simple website to demonstrate language switching functionality.';
    } else if (language === 'vietnamese') {
        titleElement.textContent = 'Trang web của tôi';
        headingElement.textContent = 'Chào mừng bạn đến với trang web!';
        descriptionElement.textContent = 'Đây là một trang web đơn giản để minh họa chức năng chuyển đổi ngôn ngữ.';
    }

    // Cập nhật ngôn ngữ hiện tại
    currentLanguage = language;
}

