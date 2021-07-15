function showDuet(){
    duet_form = document.getElementById("duet");
    show_duet_bt = document.getElementById("show_duet");
    if_duet_p = document.getElementById("if_duet")
    if ( duet_form.style.display === "block"){
        duet_form.style.display = "none";
        if_duet.style.display = "block";
        show_duet_bt.value = "Duet";
    }
    else {
        duet_form.style.display = "block";
        if_duet.style.display = "none";
        show_duet_bt.value = "Not a Duet";
    }
}


/*empty field validation*/
function errorVal(inputtxt, outputTag){
    let err_message = "This field is empty"
    outputTag.innerHTML = err_message;
    if(inputtxt.value == null || inputtxt.value == ""){
        outputTag.style.visibility = "visible";
        inputtxt.focus();
    }
    else {
        outputTag.style.visibility = "hidden";
        return true
    }
}

function validateForm() {
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let student_id = document.getElementById("student_id");
    
    let first_name_2 = document.getElementById("first_name_2");
    let last_name_2 = document.getElementById("last_name_2");
    let student_id_2 = document.getElementById("student_id_2");

    let skill = document.getElementById("skill");
    let instrument = document.getElementById("instrument");
    let location = document.getElementById("location");
    let room = document.getElementById("room");
    let time_slot = document.getElementById("time_slot");
    /* getting error spans from the DOM */

    let first_name_error = document.getElementById("first_name_error");
    let last_name_error = document.getElementById("last_name_error");
    let student_id_error = document.getElementById("student_id_error");
    
    let first_name_2_error = document.getElementById("first_name_2_error");
    let last_name_2_error = document.getElementById("last_name_2_error");
    let student_id_2_error = document.getElementById("student_id_2_error");

    let skill_error = document.getElementById("skill_error");
    let instrument_error = document.getElementById("instrument_error");
    let location_error = document.getElementById("location_error");
    let room_error = document.getElementById("room_error");
    let time_slot_error = document.getElementById("time_slot_error");

    errorVal(first_name, first_name_error);
    errorVal(last_name, last_name_error);
    errorVal(student_id, student_id_error);
}