function onLoad() {
    var ajaxRqst = new XMLHttpRequest();
    ajaxRqst.onreadystatechange = function() {};
    ajaxRqst.open('GET', 'assign10Template.php');
    ajaxRqst.send();
}
