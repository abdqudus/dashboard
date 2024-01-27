const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".close__menu");
const overlayBg = overlay.querySelector(".overlay__bg");

hamburger.onclick = () => {
  overlay.classList.remove("close");
  overlay.classList.add("open");
};

closeMenu.onclick = () => {
  sidebar.classList.add("close");
  setTimeout(() => {
    overlayBg.classList.add("close");
    setTimeout(() => {
      overlay.classList.remove("open");
      sidebar.classList.remove("close");
      overlayBg.classList.remove("close");
    }, 400);
  }, 300);
};

//
const ctx = document.getElementById("myChart").getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, 600);
gradient.addColorStop(1, "white");

gradient.addColorStop(0, "#34CAA5");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "# of Sales",
        data: [7.0, 18.0, 3.0, 28, 9, 45, 9, 20, 32, 4, 30, 28],
        backgroundColor: [gradient],

        borderColor: ["#34CAA5"],
        borderWidth: 1,
        borderRadius: 50,
        // borderSkipped: "top",
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        border: { dash: [2, 4] },
        gridLines: {
          display: false, // Hide vertical gridlines
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          display: false,
        },
      },
    },
  },
});
