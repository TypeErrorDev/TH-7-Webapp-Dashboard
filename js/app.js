// NOTIFICATION DROPDOWN
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// ALERT BANNER
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>2</strong> new messages</p>
<p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

// Chart Widgets
let ul = document.querySelector(".traffic-nav");
let li = ul.querySelectorAll("li");
let activeLi = ul.querySelector(".active");
let targetLi = ul.querySelector(".active")[0];

ul.addEventListener("click", (e) => {
  if (e.target.classList[0] === "traffic-nav") return;
  const currentTarget = e.target;
  activeLi.classList.remove("active");
  currentTarget.classList.add("active");

  activeLi = currentTarget;
  // CHANGE CHART (FUNCTION)
  let testType = e.target.innerText.toLowerCase();
});

//Line Chart Graph
const trafficCanvas = document.getElementById("myChart");
let trafficData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 2500));
      }),
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};

let trafficOptions = {
  backgroundColor: "rgba(112, 104, 201, .5)",
  fill: true,
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});

//Bar Chart Graph
const dailyCanvas = document.getElementById("daily-chart");
//data for daily traffic bar chart,
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      valueRange: [0, 50, 100, 150, 200, 250],
      data: [1, 1, 1, 1, 1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 250));
      }),
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};
const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

//Doughnut Chart
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      valueRange: [1500, 3000, 4500, 6000],
      data: [1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 6000));
      }),
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
};
let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

// LISTENS FOR WHICH BUTTON IS CLICKED AND UPDATES THE CHART
ul.addEventListener("click", (e) => {
  if (e.target.classList[0] === "traffic-nav") return;
  const currentTarget = e.target;
  activeLi.classList.remove("active");
  currentTarget.classList.add("active");
  activeLi = currentTarget;
  // IF STATMENT BASED ON WHICH BUTTON IS CLICKED

  let testType = e.target.innerText.toLowerCase();
  if (testType === "hourly") {
    updateChart();
  } else if (testType === "daily") {
    updateChart();
  } else if (testType === "weekly") {
    updateChart();
  } else if (testType === "monthly") {
    updateChart();
  }
});

// UPDATE THE CHART DATA
function updateChart() {
  trafficChart.data.datasets[0].data = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ].map((element) => {
    return (element = Math.floor(Math.random() * 2500));
  });
  trafficChart.update();
}

// MESSAGE USER SEARCH FUNCTIONS
let searchValue = document.getElementById("userField").value;

// function handleSearch(event) {
//   const currentValue = event.target.value.toLowerCase();
//   const imageAnchors = document.querySelectorAll("img.profile-image");

//   for (const image of imageAnchors) {
//     if (image.dataset.caption.includes(currentValue)) {
//       image.classList.remove("hidden");
//     } else {
//       image.classList.add("hidden");
//     }
//   }
// }
// const searchElement = document.getElementById("userField");
// searchElement.addEventListener("keyup", handleSearch);

// //  MESSAGE USERS FUNCTIONS
// const user = document.getElementById("userField");
// const message = document.getElementById("messageField");
// const send = document.getElementById("send");

// send.addEventListener("click", () => {
//   if (user.value === "" && message.value === "") {
//     alert("Please fill out user and message fields before sending");
//   } else if (user.value === "") {
//     alert("Please fill out user field before sending");
//   } else if (message.value === "") {
//     alert("Please fill out message field before sending");
//   } else {
//     alert(`Message successfully sent to: ${user.value}`);
//   }
// });

// // SETTINGS SAVING TO LOCAL STORAGE
// const email = document.querySelector("#email");
// const public = document.querySelector("#public");
// const timezone = document.querySelector(".time-field");
// const save = document.querySelector(".btn-save");
// const cancel = document.querySelector(".btn-cancel");
// function save.addEventListener("click", () {
//   localStorage.setItem("email", email.checked);
//   localStorage.setItem("public", public.checked);
//   localStorage.setItem("timezone", timezone.value);
// });

// cancel.addEventListener("click", () => {
//   localStorage.removeItem("email");
//   localStorage.removeItem("public");
//   localStorage.removeItem("timezone");
//   email.checked = null;
//   public.checked = null;
//   timezone.value = "Select a Timezone";
// });

// function Storage() {
//   if (localStorage.email === "true") {
//     email.checked = true;
//   } else {
//     email.checked = false;
//   }
//   if (localStorage.public === "true") {
//     public.checked = true;
//   } else {
//     public.checked = false;
//   }
//   if (localStorage.timezone) {
//     timezone.value = localStorage.timezone;
//   }
// }

// Storage();
