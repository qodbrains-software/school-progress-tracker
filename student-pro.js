const bargraph = document.querySelector(".average")
const piegraph = document.querySelector(".pie-chart")

const bar = {
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

const barChart = new Chart(bargraph, bar)

/* 
    #########################################++++++++++++++++++++++++++++####################################
                                                    *****************
                                            *********** DASH-CHANGE-PAGE*************
                                                    *****************
    #########################################++++++++++++++++++++++++++++####################################
    */

const performance = document.querySelector(".performance")
const comments = document.querySelector(".comments-page")


    const page = (change) => {
        let nextpage;
        switch(change) {
            case performance:
                change = performance.style.display = "flex"
                change = comments.style.display = "none"
                break;
            case comments:
                change = comments.style.display = ""
                break;
        }
    }

    performance.addEventListener("click", page)