const graph = document.querySelector(".average")

const config = {
    type: 'bar',
    data: {
        labels: ["English", "African", "Mathematics", "Physical Science", "Economics", "LO", "Life Science"],
        datasets: [{
            label: "Student Average", 
            data: [49, 91, 49, 83, 86, 95, 67],
            backgroundColor: ["red", "yellow", "green"]
    }]
    }
};

const studentChart = new Chart(graph, config)

