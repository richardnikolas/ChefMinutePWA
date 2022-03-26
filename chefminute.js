let user;

onload = () => {
    showSplashScreen();
    checkStoredUser();
};

//* Splash Screen */

const showSplashScreen = () => {
    const splashPage = document.querySelector("#splashPage");

    setTimeout(function () {
        splashPage.classList.toggle("fade");
        checkStoredUser();

        setTimeout(function () {
            user != undefined ? showPage("homePage") : showPage("signUpPage");
        }, 200);
    }, 1800);
};

//* Sign Up Screen */

const saveUserAndContinue = () => {
    const { nameValue, emailValue, chefLevelValue, cuisineValue } = getInputValues();

    if (validateFields()) {
        user = {
            name: nameValue,
            email: emailValue,
            chefLevel: chefLevelValue,
            favoriteCuisine: cuisineValue
        };

        const signUpPage = document.querySelector("#signUpPage");
        signUpPage.classList.add("hidden");

        localStorage.setItem("storedUser", JSON.stringify(user));

        setTimeout(function () {
            showPage("homePage");
        }, 500);
    } else {
        alert("Você deve preencher os campos corretamente!");
    }
};

const validateFields = () => {
    const { nameValue, emailValue, chefLevelValue, cuisineValue } = getInputValues();

    if (!nameValue && !emailValue) {
        return false;
    } else if (nameValue?.length > 3 && validateEmail(emailValue) && chefLevelValue && cuisineValue) {
        return true;
    }
};

const getInputValues = () => {
    const nameValue = document.querySelector("#inputName")?.value;
    const emailValue = document.querySelector("#inputEmail")?.value;
    const chefLevelValue = document.querySelector("#inputChefLevel")?.value;
    const cuisineValue = document.querySelector("#inputFavoriteCuisine")?.value;

    return { nameValue, emailValue, chefLevelValue, cuisineValue };
};

//* Home Screen */

/*
 * If an user exists, it shows a customized message with the first users's name.
 * If not, just a standard greeting.
 */
const getGreeting = () => {
    checkStoredUser();

    if (user != undefined) {
        return document.write(`Good day, ${user.name.split(" ")[0]}`);
    }

    return document.write("Hello there, Chef!");
};

//* Utils */

const showPage = (pageId) => {
    const page = document.querySelector("#" + pageId);
    page.classList.remove("hidden");
};

const checkStoredUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("storedUser"));

    if (storedUser != null) {
        user = storedUser;
    }
};

/*
 * Minor regex function to validate emails
 */
const validateEmail = (email) => {
    const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return rgx.test(email);
};

//* Service Worker */

navigator.serviceWorker.register("./chefminute-sw.js");
