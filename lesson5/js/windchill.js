function windspeed(t, s) {
    let f = 35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + 0.4275 * t * (s ** 0.16);
    return f ;
};

let temp = document.getElementsByClassName("temperature")
let speed = document.getElementById("speed")

const sum = temp.reduce((prevValue,curValue) => {
    return prevValue * curValue}, 1);
    HTMLFormControlsCollection.log(sum)
}

//working on...