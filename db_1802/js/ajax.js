function ajax(method,url,data,success,error){
	var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
	var str = "";
	if(method == "get"){
		for(var key in data){
			str+="&"+key+"="+data[key];
		}
		str = str.substr(1);
		url = url+"?"+str;
		xml.open("get",url,true);

		xml.send();
	}else{
		for(var key in data){
			str+="&"+key+"="+data[key];
		}

		str = str.substr(1);

		xml.open("post",url,true);
		xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xml.send(str);
		
	}

	xml.onreadystatechange = function(){
		if(xml.readyState == 4 && xml.status == 200){
			var d = xml.responseText;
			

			success&&success(d);
		}else{
			error&&error(xml.status)
		}
	}
}