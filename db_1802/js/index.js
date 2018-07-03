function showdata(){
	ajax("get","http://localhost/db_1802/php/show.php",{},function(data){
			var data = JSON.parse(data);
			if(data[0].status == 1){
				var str = "";
				var tbody = document.querySelector(".table-bordered>tbody");

				for(var i=0;i<data[1].length;i++){
					str+=`<tr data-id='${data[1][i].qid}'>
							<td class="text-center">${i+1}</td>
							<td class="text-center">${data[1][i].content}</td>
							<td class="text-center">${data[1][i].where}</td>
							<td class="text-center">${data[1][i].idea}</td>
							<td class="text-center"><a href="##" class='del'>删除</a></td>
							<td class="text-center"><a href="##" class='update' data-toggle="modal" data-target="#update_Modal">修改</a></td>
						</tr>`
				}
				tbody.innerHTML=str;
			}
			

	})

}

//查
showdata();


//增
var add_btn = document.getElementById("add_btn");
add_btn.onclick = function(){
	var oCont = document.getElementById("add_content"),
		oWhere = document.getElementById("add_where"),
		oIdea = document.getElementById("add_idea");

	var db_data = {
		content:oCont.value,
		where:oWhere.value,
		idea:oIdea.value
	}


	ajax("post","http://localhost/db_1802/php/add.php",db_data,function(data){
		
		var data = JSON.parse(data);

		if(data.status == 1){
			showdata();
		}

	})
}



var otab = document.getElementById("tab");
var update_content = document.getElementById("update_content");
var update_where = document.getElementById("update_where");
var update_idea = document.getElementById("update_idea");
var update_id = document.getElementById("update_id");
otab.addEventListener("click",function(e){
	var e = e||event;
	var target = e.target ||e.srcElement;
	//删
	if(target.tagName == "A" && target.className =="del"){
		var id = target.parentNode.parentNode.getAttribute("data-id");
		ajax("get","http://localhost/db_1802/php/del.php",{id:id},function(data){
			var data = JSON.parse(data);
			if(data.status == 1){
				showdata();
			}
		})
	}
	if(target.tagName == "A" && target.className =="update"){
		var id = target.parentNode.parentNode.getAttribute("data-id");
		update_content.value = target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
		update_where.value = target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
		update_idea.value = target.parentNode.previousElementSibling.previousElementSibling.innerHTML;
		update_id.setAttribute("data-id", id)
	}

})


//修改
var update_btn = document.getElementById("update_btn");

update_btn.addEventListener("click",function(){
	var data = {
		content:update_content.value,
		where:update_where.value,
		idea:update_idea.value,
		qid:update_id.getAttribute("data-id")
	}

	ajax("post","http://localhost/db_1802/php/update.php",data,function(data){
		var data = JSON.parse(data);
		if(data.status ==1){
			showdata();
		}
	})
})

