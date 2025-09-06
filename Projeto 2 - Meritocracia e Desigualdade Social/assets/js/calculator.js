document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('privilege-form');
    const resultArea = document.getElementById('result-area');
    const privilegeLevel = document.getElementById('privilege-level');
    const resultDescription = document.getElementById('result-description');
    const resultChart = document.getElementById('result-chart');

    let myChart = null; // Para guardar a instância do gráfico

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const education = document.getElementById('education').value;
        const privateSchool = document.getElementById('private-school').value;

        let score = 0;

        // Lógica de pontuação para o privilégio
        if (education === 'high') {
            score += 30;
        } else if (education === 'medium') {
            score += 15;
        }
        
        if (privateSchool === 'yes') {
            score += 40;
        }

        let level, description;

        if (score >= 50) {
            level = "Elevado";
            description = "Sua trajetória indica que você teve acesso a recursos e oportunidades que a maioria das pessoas não tem. Isso pode ter facilitado sua jornada, mas não diminui seus esforços.";
        } else if (score >= 20) {
            level = "Médio";
            description = "Seu ponto de partida é misto. Você pode ter tido algumas vantagens em certas áreas da vida e enfrentado desafios em outras.";
        } else {
            level = "Baixo";
            description = "Você provavelmente enfrentou barreiras significativas. Seu sucesso é resultado de superação e muito esforço, mostrando o peso das desigualdades sociais.";
        }

        // Exibe os resultados na tela
        privilegeLevel.textContent = level;
        resultDescription.textContent = description;
        resultArea.classList.remove('hidden');

        // Cria ou atualiza o gráfico
        const chartData = {
            labels: ['Pontuação de Privilégio'],
            datasets: [{
                label: 'Pontuação',
                data: [score],
                backgroundColor: '#00b4d8',
                borderColor: '#0077b6',
                borderWidth: 1
            }]
        };

        if (myChart) {
            myChart.data = chartData;
            myChart.update();
        } else {
            const chartContext = document.createElement('canvas');
            resultChart.innerHTML = '';
            resultChart.appendChild(chartContext);
            myChart = new Chart(chartContext, {
                type: 'bar',
                data: chartData,
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                display: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    });
});