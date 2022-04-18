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
  // CHANGE CHART FUNCTION
  let testType = e.target.innerText.toLowerCase();
});

// CREATE THE CODE TO CHANGE THE CHART DATA BASED ON THE CLICKED BUTTON
// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("hourly")) {

//   }
//   if (e.target.classList.contains("daily")) {
//   }
//   if (e.target.classList.contains("weekly")) {
//   }
//   if (e.target.classList.contains("monthly")) {
//   }
// });

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
