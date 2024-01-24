export function setCookie(name, value, expirationHours) {
   let d = new Date();
   d.setTime(d.getTime() + expirationHours * 60 * 60 * 1000);
   let expires = "expires=" + d.toUTCString();
   document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Example: Set a cookie named "userInfo" with value "John Doe" that expires in 10 hours
// * setCookie("userInfo", "John Doe", 10);

// Example: Set a cookie named "userToken" with value "abc123" that expires in 10 days
// * setCookie("userToken", "abc123", 10 * 24);

export function getCookie(name) {
   let decodedCookie = decodeURIComponent(document.cookie);
   let cookieArray = decodedCookie.split(";");

   for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();

      // Check if this cookie has the specified name
      if (cookie.indexOf(name + "=") == 0) {
         return cookie.substring(name.length + 1, cookie.length);
      }
   }

   // Return null if the cookie with the specified name is not found
   return null;
}

// Example: Get the value of the "userInfo" cookie
// * let userInfoValue = getCookie("userInfo");

// Example: Get the value of the "userToken" cookie
// * let userTokenValue = getCookie("userToken");
