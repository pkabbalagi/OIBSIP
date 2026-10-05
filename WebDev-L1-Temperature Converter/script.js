const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertBtn =
    document.getElementById("convertBtn");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");

const errorMessage =
    document.getElementById("errorMessage");


convertBtn.addEventListener(
    "click",
    convertTemperature
);


function convertTemperature() {

    const inputValue =
        temperatureInput.value.trim();

    const unit =
        unitSelect.value;


    // Clear previous error

    errorMessage.textContent = "";


    // Empty input validation

    if (inputValue === "") {

        errorMessage.textContent =
            "Please enter a temperature value.";

        resetResults();

        return;
    }


    const temperature =
        Number(inputValue);


    // Numeric validation

    if (!Number.isFinite(temperature)) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        resetResults();

        return;
    }


    let celsius;


    // Convert input to Celsius

    if (unit === "celsius") {

        celsius = temperature;

    }

    else if (unit === "fahrenheit") {

        celsius =
            (temperature - 32) * 5 / 9;

    }

    else if (unit === "kelvin") {

        celsius =
            temperature - 273.15;

    }


    // Absolute zero validation

    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        resetResults();

        return;
    }


    // Convert Celsius to other units

    const fahrenheit =
        (celsius * 9 / 5) + 32;

    const kelvin =
        celsius + 273.15;


    // Display results

    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;
}


function resetResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}


// Press Enter to convert

temperatureInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            convertTemperature();

        }

    }
);