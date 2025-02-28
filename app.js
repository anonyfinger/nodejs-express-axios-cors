// app.js

document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchMessage");
  const updateButton = document.getElementById("updateMessage");
  const deleteButton = document.getElementById("deleteMessage");
  const messageDisplay = document.getElementById("messageDisplay");

  const API_URL = "http://localhost:3000";

  // 서버로부터 메시지 가져오기
  fetchButton.addEventListener("click", async () => {
    try {
      const response = await axios.get(API_URL);
      messageDisplay.textContent = response.data.message || "메시지가 없습니다";
    } catch (error) {
      console.error("메시지 가져오기 오류:", error);
    }
  });

  // 서버에 메시지 업데이트 요청 보내기
  updateButton.addEventListener("click", async () => {
    const newMessage = prompt("새로운 메시지를 입력하세요:");
    if (newMessage) {
      try {
        const response = await axios.put(API_URL, newMessage, {
          headers: {
            "Content-Type": "text/plain",
          },
        });
        messageDisplay.textContent = response.data;
      } catch (error) {
        console.error("메시지 업데이트 오류:", error);
      }
    }
  });

  // 서버에 메시지 삭제 요청 보내기
  deleteButton.addEventListener("click", async () => {
    try {
      const response = await axios.delete(API_URL);
      messageDisplay.textContent = response.data;
    } catch (error) {
      console.error("메시지 삭제 오류:", error);
    }
  });
});
