function emptyLink() {
    window.alert("We are Working Hard on this \nSuper Admin");
}

function liveNotes() {
    window.alert("(New) Live Notes\nPlease Download Adobe Reader in Android/iPhone before access Live Notes from Play Store/App Store\n\nThanks and Regards:\nSuper Admin");
}

function showDivTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + mm;
    //----------------------------------- Fixed Dates -----------------------------------//
    // New Year - Fixed
    if (today == '0101') {
        document.getElementById("occassion-title").innerHTML += " Wishes You a Happy New Year";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/new_year.jpg";
    }
    // Lohri - Fixed
    else if (today == '1301') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Lohri";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/Lohri.jpg";
    }
    // Makar Sakranti - Fixed
    else if (today == '1401') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Makar Sankranti";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/makar_sakranti.jpg";
    }
    // Guru Govind Singh Jayanti - Fixed
    else if (today == '2001') {
        document.getElementById("occassion-title").innerHTML = "Guru Gobind Singh Jayanti";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/guru_govind.jpg";
    }
    // Republic Day - Fixed
    else if (today == '2601') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Republic Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/republic_day.jpg";
    }
    // World Health Day - Fixed
    else if (today == '0704') {
        document.getElementById("occassion-title").innerHTML = "World Health Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/health_day.jpg";
    }
    // Ambedkar Jayenti - Fixed
    else if (today == '1404') {
        document.getElementById("occassion-title").innerHTML += " Wishes You a Happy Ambedkar Jayanti";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/babashaeb.jpg";
    }
    // Labour Day - Fixed
    else if (today == '0105') {
        document.getElementById("occassion-title").innerHTML = "Labour Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/labour_day.jpg";
    }
    
    // Environment Day - Fixed
    else if (today == '0506') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Environment Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/environment_day.webp";
    }
    // Independance Day - Fixed
    else if (today == '1507') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Independance Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/independance_day.jpg";
    }
    // Kargil Vijay Diwas - Fixed/
    else if (today == '2607') {
        document.getElementById("occassion-title").innerHTML = "Kargil Vijay Diwas";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/kargil_vijay.jpg";
    }
    // World Indigenous Day - Fixed
    else if (today == '0908') {
        document.getElementById("occassion-title").innerHTML = "World Indigenous Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/world indigenous.jpg";
    }
    // Hindi Day - Fixed
    else if (today == '1409') {
        document.getElementById("occassion-title").innerHTML = "Hindi Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/hindi_day.jpg";
    }
    // Engineers Day - Fixed/
    else if (today == '1509') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Engineer's Day";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/engineers_day.jpg";
    }
    // Vishkarma Day - Fixed/
    else if (today == '1709') {
        document.getElementById("occassion-title").innerHTML += " Wishes You a Happy Vishwakarma Jayanti";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/vishkarma.jpg";
    }
    // Gandhi Jayanti - Fixed
    else if (today == '0210') {
        document.getElementById("occassion-title").innerHTML = "Gandhi Jayanti";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/gandhi-jayanti.png";
    }
    // Christmas Day - Fixed
    else if (today == '2512') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Christmas";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/christmas.png";
    }


    //----------------------------------- Dynamic Dates -----------------------------------//
    // Basant Panchmi - 2022
    else if (today == '0502') {
        document.getElementById("occassion-title").innerHTML += " Wishes You a Happy Basant Panchami";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/vasant_panchami.jpg";
    }
    // Holi - 2022/
    else if (today == '1803' || today == '1903') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Holi";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/holi.jpg";
    }
    // Eid - 2022
    else if (today == '0305') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Eid";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/eid.jpg";
    }
    // Raksha Bandhan - 2022
    else if (today == '1108') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Raksha Bandhan";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/raksha_bandhan.webp";
    }
    // Dussehra - 2021
    else if (today == '1510') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Dussehra";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/dussehra.jpg";
    }
    // Diwali - 2021
    else if (today == '0211' || today == '0311' || today == '0411' || today == '0411') {
        document.getElementById("occassion-title").innerHTML += "Wishes You a Happy Diwali";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/diwali.jpg";
    }
    // Bhai Dooj - 2021/
    else if (today == '0611') {
        document.getElementById("occassion-title").innerHTML += "Wishes You A Happy Bhai Dooj";
        document.getElementById("occassion-img").src = "https://myaktuguide.ml/assets/images/occasion/bhai_dooj.jpg";
    }
    
}
window.onload = showDivTime;










