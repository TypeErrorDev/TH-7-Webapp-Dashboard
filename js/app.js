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
  // let testType = e.target.innerText.toLowerCase();
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
// DECLARE THE ARRAY OF USERS
let userNames = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

// FUNCTION FOR AUTOCOMPLETE
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

//  MESSAGE USERS FUNCTIONS
const input = document.querySelector(".message");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", (e) => {
  if (user.value === "" && message.value === "") {
    e.preventDefault();
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    e.preventDefault();
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    e.preventDefault();
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

// SETTINGS SAVING TO LOCAL STORAGE

// DECLARE VARIABLES
const email = document.querySelector("#email");
const public = document.querySelector("#public");
const timezone = document.querySelector(".time-field");
const buttonSave = document.querySelector(".btn-save");
const cancel = document.querySelector(".btn-cancel");

// LISTEN FOR BUTTON CLICK
buttonSave.addEventListener("click", (e) => {
  localStorage.setItem("email", email.checked);
  localStorage.setItem("public", public.checked);
  localStorage.setItem("timezone", timezone.value);
  console.log("saved to localStorage");
});

// LISTEN FOR BUTTON CLICK AND CLEAR LOCAL STORAGE
cancel.addEventListener("click", () => {
  // IF THERE IS MORE THAN THESE ITEMS IN LOCAL STORAGE, USE THIS
  // localStorage.removeItem("email");
  // localStorage.removeItem("public");
  // localStorage.removeItem("timezone");
  email.checked = null;
  public.checked = null;
  timezone.value = "Select a Timezone";
  // IF THIS IS THESE ARE THE ONLY ITEMS IN LOCAL STORAGE, USE THIS
  localStorage.clear();
  console.log("cleared localStorage");
});
