// this is custom javascript variable 

function() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('referral-code') || 'undefined';
}


//url should be like - https://www.abc.com/work/?referral-code=sachin
