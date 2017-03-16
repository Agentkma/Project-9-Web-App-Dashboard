window.onload = function() {
//Colors VARIABLES

var point_radius_color;
var below_line_fill_color;
var primary_bar_desktop_color= 'rgba(123, 104, 238, 1)';
var traffic_button_tablets_color='#2ac641';
var phone_color='#2388b3';
var text_number_color;



//click on logo brings you to top of page

// Notifications

// REMOVE NOTIFICATION BAR WHEN USER CLICKS X BUTTON
// document.getElementById('alert-text').addEventListener('click', function () {
//   $('#alert-text').remove();
// });


//Parent Notification Bar


//Append Notifications to page



//Notfication list-style

//LEFT NAV BAR EVENT LISTENERS:
    //when nave icon clicked icon is highlighted and others are lowlighted

document.getElementById('dashboard-icon').addEventListener('click', function(){

  //add highlight to active/clicked icon
  this.addClass('activeNavIcon');

  });
  //remove highlight from other nav icons
// document.getElementById('members-icon').removeClass('activeNavIcon');
// document.getElementById('visits-icon').removeClass('activeNavIcon');
// document.getElementById('settings-icon').removeClass('activeNavIcon');




    //when clicked....page jumps to appropriate section


//TRAFFIC LINE CHART



//CREATE HOURLY TRAFFIC LINE CHART

//CREATE DAILY TRAFFIC LINE CHART

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

//*************FUNCTIONS

// MAKE WEEKLY BUTTON the active Button
  function weeklyButton (){ document.getElementById('weeklyTraffic');
  $(this).css( 'background-color', 'green');
  $(this).css( 'color', 'white');
 }




//Give Traffic Line Chart active button background-color/
function activeButton () {document.getElementsByClassName('traffic-charts-buttons').addEventListener('click', function () {

    $(this).css( 'background-color', 'green');
    $(this).css( 'color', 'white');


    //remove other  buttons background colors
    document.getElementById('hourlyTraffic').$(this).css( 'background-color', 'white');
    document.getElementById('dailyTraffic').$(this).css( 'background-color', 'white');
    document.getElementById('monthlyTraffic').$(this).css( 'background-color', 'white');

  });
}




//CREATE MONTHLY TRAFFIC LINE CHART


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
              borderWidth: 1,
              // tension: 0,
              backgroundColor: 'rgba(123, 104, 238, 1)',

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
              ],

          }]
      },
      options: {

          legend: {display: true,
                   position: 'right',
                   labels: {boxWidth:  15,}
                 },
          // circumference: 2.5 * Math.PI,
          cutoutPercentage:  60,
      }
  });

}





// OPERATIONS



//Show WEEKLY TRAFFIC LINE CHART BY DEFAULT
document.onload=weeklyChart();

//Show Weekly Button as Active by Default
document.onload=weeklyButton ();

//Show DAILY BAR CHART ON LOAD
document.onload=dailyBarChart();

//Show MOBILE USERS DOUGHNUT CHART ON LOAD
document.onload=mobileUsersChart();

// GIVE ACTIVE TRAFFIC LINE CHART BUTTON BACKGROUND COLOR
window.addEventListener('load', activeButton);

 };
//WHEN HOURLY BUTTON clicked
    //SHOW HOURLY TRAFFLIC LINE CHART
    //Give active button background-color/ remove other  buttons background colors

//WHEN DAILY BUTTON clicked
    //SHOW DAILY TRAFFLIC LINE CHART


//WHEN WEEKLY BUTTON clicked
  //SHOW WEEKLY TRAFFIC CHART


// AlERT box
// WHEN x button is clicked, the alert box div display set to none or not visible
