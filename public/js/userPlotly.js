async function showRatio(){
    const response = await fetch('api/tags/user', {
        method: 'POST',
    }).then(response => response.json())
    .then(tagData => {
        console.log(tagData)
    let data = [{
    type: 'bar',
    // x relates to y
    x: [tagData.core, tagData.legs, tagData.arms], // data passed here
    y: ['Core ', 'Legs ', 'Arms '],
    orientation: 'h'
    }];
    let layout = {
        title: "Your Workouts",
        autosize: false,
        width: 500,
        height: 300,
        xaxis: {
            range: []
        },
        paper_bgcolor: 'rgba(255,255,255,0.7)',
        plot_bgcolor: 'rgba(255,255,255,0)',
        font: {
            color: 'black',
            size: 24
        }
    }
    let config = {
        responsive: true
    }
    Plotly.newPlot('user-workout-section', data, layout, config);
})
}

showRatio()

// on resize

async function showRatioResize(){
    const response = await fetch('api/tags/user', {
        method: 'POST',
    }).then(response => response.json())
    .then(tagData => {
        console.log(tagData)
    let data = [{
    type: 'bar',
    // x relates to y
    x: [tagData.core, tagData.legs, tagData.arms], // data passed here
    y: ['Core ', 'Legs ', 'Arms '],
    orientation: 'h'
    }];
    let layout = {
        title: "Your Workouts",
        autosize: false,
        width: 400,
        height: 300,
        xaxis: {
            range: []
        },
        paper_bgcolor: 'rgba(255,255,255,0.7)',
        plot_bgcolor: 'rgba(255,255,255,0)',
        font: {
            color: 'black',
            size: 24
        }
    }
    let config = {
        responsive: true
    }
    Plotly.newPlot('user-workout-resize', data, layout, config);
})
}

showRatioResize()

