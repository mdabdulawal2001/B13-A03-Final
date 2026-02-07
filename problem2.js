function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (otp.length != 8) {
    return false;
  } else if (!otp.toLowerCase().startsWith("ph-")) {
    return false;
  } else {
    return true;
  }
}

// const result = validOtp("00-10980");
// console.log(result);
