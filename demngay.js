// Ngày bắt đầu yêu (YYYY, MM, DD)
const startDate = new Date(2024, 9, 10); // Ví dụ: 1 tháng 10 năm 2023
const endDate = new Date(2027, 6, 31);

function calculateTimeDifference(startDate, currentDate) {
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    // Điều chỉnh nếu ngày hoặc tháng âm
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function updateCountdown() {
    const currentDate = new Date();
    const { years, months, days } = calculateTimeDifference(startDate, currentDate);

    // Hiển thị kết quả
    document.getElementById('countdown').textContent = `${years} năm, ${months} tháng, ${days} ngày`;

    // Hiển thị ngày bắt đầu yêu
    const startDateString = startDate.toLocaleDateString('vi-VN');
    document.getElementById('start-date').textContent = startDateString;

    // Hiển thị ngày hiện tại
    const currentDateString = currentDate.toLocaleDateString('vi-VN');
    document.getElementById('current-date').textContent = currentDateString;

}

//cap nhap thoi gian hien tai


// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);

// Cập nhật ngay khi trang được tải
updateCountdown();