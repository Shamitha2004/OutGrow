// STREAK COUNTER

let count = 0;

const target = 12;

const streak = document.getElementById("streakCounter");

const interval = setInterval(() => {

  count++;

  streak.innerText = count;

  if(count >= target){
    clearInterval(interval);
  }

}, 100);

// XP BAR

window.onload = () => {

  document.getElementById("xpFill").style.width = "75%";

};

// HABITS

const habits = [
  "Smile at a stranger",
  "Reply in group chat",
  "Start a conversation"
];

const list = document.getElementById("habitList");

habits.forEach(habit => {

  const li = document.createElement("li");

  li.innerText = habit;

  li.style.margin = "15px 0";

  list.appendChild(li);

});