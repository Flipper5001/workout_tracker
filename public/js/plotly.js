async function showRatio(){
    const response = await fetch('api/tags', {
        method: 'POST',
    }).then(response => response.json())
    .then(tagData => {
    let data = [{
    type: 'bar',
    // x relates to y
    x: [tagData.core, tagData.legs, tagData.arms], // data passed here
    y: ['Core ', 'Legs ', 'Arms '],
    orientation: 'h'
    }];
    let layout = {
        title: "Workout Ratio",
        xaxis: {
            range: []
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
            color: 'black'
        }
    }
    let config = {
        responsive: true
    }
    Plotly.newPlot('workout-section', data, layout, config);
})
}


showRatio()
