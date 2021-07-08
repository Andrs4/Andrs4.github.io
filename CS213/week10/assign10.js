function doPHP(){
	var req = new XMLHttpRequest();

	req.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(req.responseText);
			var list = "<table><tr><th>Filename</th><th>Type</th><th>CWD</th><th>Action</th>\n";

			for (var i = 0; i < myObj.length; i++) {
				list = list + "<tr><td>" + myObj[i].fileName + "</td><td>"
                + myObj[i].fileType + "</td><td>" + myObj[i].cwd + "</td><td>" 
                + " <button onclick = 'window.open(\"" + myObj[i].fileName 
                + "\")' >Click to Display</button>" + "</td></tr>\n";
			}
			document.getElementById("files").innerHTML = list;
		}
	};

	req.open("GET", "assign10.php", true);

	req.send();
}