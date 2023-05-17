var BASE_URL_APP = "https://jsonplaceholder.typicode.com/";

override = false;

if (override) {
    BASE_URL_APP = window.location.protocol + "//" + window.location.hostname + "/users/";
}
