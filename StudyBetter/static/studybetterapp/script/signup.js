document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    const confirmPasswordField = document.getElementById('confirm-password');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    togglePassword.addEventListener('change', function () {
        passwordField.type = this.checked ? 'text' : 'password';
    });

    toggleConfirmPassword.addEventListener('change', function () {
        confirmPasswordField.type = this.checked ? 'text' : 'password';
    });
});
