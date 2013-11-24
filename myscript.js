
var currentPage = "";

function showCalendar() {
    YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {
    
    // Create a new instance of calendar, placing it in 
    // #mycalendar container, setting its width to 340px,
    // the flags for showing previous and next month's 
    // dates in available empty cells to true, and setting 
    // the date to today's date.          
    var calendar = new Y.Calendar({
      contentBox: "#mycalendar",
      width:'200px',
      showPrevMonth: true,
      showNextMonth: true,
      date: new Date()}).render();
    });   
}


function init() {

  $("#menu ul li a").bind("click", function(event) {
      event.preventDefault();
      loadPage($(this).text());
    });
      
  showCalendar();    
     
  // clock();  
  loadPage("Home");    
}


function loadPage(item) {
  console.log("loadPage " + item);
  
  newPage = $.trim(item);
  if (newPage == currentPage) {
    return;  
  }
  
  if (newPage == "Album") {
    $("#content").load("album.html");  
  } else if (newPage == "Home"){
    $("#content").load("blog.html"); 
  } else if (newPage == "Blog"){
    $("#content").load("blog.html"); 
  } else if (newPage == "GuestBook"){
    $("#content").load("blog.html"); 
  } else {
      console.log("page not found : " + item);
      return;
  }
  
  currentPage = newPage;
}