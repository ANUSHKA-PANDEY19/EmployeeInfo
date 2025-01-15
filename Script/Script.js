document.getElementById('validateButton').addEventListener('click', function () {
    const employeeName = document.getElementById('employeeName').value.trim();
    const employeeId = parseInt(document.getElementById('employeeId').value.trim(), 10);
    const employeeEmail = document.getElementById('employeeEmail').value.trim();
    const baseLocation = document.getElementById('baseLocation').value.trim();
    const companyName = document.getElementById('companyName').value.trim();

  
    function showError(inputId, message) {
        let errorElement = document.getElementById(inputId + 'Error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = inputId + 'Error';
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '12px';
            errorElement.style.marginTop = '5px';
            document.getElementById(inputId).insertAdjacentElement('afterend', errorElement);
        }
        errorElement.textContent = message;
    }

   
    function clearError(inputId) {
        const errorElement = document.getElementById(inputId + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

  
    clearError('employeeName');
    clearError('employeeId');
    clearError('employeeEmail');
    clearError('baseLocation');
    clearError('companyName');

    let isValid = true;

  
    if (!employeeName) {
        showError('employeeName', 'Employee name is required.');
        isValid = false;
    }

   
    if (!employeeId) {
        showError('employeeId', 'Employee ID is required.');
        isValid = false;
    } else if (employeeId <= 10000) {
        showError('employeeId', 'enter valid Employee ID');
        isValid = false;
    }

  
    if (!employeeEmail) {
        showError('employeeEmail', 'Employee email is required.');
        isValid = false;
    } else if (!employeeEmail.toLowerCase().endsWith(`@${companyName.toLowerCase()}.com`)) {
        showError('employeeEmail', 'Enter valid email Id');
        isValid = false;
    }

  
    if (!baseLocation) {
        showError('baseLocation', 'Base location is required.');
        isValid = false;
    }

   
    if (!companyName) {
        showError('companyName', 'Company name is required.');
        isValid = false;
    }

   
    if (isValid) {
        alert('Valid Employee Details');
         form.reset(); // Reset the form
        clearError('employeeName');
        clearError('employeeId');
        clearError('employeeEmail');
        clearError('baseLocation');
        clearError('companyName');
    }
});
