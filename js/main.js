// Check SessionStorage for token and current location
if (!window.location.pathname.includes('profile') && window.sessionStorage.getItem('token')) {
    // Replace location with profile page if user is logged in
    window.location.replace(window.location.href + 'profile');
} else if(window.location.pathname.includes('profile') && !window.sessionStorage.getItem('token')) {
    // Replace location with login page if profile page is accessed without login
    window.location.replace(window.location.href.replace('profile', ''));
}