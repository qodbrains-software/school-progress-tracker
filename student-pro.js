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

const performance = document.querySelector(".performance");
const comments = document.querySelector(".comments-page");
const headert = document.querySelector(".header-t");


    const page = (page) => {
        switch(page) {
            case 1:
                performance.style.display = "block"
                comments.style.display = "none"
                headert.style.visibility = "visible"
                
                break;
            case 2:
                 comments.style.display = "flex"
                 performance.style.display = "none"
                 headert.style.visibility = "hidden"
                break;
        }
    };
