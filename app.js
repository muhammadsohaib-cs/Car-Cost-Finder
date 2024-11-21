
  document.getElementById('calculateBtn').addEventListener('click', function () {
    // Retrieve input values
    const carCost = parseFloat(document.getElementById('carCost').value) || 0;
    const fuelPrice = parseFloat(document.getElementById('fuel').value) || 0;
    const efficiency = parseFloat(document.getElementById('efficiency').value) || 1; // Prevent divide by zero
    const mileage = parseFloat(document.getElementById('mileage').value) || 0;
    const maintenance = parseFloat(document.getElementById('maintenance').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;
    const parking = parseFloat(document.getElementById('parking').value) || 0;
    const tolls = parseFloat(document.getElementById('tolls').value) || 0;
    const depreciation = parseFloat(document.getElementById('depreciation').value) || 0;
    const miscellaneous = parseFloat(document.getElementById('miscellaneous').value) || 0;

    // Validate input values
    if (isNaN(carCost) || isNaN(fuelPrice) || isNaN(efficiency) || isNaN(mileage) || isNaN(maintenance) || isNaN(insurance) || isNaN(parking) || isNaN(tolls) || isNaN(depreciation) || isNaN(miscellaneous)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate annual fuel cost
    const annualFuelCost = (mileage / efficiency) * fuelPrice;

    // Calculate total monthly cost and annual cost
    const totalMonthlyCost = maintenance + insurance + parking + tolls + miscellaneous;
    const annualCost = (totalMonthlyCost * 12) + carCost + annualFuelCost - depreciation;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <strong>Total Monthly Cost (excluding fuel):</strong> RS${totalMonthlyCost.toFixed(2)} <br>
      <strong>Annual Fuel Cost:</strong> Rs${annualFuelCost.toFixed(2)} <br>
      <strong>Annual Cost (including depreciation and fuel):</strong> Rs${annualCost.toFixed(2)}
    `;
    
});