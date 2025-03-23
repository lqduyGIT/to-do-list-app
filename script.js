const inputBox = document.getElementById("input__box");
const listContainer = document.getElementById("list__container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // Thêm thẻ <li> vừa tạo vào bên trong danh sách <ul> hoặc <ol>
    //  nơi chứa danh sách công việc.
    listContainer.appendChild(li);
    // Tạo một phần tử <span> mới,
    // được sử dụng làm nút "X" để xóa công việc khỏi danh sách.
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    // Thêm phần tử <span> (nút xóa) vào bên trong <li>,
    // giúp hiển thị nút xóa bên cạnh nội dung công việc.
    li.appendChild(span);
  }
  // sự kiện xảy ra khi nhập text vào thanh input và ấn vào button
  // sẽ đứa inputbox về giá trị rỗng và giá trị nhập vào text sẽ save vào
  // list_container
  inputBox.value = "";
  // Lưu lại dữ liệu đã nhập trong listContainer, khi ấn reload trang
  saveData();
}

// Khi bất kỳ phần tử con nào trong listContainer (tức là <li> hoặc <span>)
//  bị nhấn, hàm bên trong sẽ chạy.

// e (event) là thông tin về sự kiện click,
// chứa thông tin về phần tử bị nhấn (e.target).
listContainer.addEventListener(
  "click",
  function (e) {
    // Nếu người dùng nhấn vào một mục công việc (<li>),
    // nó sẽ thêm hoặc bỏ lớp CSS "checked".
    // "checked" có thể là một class giúp hiển thị công việc đã hoàn thành
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();

      // Nếu người dùng nhấn vào dấu "×" (<span>),
      //  sẽ xóa toàn bộ mục (<li>) chứa nó.
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Lưu lại dữ liệu đã nhập trong listContainer, khi ấn reload trang
// hoặc khi mở lại
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
