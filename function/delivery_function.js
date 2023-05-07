var submission = document.getElementById("submit");

submission.addEventListener("click", function() {
    storeData();
})
function storeData() {
    var name = document.getElementById("nameBox").value;
    var phone = document.getElementById("phoneBox").value;
    var email = document.getElementById("emailBox").value;
    var region = document.getElementById("regionBox").value;
    var postcode = document.getElementById("postcodeBox").value;
    var detail = document.getElementById("detailBox").value;
    var home = document.getElementById("home").value;
    var work = document.getElementById("work").value;

    localStorage.setItem("nameBox", name);
    localStorage.setItem("phoneBox", phone);
    localStorage.setItem("emailBox", email);
    localStorage.setItem("regionBox", region);
    localStorage.setItem("postcodeBox", postcode);
    localStorage.setItem("detailBox", detail);
    localStorage.setItem("home", home);
    localStorage.setItem("work", work);

}