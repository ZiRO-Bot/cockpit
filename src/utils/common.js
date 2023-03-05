export function getCookie(cName) {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function setCookie(cName, cValue, expSeconds) {
        const date = new Date();
        date.setTime(date.getTime() + (expSeconds * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

export function deleteCookie(cName) {
        const date = new Date();
        date.setTime(0);
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + "; " + expires + "; path=/";
}
