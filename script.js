async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8db8c0026d382166b99d80ef156f347c'; // Substitua pela sua chave da OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡️ Temperatura:</strong> ${data.main.temp} °C</p>
        <p><strong>☁️ Condição:</strong> ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Ícone do clima">
      `;
            document.getElementById('weatherResult').innerHTML = weatherHTML;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>❌ Cidade não encontrada.</p>`;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Erro ao buscar dados do clima.</p>`;
    }
}



