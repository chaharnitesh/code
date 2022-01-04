
(function () {

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.12.4') {
        console.log("jQuery LOADED");
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src",
            "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js");


        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);


        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    console.log(window.jQuery.fn.jquery);
                    scriptLoadHandler();
                }
            };
        } else {
            console.log("ONLOAD STATE");
            script_tag.onload = scriptLoadHandler;
        }
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }


    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function

        main();
    }

    /******** Our main function ********/
    function main() {
        jQuery(document).ready(function ($) {
            /******* Load Bootstrap JS *******/
            var bootstrap_script = document.createElement('script');
            bootstrap_script.setAttribute("type", "text/javascript");
            bootstrap_script.setAttribute("src",
                "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");

            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(bootstrap_script);

            /******* Load Bootstrap CSS *******/
            var bootstrap_css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            });
            bootstrap_css_link.appendTo('head');
            /******* Load HTML *******/
            //var jsonp_url = "example.com/srtest?callback=?";
            //$.getJSON(jsonp_url, function (data) {
            //  $("#myModal_srsr").modal("show");
            //});
        })
    }
   
    
})();



const Widget = Object.create({
   
    create(domain,srnumber,timestamp,signature) {
        const wdg = document.createElement("div")
        wdg.classList.add("brandwise-warranty");
         if( srnumber === "" || timestamp === "" || signature === "" ){
          
    	  wdg.innerHTML = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#warrantyform">
  Launch Brandwise modal
</button>
<!-- Modal -->

<div class="modal fade" id="warrantyform" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"> <b>Warranty Registration</b> </h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div id="message"> </div>
      </div>   
      <div class="modal-body">    
      <p><strong style="color:red ;font-size: 25px;"> Warranty form is not available due to missing parameters</strong></p>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>`;

  	}
  	else{
  	 wdg.innerHTML = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#warrantyform">
  Launch Brandwise modal
</button>
<!-- Modal -->

<div class="modal fade" id="warrantyform" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"> <b>Warranty Registration</b> </h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div <span style="color:;" id="messague"></span>  </div>
        <div id="message"> </div>
      </div>
     
      <div class="modal-body">
      <form onsubmit= "return warrantyFunction(event)" id="warranty" >
      <div class="form-group">
          <label for="name">Name <span style="color:red;">*</span></label>
          <input type="text" class="form-control" name="name" id="fname"
                      placeholder="Enter Your Name"  required>				
      </div>
      <div class="form-group">
          <label for="Mobile">Mobile <span style="color:red;">*</span></label>
          <input type="phone" class="form-control was-validated" id="mobile"
              placeholder="Enter Mobile Number" name="mobile" maxlength="10" required>
      </div>

      <div class="form-group">
          <label for="email">Email <span style="color:red;">*</span></label>
          <input type="email" class="form-control was-validated" id="email" placeholder="Enter email"
              name="email" required>
      </div>
      <div class="form-group">
          <label for="Location"> Country <span style="color:red;">*</span></label>
          <input type="text" class="form-control was-validated" id="location" placeholder="Enter Country"
          name="country" required>
      </div>

      <div class="form-group">
          <label for="serial"> Serial No.</label>
          <input type="text" class="form-control" id="srnumber" value="`+srnumber+`" disabled
              name="serial">       
      </div>
     
      
      <div class="form-group" style="text-align:center;">
          <button class="btn btn-primary btn-submit" style="width:150px;">Submit</button>
      </div>
      </form>
      <div style='display:none' id='otpform-container'>
   
 
    <form onsubmit= "return otpverificationFunction(event)" id='otpform'> 

    <input type="text" name="otp" id="otp" placeholder="Enter Email OTP here" required >
    <button class="btn btn-primary btn-sm" required>Submit</button>


    </form>
    </div>
    <div style='display:none;' class="card" id ="success">
      <h1 style='color:#88B04B; text-align: center;'>Success</h1> 
      <p  style='color:#404F5E; text-align: center;'>You have successfully registered warranty! <br><br></p>
    </div>
    </div>
 
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>`;

  	}
  	
       
      //  console.log("Hello from brandwise");
      //  console.log(srnumber);
        
 
        return wdg;
      
    }
  
});


function warrantyFunction(e) {
   
    e.preventDefault()
    var email = document.getElementById('email').value;
    var serial_number = document.getElementById('srnumber').value;
    alert("The form was submitted");
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "https://shycocare.ciphercode.co/api/v1/send-otp/", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify({ 'email': email,'timestamp':timestamp,'signature':signature,'serial_number':serial_number }));
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            document.getElementById('message').style.color = "green"; 
            var json_res = JSON.parse(xhttp.response); 
            document.getElementById('message').innerHTML = json_res['message']
            document.getElementById("warranty").style.display="none";
            document.getElementById("otpform-container").style.display = "block";
        
        }
        else {
            document.getElementById('message').style.color = "red"; 
            var json_res = JSON.parse(xhttp.response); 
            document.getElementById('message').innerHTML = json_res['message']
        }

    };

 return false;
}

function otpverificationFunction(e) {

    e.preventDefault()

    var otp = document.getElementById('otp').value;
    var email = document.getElementById('email').value;
    var name = document.getElementById('fname').value;
    var mobile = document.getElementById('mobile').value;
    var serial_number = document.getElementById('srnumber').value;
    var location = document.getElementById('location').value;
    alert("The form was submitted");
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "https://shycocare.ciphercode.co/api/v1/warranty/", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify({ 'otp': otp ,'email':email,'name':name,'mobilenumber':mobile,
                              'serial_number':serial_number,'location':location}));
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            document.getElementById('message').style.color = "green";
            var json_res = JSON.parse(xhttp.response); 
            document.getElementById('message').innerHTML = json_res['message']
            document.getElementById("otpform-container").style.display = "none";
            document.getElementById("success").style.display = "block"; 
        }
        else {
            console.log('else condition')
           // alert(this.responseText);
            document.getElementById('message').style.color = "red"; 
    
            var json_res = JSON.parse(xhttp.response);
           
            document.getElementById('message').innerHTML = json_res['message']
        }

    };

 return false;
}



