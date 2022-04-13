let ul = document.querySelector(".traffic-nav");
let li = ul.querySelectorAll("li");
let activeLi = ul.querySelector(".active");
let targetLi = ul.querySelector(".active")[0];

// GET ALERT BANNER
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

// CHANGE JSON FROM STRINGIFY TO INT
function lineChart(data) {
  dataset = data;
  let json = JSON.parse(dataset);
  console.log(json);

  // DYNAMIC LINE CHART
  // 1) grab element that handles the chart
  //   const newChart = documet.getElementById("myChart");

  //   // 2) use chart class
  //   // 3) use data within chart class
  //   // 4) inject timerange (elements) to lables because labels are each element of the timerange
  //   // 5) inject data to data within chart class
}

// CREATING CHARTJS OBJECTS TO SWITCH BASED ON H/D/W/M SELECTIONS

function initData(type) {
  let datasetObject = {
    hourly: {
      // BOTTOM LABELS
      timeRange: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      // LEFT SIDE LABELS
      valueRange: [500, 1000, 1500, 2000, 2500],
      // CREATES AN ARRAY WITH 12 VALUES OF RANDOM NUMBERS
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 2500));
      }),
    },
    daily: {
      timeRange: ["S", "M", "T", "W", "T", "F", "S"],
      valueRange: [1000, 2000, 3000, 4000, 5000],
      data: [1, 1, 1, 1, 1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 5000));
      }),
    },
    weekly: {
      timeRange: ["1-7", "8-14", "15-21", "22-31"],
      valueRange: [2000, 4000, 6000, 8000],
      data: [1, 1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 8000));
      }),
    },
    monthly: {
      timeRange: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      valueRange: [
        1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500, 15000, 16500,
        18000,
      ],
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((element) => {
        return (element = Math.floor(Math.random() * 16500));
      }),
    },
  };
  // TAKES THE OBJECTS AND STRINGIFY INTO JSON
  return JSON.stringify(datasetObject[type]);
}

// declare a variable to remember the active element for later
let activeListItem;
// ADDEVENTLISTENER TO CHANGE TRAFFIC DISPLAY BUTTONS
ul.addEventListener("click", (e) => {
  if (e.target.classList[0] === "traffic-nav") return;
  const currentTarget = e.target;
  activeLi.classList.remove("active");
  currentTarget.classList.add("active");
  activeLi = currentTarget;
  // CHANGE CHART FUNCTION
  let testType = e.target.innerText.toLowerCase();
  let data = initData(testType);
  lineChart(data);
});

// LINE BAR
const ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  },
});

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

// // BAR GRAPH
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
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

// CREATE THE BAR GRAPH
let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

// DONUT CHART
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
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

// CREATE THE DONUT CHART
let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});
