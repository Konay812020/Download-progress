var getdownloadbtn = document.querySelector('.download-btn');
var getprogressbar = document.querySelector('.progress-bar');

var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click', function () {

    // console.log("hi");

    var setwidith = 0;
    getdownloadbtn.setAttribute("disabled", true);

    var setinv = setInterval(progressinc, 100);

    function progressinc() {
        if (setwidith >= 100) {
            clearInterval(setinv);
            setwidith = 0;
            window.location.href = seturl;
        } else {
            setwidith++;
            getprogressbar.style.width = `${setwidith}%`;
            getprogressbar.setAttribute("data-inc", `${setwidith}%`);

        }
    };
});

//10PG