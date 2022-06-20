"use strict";

// functions for like button
function toggleClass1() {
  var myLike = document.getElementById("basic1");
  myLike.classList.toggle("box");
}

function toggleClass2() {
  var myLike = document.getElementById("basic2");
  myLike.classList.toggle("box");
}

function toggleClass3() {
  var myLike = document.getElementById("basic3");
  myLike.classList.toggle("box");
} // This is for comments


var field = document.querySelector("textarea");
var backUp = field.getAttribute("placeholder");
var btn = document.querySelector(".btn");
var clear = document.getElementById('clear');
var submit = document.querySelector("#submit"); // let comments = document.querySelector('#comment-box')

var comments = document.getElementById("comment-box"); // array to store the comments

var comments_arr = []; // to generate html list based on comments array

var display_comments = function display_comments() {
  var list = '<ul>';
  comments_arr.forEach(function (comment) {
    list += "<li>".concat(comment, "</li>");
  });
  list += '</ul>';
  comments.innerHTML = list;
};

clear.onclick = function (event) {
  event.preventDefault(); // reset the array  

  comments_arr.length = 0; // re-genrate the comment html list

  display_comments();
};

submit.onclick = function (event) {
  event.preventDefault();
  var content = field.value;

  if (content.length > 0) {
    // if there is content
    // add the comment to the array
    comments_arr.push(content); // re-genrate the comment html list

    display_comments(); // reset the textArea content 

    field.value = '';
  }
}; // Hide and show Jquery


$(document).ready(function () {
  // slide down menu
  $("#hide").click(function () {
    $("#imgHide").hide();
    $("p").hide();
  });
  $("#show").click(function () {
    $("#imgHide").show();
    $("p").show();
  });
  $('nav li').hover(function () {
    $('ul', this).stop().slideDown(200);
  }, function () {
    $('ul', this).stop().slideUp(200);
  }); // Toggle method

  $("#btnTog").click(function () {
    $("#animate").slideToggle(3000);
  });
  $("button").click(function () {
    //chaining event
    $("#chain").css("color", "yellow") //using slide up method
    .slideUp(2000) //using slide down method
    .slideDown(2000).slideUp(2000).slideDown(2000).slideUp(2000);
  });
});