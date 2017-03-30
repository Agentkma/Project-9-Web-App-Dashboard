window.onload = function() {
  /******************************
  	           VARIABLES
  	******************************/

var point_radius_color;
var below_line_fill_color;
var primary_bar_desktop_color= 'rgba(123, 104, 238, 1)';
var traffic_button_tablets_color='#2ac641';

var phone_color='#2388b3';
var text_number_color;
var $dashboard = $("#dashboard-icon");
var $members = $("#members-icon");
var $charts = $("#visits-icon");
var $settings = $("#settings-icon");
var $alert_text = $("#alert-text");



/******************************
	OBJECTS-ORIENTED VARIABLES
	******************************/

	/*****  Navigation Object Literal  *****/
	var nav = {

		// Show active nav item link, using green bar,
		//  on main navigation menu
		activeNav: function(link) {

			$("#left-nav ul").find("li").each(function(){
				$(this).find("span").removeClass("activeNavIcon");
			});
			link.find("span").addClass("activeNavIcon");

		}

	};



  /******************************
  	         FUNCTIONS
  	******************************/



//CREATE WEEKLY TRAFFIC LINE CHART
function weeklyChart () {

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17', '18-24','25-31'],
          datasets: [{

              data: [750, 1250, 1000,1250, 1750, 1500, 1750, 1250, 1000, 2250, 1250, 750],
              borderWidth: 1,
              tension: 0,
              backgroundColor: 'rgba(151, 145, 222, 0.3)',
              responsive: true,
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          legend: {display: false}
      }

  });
}



//CREATE DAILY BAR CHART
//
function dailyBarChart () {

  var ctx = document.getElementById("dailyTrafficChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['S', 'M', 'T', 'W', 'T','F','S'],
          datasets: [{

              data: [75, 100, 175,125,225, 200, 100],

              // tension: 0,
              backgroundColor: 'rgba(123, 104, 238, 1)',

          }]
      },
      options: {
        bar: {
            barPercentage:10
          },
        scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          legend: {
              display: false
          },
          responsive: true,
          mainAspectRatio:false
      }
  });

}

//CREATE MOBILE USERS DOUGHNUT CHART
//
function mobileUsersChart () {

  var ctx = document.getElementById("mobileUsersChart");
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Phones', 'Tablets', 'Desktop'],
          datasets: [{

              data: [15,15, 70],
              borderWidth: 1,
              // tension: 0,
              backgroundColor: [
                phone_color,
                traffic_button_tablets_color,
                primary_bar_desktop_color
              ]


          }]
      },
      options: {

          legend: {display: true,
                   position: 'right',
                   labels: {boxWidth:  15,}
                 },
          // circumference: 2.5 * Math.PI,
          cutoutPercentage:  60,
          responsive: true,
          mainAspectRatio:false,
      }
  });

}

// MAKE WEEKLY BUTTON the active Button


function activeWeekly () {
  var button = document.getElementById("weeklyTraffic");
  button.style.color="white";
  button.style.backgroundColor="green";
}



// MESSAGE FORM FIELD TEST

function messageFormTest () {
  if (document.forms['message-user'].search.value === "" ||
      document.forms['message-user'].messageUser.value === "")
//   display error messages if user isn’t selected or message field is EMPTY

      {
        alert("All fields must be filled in to submit form");
      }

// display message when message sent correctly
  else {
        alert("Your message has been sent!");
        }
}





/******************************
	EVENT LISTENERS/HANDLERS
	******************************/

	/*******  NAV BUTTONS  *******/

	// Dashboard Nav Item
	$dashboard.click(function(){
		nav.activeNav($(this));
	});
	// Members Nav Item
	$members.click(function(){
		nav.activeNav($(this));
	});
	// Charts Nav Item
	$charts.click(function(){
		nav.activeNav($(this));
	});
	// Settings Nav Item
	$settings.click(function(){
		nav.activeNav($(this));
	});


  ///////J QUERY

  // / WHEN CLICKED...Give Traffic Line Chart active button background-color
  $(".traffic-charts li button").click( function () {

    // remove active color from other BUTTONS
  $(".traffic-charts li button").css({
    "background-color" : "white",
    "color": "gray",
  });
    //add active color to button clicked
      $(this).css({
        "background-color" : "green",
        "color": "white",
      });
    }
  );



//Show WEEKLY TRAFFIC LINE CHART BY DEFAULT
document.onload=weeklyChart();

// //Show Weekly Button as Active by Default
document.onload=activeWeekly ();

//Show DAILY BAR CHART ON LOAD
document.onload=dailyBarChart();

//Show MOBILE USERS DOUGHNUT CHART ON LOAD
document.onload=mobileUsersChart();


// WHEN MESSAGE FORM SEND BUTTON CLICKED/ RUN messageFormTest () function
document.getElementById('send-button').addEventListener('click', messageFormTest);



// REMOVE  ALERT/NOTIFICATION BAR WHEN USER CLICKS X BUTTON

$("#alert-x-button").click( function () {
    $("#alert-box").remove();
    $("#bell-active-note").remove();
    });
 };
