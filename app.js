document.addEventListener("DOMContentLoaded", function() {
    const endDate = "10 May 2024 10:00 PM";

    const endDateElement = document.getElementById("end-date");
    const inputs = document.querySelectorAll("input")
        //const clock =() => {

       // }
    if (endDateElement) {
        endDateElement.innerText = endDate;
    }

    function clock() {
        const end = new Date(endDate);
        const now = new Date();
        const diff = (end - now) / 1000;

       if(diff < 0) return;
            //convert into days

        inputs[0].value=Math.floor(diff / 3600 / 24);
        inputs[1].value=Math.floor(diff/3600)%24;
        inputs[2].value=Math.floor(diff/60)%60;
        inputs[3].value=Math.floor(diff%60);

    }

    // Initial call
    clock();

    /**
     * 1 day=24 hrs
     * 1 hr= 60 mins
     * 60 min=3600 sec
     */

    setInterval(
        () => {
            clock()
        },
        1000

    )
});
