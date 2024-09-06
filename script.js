fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let scoreBoxes = document.getElementById('score-boxes');
        data.forEach(result => {

            const div = document.createElement('div')
            div.classList.add('score', result.category)
            let stringToAdd = `
            <div class="category">
                <img src="${result.icon}">
                <span>${result.category}</span>
            </div>

            <div class="points">
                <span class="got-points">${result.score}</span>
                <span class="outOf"> / 100</span>
            </div>`
            div.innerHTML = stringToAdd;
            scoreBoxes.append(div);
        })
    })
