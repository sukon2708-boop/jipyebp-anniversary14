const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ แก้ข้อความจดหมายตรงนี้ได้เลย
const MESSAGE = `
สุขสันต์วันครบรอบ 1 ปีนะคะ

ขอบคุณที่พฤกษ์ร่วมชะตากับน้ำผึ้งมา 1ปีแล้ว
ปีนี้เราก็มีการเปลี่ยนแปลงกันเยอะ
ถึงคู่เราจะทะเลาะกันงอนกัน แต่มันทำให้รู้สึกว่าเราได้เข้าใจกันมากขึ้น
เค้าขอโทษหากพูดหรือทำอะไรไม่ดีกับเธอไป 
จริงๆถึงเค้าจะชอบงอแง งอน แต่เธอก็ยังพาเค้าไปเที่ยว พาไปกินของอร่อย 
เค้าสัมผัสความรักที่เธอมีให้เค้าได้ แต่ที่เค้าชอบถามเธอว่ายังรักเค้ามั้ย 
เพราะเค้าไม่รู้ว่าเค้ายังน่ารักสำหรับเธอมั้ย เธอเจอด้านที่ไม่เก่งของเค้าแล้วยังจะรักเค้ามั้ย 
แต่เอาจริงๆถึงเค้าอาจจะไม่ได้ดีที่สุดสำหรับเธอ แต่เค้าก็อยากจะอยู่ข้างเธอไปถึงที่สุด
แล้วเค้าก็ไม่เคยเสียใจที่เค้าขอเธอเป็นแฟนเลย
ไม่ว่าอะไรจะเกิดขึ้น เธอจะถูกเค้ารักเสมอนะคะ
ปีใหม่นี้ขอให้พฤกษ์ไม่ต้องมีเรื่องเครียดอะไร สบายใจในทุกๆวัน 
เค้าจางอแงจะงอนให้น้อยลงด้วยฮ่าๆ
ขอบคุณที่รักเค้าตลอด1ปีที่ผ่านมา ขอให้เรารักกันไปนานๆเลยนะ

ขอให้เค้าได้เขียนจดหมายถึงเธอทุกปีจนแก่กันเลย

`;

function open(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}
function close(){ modalBackdrop.style.display = "none"; }

openLetter.addEventListener("click", open);
readBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) close();
});
