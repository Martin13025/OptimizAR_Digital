document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light");

    const btn = document.getElementById("toggleTheme");
    const isLight = document.body.classList.contains("light");

    if (isLight) {
        btn.textContent = "Modo Oscuro";
        document.documentElement.style.setProperty("--color-bg", "#ffffff");
        document.documentElement.style.setProperty("--color-bg-alt", "#f8f8f8");
        document.documentElement.style.setProperty("--color-text", "#121212");
        document.documentElement.style.setProperty("--color-muted", "#555555");
        document.documentElement.style.setProperty("--color-accent", "#007a57");
        document.documentElement.style.setProperty(
            "--shadow-light",
            "rgba(0, 122, 87, 0.2)"
        );
        document.documentElement.style.setProperty(
            "--shadow-dark",
            "rgba(0, 0, 0, 0.07)"
        );
    } else {
        btn.textContent = "Modo Claro";
        document.documentElement.style.setProperty("--color-bg", "#0a0a0a");
        document.documentElement.style.setProperty("--color-bg-alt", "#121212");
        document.documentElement.style.setProperty("--color-text", "#e0e7ff");
        document.documentElement.style.setProperty("--color-muted", "#666a7a");
        document.documentElement.style.setProperty("--color-accent", "#00f0c9");
        document.documentElement.style.setProperty(
            "--shadow-light",
            "rgba(0, 240, 201, 0.2)"
        );
        document.documentElement.style.setProperty(
            "--shadow-dark",
            "rgba(0, 0, 0, 0.9)"
        );
    }
});

const ctx = document.getElementById('lineComparisonChart').getContext('2d');

const lineComparisonChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Antes',
        data: [20, 25, 30, 35, 40, 45],
        borderColor: 'rgba(136, 136, 136, 0.8)',
        backgroundColor: 'rgba(136, 136, 136, 0.3)',
        tension: 0.3,
        fill: false,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Después',
        data: [30, 45, 60, 75, 85, 95],
        borderColor: 'rgba(0, 240, 201, 0.9)',
        backgroundColor: 'rgba(0, 240, 201, 0.3)',
        tension: 0.3,
        fill: false,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#00f0c9',
          font: {
            size: 16,
            weight: 'bold',
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    interaction: {
      mode: 'nearest',
      intersect: false
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#00f0c9',
          font: { size: 14 },
          callback: (value) => value + '%',
          stepSize: 20
        },
        grid: {
          color: 'rgba(0,240,201,0.2)'
        }
      },
      x: {
        ticks: {
          color: '#00f0c9',
          font: { size: 14 },
        },
        grid: {
          display: false
        }
      }
    }
  }
});
