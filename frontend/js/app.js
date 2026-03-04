document.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = this[0].value;
    const to = this[1].value;
    const date = this[2].value;
    searchFlights(from, to, date);
});

function searchFlights(from, to, date) {
    // Mock API call to fetch flights
    const flights = [
        { flightNo: 'AA123', from: 'NYC', to: 'LAX', date: '2026-03-10', price: 300 },
        { flightNo: 'UA456', from: 'NYC', to: 'LAX', date: '2026-03-10', price: 350 }
    ];
    displayFlights(flights);
}

function displayFlights(flights) {
    const resultsDiv = document.getElementById('flight-results');
    resultsDiv.innerHTML = '';
    flights.forEach(flight => {
        const flightDiv = document.createElement('div');
        flightDiv.innerHTML = `<p>Flight No: ${flight.flightNo} | From: ${flight.from} | To: ${flight.to} | Date: ${flight.date} | Price: $${flight.price}</p>`;
        resultsDiv.appendChild(flightDiv);
    });
}