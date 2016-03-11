function validateEmail(sEmail) {
    var atpos = sEmail.indexOf("@");
    var dotpos = sEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=sEmail.length) {
        return false;
    } else {
    	return true;
    }
}