console.log("loaded")
window.addEventListener('load', function() {
    console.log("injected")
    setTimeout(() => {
        try {
            const paywalls = document.getElementsByClassName("banner-wrapper")
            paywalls.forEach(paywall => {
                paywall.remove()
            });
        } catch (error) {
            console.log("no mid-page ads found")
        }

        try {
            document.getElementsByClassName("_99b399f6f9ba")[0].remove()
        } catch (error) {
            console.log("no over-page ads found")
        }
    }, 100);
})