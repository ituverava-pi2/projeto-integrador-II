// TELA MODO DARK
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    // document.body.classList.toggle('dark');

    var element = document.body;
    element.classList.toggle("dark-mode");

    // document.getElementById('box').style.background = '#000'; 

})

// POPUP ACESSIBILIDADE
var visibilidade = false //Variável que vai manipular o botão Exibir/ocultar
function ocultarExibir() {
    // Quando clicar no botão.
    if (visibilidade) {
        //Se a variável visibilidade for igual a true, então...
        document.getElementById('popup-access').style.display = 'none' //Ocultamos a div
        visibilidade = false //alteramos o valor da variável para falso.
    } else {
        //ou se a variável estiver com o valor false..
        document.getElementById('popup-access').style.display = 'block' //Exibimos a div..
        visibilidade = true //Alteramos o valor da variável para true.
    }
}

function exibirPopup() {
    document.getElementById('popup-access').style.display = 'block'
}

function ocultarPopup() {
    document.getElementById('popup-access').style.display = 'none'
}

//  ALTERA LINGUAGEM
function changeLanguage(idioma) {
    if (idioma === 'br') {
        // console.log('Idioma português...')
        document.getElementById(
            'hero-title'
        ).innerHTML = `Encontre aqui informações sobre a dengue em sua cidade e região metropolitana de Franca-SP. `
        document.getElementById(
            'hero-subtitle'
        ).innerHTML = `No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de informações precisas e decentralizadas. `

        document.getElementById('title-prev').innerHTML = 'Prevenção'
        document.getElementById('title-info').innerHTML = 'Informações'
        document.getElementById('title-atend').innerHTML =
            'Atendimento ao público'
        document.getElementById('button-more-prev').innerHTML = 'Veja mais'
        document.getElementById('button-more-info').innerHTML = 'Veja mais'
        document.getElementById('button-more-atend').innerHTML = 'Veja mais'

        document.getElementById('description-prev').innerHTML = `
    Pesquisas realizadas em campo indicam que os grandes reservatórios, como caixas d'água, galões e tonéis
    (muito utilizados para armazenagem de água para uso doméstico em locais dotados de infraestrutura urbana
    precária), são os locais com maiores números de criadouros do mosquito Aedes Aegypti, e portanto, os mais
    perigosos..
    `

        document.getElementById('description-info').innerHTML = `
    Todo paciente com suspeita de dengue deve receber soro de reidratação oral, de imediato, em sua chegada na unidade de saúde, mesmo enquanto aguarda atendimento. ATENÇÃO! Os sinais de alarme e o agravamento do quadro clínico costumam ocorrer na fase de remissão da febre (entre o 3º e 6º dia da doença) ATENÇÃO!.
    `

        document.getElementById('description-atend').innerHTML = `
    Toda pessoa com suspeita de dengue deve receber o primeiro atendimento na Unidade de Saúde que procurar, onde será avaliado e classificado clinicamente. O tratamento deve ser iniciado imediatamente. Os exames laboratoriais, hemograma e sorologia, serão solicitados em tempo oportuno segundo orientações da Secretaria de Saúde do Município.
    `
    }

    if (idioma === 'en') {
        document.getElementById(
            'hero-title'
        ).innerHTML = `Find here information about dengue in your city and metropolitan region of Franca-SP.`
        document.getElementById(
            'hero-subtitle'
        ).innerHTML = `In the midst of so much information and the amount of tools that appear every day, you need accurate and decentralized information.`

        document.getElementById('title-prev').innerHTML = 'Prevention'
        document.getElementById('title-info').innerHTML = 'Information'
        document.getElementById('title-atend').innerHTML = 'Customer Service'
        document.getElementById('button-more-prev').innerHTML = 'See more'
        document.getElementById('button-more-info').innerHTML = 'See more'
        document.getElementById('button-more-atend').innerHTML = 'See more'

        document.getElementById('description-prev').innerHTML = `
     Surveys carried out in the field indicate that large reservoirs, such as water tanks, gallons and vats
     (widely used for water storage for domestic use in places with urban infrastructure
     precarious), are the places with the highest numbers of breeding sites for the Aedes Aegypti mosquito, and therefore the most
     dangerous..
     `

        document.getElementById('description-info').innerHTML = `
    Every patient with suspected dengue should receive oral rehydration serum immediately upon arrival at the health unit, even while waiting for care. ATTENTION! The warning signs and the worsening of the clinical picture usually occur in the fever remission phase (between the 3rd and 6th day of the illness).
     `

        document.getElementById('description-atend').innerHTML = `
    Every person with suspected dengue should receive the first care at the Health Unit they seek, where they will be clinically evaluated and classified. Treatment must be started immediately. Laboratory tests, blood count and serology will be requested in a timely manner according to the guidelines of the Municipal Health Department.
     `
    }

    if (idioma === 'es') {
        document.getElementById(
            'hero-title'
        ).innerHTML = `Encuentre aquí información sobre el dengue en su ciudad y región metropolitana de Franca-SP.`
        document.getElementById(
            'hero-subtitle'
        ).innerHTML = `En medio de tanta información y la cantidad de herramientas que aparecen todos los días, se necesita información precisa y descentralizada.`

        document.getElementById('title-prev').innerHTML = 'Prevención'
        document.getElementById('title-info').innerHTML = 'Información'
        document.getElementById('title-atend').innerHTML = 'Atención al público'
        document.getElementById('button-more-prev').innerHTML = 'Vea mas'
        document.getElementById('button-more-info').innerHTML = 'Vea mas'
        document.getElementById('button-more-atend').innerHTML = 'Vea mas'

        document.getElementById('description-prev').innerHTML =
            'Todo paciente con sospecha de dengue debe recibir suero de rehidratación oral inmediatamente después de su llegada a la unidad de salud, incluso mientras espera la atención. ¡ATENCIÓN! Los signos de alarma y el empeoramiento del cuadro clínico suelen ocurrir en la fase de remisión de la fiebre (entre el 3º y el 6º día de enfermedad).'

        document.getElementById('description-info').innerHTML =
            'Todo paciente con sospecha de dengue debe recibir suero de rehidratación oral inmediatamente después de su llegada a la unidad de salud, incluso mientras espera la atención. ¡ATENCIÓN! Los signos de alarma y el empeoramiento del cuadro clínico suelen ocurrir en la fase de remisión de la fiebre (entre el 3º y el 6º día de enfermedad).'

        document.getElementById(
            'description-atend'
        ).innerHTML = `Toda persona con sospecha de dengue debe recibir la primera atención en la Unidad de Salud que busque, donde será evaluada clínicamente y clasificada. El tratamiento debe iniciarse inmediatamente. Se solicitarán oportunamente exámenes de laboratorio, hemograma y serología de acuerdo a los lineamientos de la Secretaría Municipal de Salud.
       `
    }

    // Fecha o menu
    document.body.classList.remove('menu-expanded')
}


