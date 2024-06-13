"use strict";

const submitRating = () => {
  let rating = document.querySelector('input[name="rating"]:checked').value;
  console.log(rating);

  document.getElementById("ratingForm").style.display = "none";
  document.getElementById("thankYou").style.display = "block";
  document.getElementById("rating").innerHTML = rating;
};
