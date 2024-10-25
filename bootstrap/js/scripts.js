// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona została w pełni załadowana.');

    
    const alertElement = document.querySelector('.alert');
    if (alertElement) {
        alertElement.addEventListener('closed.bs.alert', function () {
            console.log('Ostrzeżenie zostało zamknięte.');
        });
    }
});
