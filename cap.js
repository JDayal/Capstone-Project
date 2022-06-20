
// functions for like button
function toggleClass1() {
  let myLike = document.getElementById("basic1");
  myLike.classList.toggle("box");
}

function toggleClass2() {
  let myLike = document.getElementById("basic2");
  myLike.classList.toggle("box");
}

function toggleClass3() {
  let myLike = document.getElementById("basic3");
  myLike.classList.toggle("box");
}



// This is for comments
  let field = document.querySelector("textarea");
  let backUp = field.getAttribute("placeholder")
  let btn = document.querySelector(".btn");
  let clear = document.getElementById('clear')
  let submit = document.querySelector("#submit")
  // let comments = document.querySelector('#comment-box')
  let comments = document.getElementById("comment-box");
  
  // array to store the comments
  let comments_arr = [];


  
  // to generate html list based on comments array
  let display_comments = () => {
    let list = '<ul>';
     comments_arr.forEach(comment => {
      list += `<li>${comment}</li>`;
    })
    list += '</ul>';
    comments.innerHTML = list;
  }
  
  clear.onclick = function(event){
    event.preventDefault();
    // reset the array  
     comments_arr.length = 0;
      // re-genrate the comment html list
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    let content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}

// Hide and show Jquery
$(document).ready(function(){

  // slide down menu
  $("#hide").click(function(){
    $("#imgHide").hide();
    $("p").hide();
  });
  $("#show").click(function(){
    $("#imgHide").show();
    $("p").show();
  });

  $('nav li').hover(
      function() {
        $('ul',this).stop().slideDown(200);
      },
    
      function() {
        $('ul',this).stop().slideUp(200);
      }
    );
// Toggle method
$("#btnTog").click(function(){
  $("#animate").slideToggle(3000);
});

$("button").click(function() {
                  
  //chaining event
 $("#chain").css("color", "yellow")
 //using slide up method
     .slideUp(2000)  
  //using slide down method
      .slideDown(2000)
      .slideUp(2000)
      .slideDown(2000)
      .slideUp(2000);
});


});

