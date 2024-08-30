
   VANTA.NET({
            el: "#main-section",
            mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xe91a1,
  backgroundColor: 0x0,
  spacing: 32.00      // Spacing between points
        });
        
        const sm = new SuperMarquee(
  document.getElementById( 'marq' ),
  {
    "content": 'web development&nbsp<i class="bgt bi-stars"></i> web design&nbsp<i class="bgt bi-stars"></i>&nbspbackend development&nbsp<i class="bgt bi-stars"></i>',
    "type": "horizontal",
    "direction": "ltr",
    "speed": "medium",
    "speed-custom-range": "0.05",
    "mode": "continuous",
    "spacer": "",
    "position": "custom",
    "pauseonhover": true,
    "perspective": "{\"z\":\"0\",\"originX\":\"1\",\"originY\":\"0\",\"rotateX\":\"0\",\"rotateY\":\"0\",\"rotateZ\":\"0\"}"
}
);

const sma = new SuperMarquee(
  document.getElementById( 'mxq' ),
  {
    "content": 'Backend development&nbsp<i class="bgt bi-stars"></i>&nbspweb design&nbsp<i class="bgt bi-stars"></i>&nbspweb development&nbsp<i class="bgt bi-stars"></i>',
    "type": "horizontal",
    "direction": "ltr",
    "speed": "medium",
    "speed-custom-range": "0.125",
    "mode": "continuous",
    "spacer": '',
    "position": "custom",
    "pauseonhover": true,
    "perspective": "{\"z\":\"776\",\"originX\":\"50\",\"originY\":\"50\",\"rotateX\":\"0\",\"rotateY\":\"0\",\"rotateZ\":\"0\"}"
}
);

   AOS.init();
   document.addEventListener("DOMContentLoaded", function(){
    const nav_bar = document.querySelector(".nav_bar");
if(nav_bar){
    window.addEventListener("scroll", function(){
var page_offset = 10;
if(this.window.pageYOffset > page_offset){
    nav_bar.classList.add("active");
}
else{
    nav_bar.classList.remove("active");
    
}
    });
}
else{
    console.log("element not found");
}
});

   var bact = document.getElementById("backu");
 window.addEventListener("scroll", () => {

if (document.body.scrollTop > 250  || document.documentElement.scrollTop > 250 ){
		bact.classList.add("active");
	}
	else{
		bact.classList.remove("active");
	}
});


function scroll_top(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
const burger = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.canc');

burger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

close.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
          let scrollBar = document.querySelector('.scroll-bar');


          window.onscroll = () =>{
            scrollIndicator();
          }
          /*SCROOL INDICATOR JAVASCRIPT
          IT SHOWS A BAR THAt MOVES WITH PAGE ONSCROLL
          USING ONSCROLL EVENTS
          AND HORIZONTAL SCROLL
          */
          function scrollIndicator(){
          
            let maxHeight = window.document.body.scrollHeight - window.innerHeight;
            let percentage = ((window.scrollY) / maxHeight) * 100;
            scrollBar.style.width = percentage + '%';
          
          }
          
          
const but = document.querySelector('.emil');
const fo = document.getElementById('sed');
const clos = document.querySelector('.can');

but.addEventListener('click', () => {
  fo.classList.add('active');
});

clos.addEventListener('click', () => {
  fo.classList.remove('active');
});



var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
document.addEventListener('click',  () =>{
    cursor.classList.add('mag');
    setTimeout(()=>{
        cursor.classList.remove('mag');
    
    },500)
})

$(window).on('load', function() {
    $('#loader-container').fadeOut('slow', function() {
        $(this).remove(); // Remove the loader from the DOM
    });
});
var form = document.getElementById("my-form");

  

  async function handleSubmit(event) {

    event.preventDefault();

    var status = document.getElementById("my-form-status");

    var email = form.querySelector('input[name="email"]').value;

    // Define the message content similar to your PHP script

    var message = `

      <div style='background-color: #000000; color: #ffffff; padding: 20px; font-family: Arial, sans-serif;'>

        <h2 style='margin-bottom: 20px;'>New Web Development Project Request</h2>

        <p>Dear Uthman Dev,</p>

        <p>A potential client has expressed interest in elevating their web presence and is considering a new website. Below are the details:</p>

        <p><strong>Email:</strong> ${email}</p>

        <p>The client is seeking to create a dynamic and impactful website that will help enhance their brand and reach a wider audience.</p>

        <p>Please reach out to them to discuss further details and explore how you can assist them with this project.</p>

        <p>Best Regards,<br>Your Web Emailer</p>

      </div>

    `;

    // Create a FormData object and append the message

    var data = new FormData();

    data.append('email', email);

    data.append('message', message);

    fetch(form.action, {

      method: form.method,

      body: data,

      headers: {

        'Accept': 'application/json'

      }

    }).then(response => {

      if (response.ok) {

        // Show a normal JavaScript alert on success

        alert("Thanks for your submission! We have received your request and will get back to you soon.");

        form.reset();

      } else {

        response.json().then(data => {

          if (Object.hasOwn(data, 'errors')) {

            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");

          } else {

            status.innerHTML = "Oops! There was a problem submitting your form.";

          }

        })

      }

    }).catch(error => {

      status.innerHTML = "Oops! There was a problem submitting your form.";

    });

  }

  form.addEventListener("submit", handleSubmit);
