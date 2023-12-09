function convert() {
    const decimalNumberInput = document.getElementById('decimalNumber');
    const baseSelect = document.getElementById('base');
    const resultInput = document.getElementById('result');

    const decimalNumber = parseInt(decimalNumberInput.value, 10);
    const targetBase = parseInt(baseSelect.value, 10);

    if (isNaN(decimalNumber)) {
        alert('올바른 숫자를 입력하세요.');
               return;
            }

    const result = decimalNumber.toString(targetBase);
    resultInput.value = result;
        }