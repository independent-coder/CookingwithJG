let subscribers = document.querySelector("#subscriberValue");
let views = document.querySelector("#viewsValue");
let videos = document.querySelector("#totalVideos");
let response = document.querySelector("#response");
let errorValue = document.querySelector("#errorValue");
let errors = document.querySelector("#errors");

// Set the fixed YouTube channel ID
let userID = "UC2Hr6ttoM9EQ_4CBJezvDtg";

// Fetch YouTube channel statistics
let key = "AIzaSyDC6gmvUxck_VzKRd9H6mkuyo7BqMV3R3k"; // Replace with your actual API key
fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${userID}&key=${key}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (data.pageInfo.totalResults > 0) {
            response.style.display = "block";
            subscribers.innerText = data.items[0].statistics.subscriberCount;
            videos.innerText = data.items[0].statistics.videoCount;
            views.innerText = data.items[0].statistics.viewCount;
        } else {
            errorValue.innerText = "Please Enter Correct Youtube ID";
            response.style.display = "none";
            errors.style.display = "grid";
        }
    });
