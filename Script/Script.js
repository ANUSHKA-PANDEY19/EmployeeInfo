document.getElementById('validateButton').addEventListener('click', function () {
    const employeeName = document.getElementById('employeeName').value.trim();
    const employeeId = parseInt(document.getElementById('employeeId').value.trim(), 10);
    const employeeEmail = document.getElementById('employeeEmail').value.trim();
    const baseLocation = document.getElementById('baseLocation').value.trim();
    const companyName = document.getElementById('companyName').value.trim();

    if (!employeeName || !employeeId || !employeeEmail || !baseLocation || !companyName) {
        alert('Please fill out all fields.');
        return;
    }

    const isValidId = employeeId > 10000;
    const emailSuffix = `@${companyName.toLowerCase()}.com`;
    const isValidEmail = employeeEmail.toLowerCase().endsWith(emailSuffix);

    if (isValidId && isValidEmail) {
        alert('Valid Employee Details');
    } else {
        alert('Invalid Employee Details');
    }
});
