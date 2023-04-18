// Copyright (c) 2023 Malko All rights reserved
//
// Created by: Savyon
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function enterClicked () {
 
  let result = "";

  // Number User Guessed
  let userTemp = parseInt(document.getElementById("user-temp").value);
 
  // Display if the Temperature is Hot or Cold
  if (userTemp >= 15) {
    result = "It is hot outside."
  }
  if ( userTemp < 15){
    result = "It is cold outside."
  }
  // Display Results back to User
  document.getElementById('result').innerHTML = result
}
