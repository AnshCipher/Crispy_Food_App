'use strict';



/**
 * Add Event Listener on Multiple Elements
 */

const addEventOnElements = function (elements, eventType, callback){
    for(let i = 0, len = elements.length; i<len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}



/**
 * MOBILE NAV
 */

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElements(navbarLinks ,"click", closeNav);



/**
 * HEADER & BACK TO BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function (){
    header.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
    backTopBtn.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Data Submission 
 */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw3hm-gONxyQ6FJSIUKo6687YbuxswJ4qfPOW12frJFFmq0cY8r3lnw0Ae5Th9bhhvT/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML= "Table Reserved Successfully"
            setTimeout(function(){
                msg.innerHTML = "" 
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyFDdCEL-HDwxaXX4s3gMOorK4NOGuFVCFBzPcTbDRhAiLN6INoJR0oEtGksJb8TpAQ2w/exec'
    const form1 = document.forms['submit-to-google-sheet1']
    const msg1 = document.getElementById("msg1")
  
    form1.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
        .then(response => {
            msg1.innerHTML= "Email Sent Successfully!"
            setTimeout(function(){
                msg1.innerHTML = "" 
            },5000)
            form1.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    
    // document.addEventListener('DOMContentLoaded', function () {
    //     // Initialize Flatpickr
    //     const dateInput = document.querySelector("[input-field]");
    //     const calendarIcon = document.querySelector("[data-toggle]");

    //     const flatpickrInstance = flatpickr(dateInput, {
    //         dateFormat: "d/m/Y", // Customize as needed
    //         onReady: function(selectedDates, dateStr, instance) {
    //             calendarIcon.addEventListener('click', function() {
    //                 instance.open();
    //             });
    //         }
    //     });
    // });

    document.addEventListener('DOMContentLoaded', function () {
        const dateInput = document.getElementById('date-input');
        const calendarIcon = document.getElementById('calendar-icon');
    
        // Initialize Flatpickr on the date input field
        const fp = flatpickr(dateInput, {
            dateFormat: "Y-m-d", // Customize the date format as needed
        });
    
        // Add event listener to the calendar icon to open the Flatpickr calendar
        calendarIcon.addEventListener('click', function() {
            fp.open();
        });

        window.addEventListener('scroll', function() {
            fp.close();
        });
        
    });
    



    
  