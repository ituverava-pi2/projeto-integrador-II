const pesquisarDados = async () => {
    const url = 'https://pi-02.herokuapp.com/table'

    const containerEl = document.querySelector('.cards')

    await fetch(url).then(resp =>
        resp.json().then(function (myJson) {
            const data = myJson.data

            let outputs = ''
            data.forEach(item => {
                outputs +=
                    '<div class="card">' +
                    '<div class="image">' +
                    '<img src="assets/img/green-background.jpg" />' +
                    '</div>' +
                    '<div class="content">' +
                    '<img src="./assets/img/flags/' + item.id + ".png" + '" class="brasao"/>' +
                    '</div>' +
                    '<div class="info">' +
                    '<p class="price text--medium">' +
                    item.cidade +
                    '</p>' +
                    '</div>' +
                    '<p class="titles">' +
                    'Notificados: ' +
                    item.casos +
                    '<br>' +
                    'Confirmados: ' +
                    item.confirmados +
                    '</p>' +
                    '</div>' +
                    '</div>'
            })

            containerEl.innerHTML = outputs
        })
    )
}

pesquisarDados()
