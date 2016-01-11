// JavaScript Document

$(document).ready(function(e) {
	
	$(".fac_sel").click(function(e){
		$id=$(this).attr('id');
		//alert($id);	
		show_fac($id);
	});
	
	
	
});

function show_fac(index){
		
	$.ajax({
		type:"GET",
		dataType:"xml",
		url:"xmls/fac_"+index+".xml",
		success: function(xml){
			$("#test").html("");
			$(xml).find("prof").each(function(index, element) {
                $image_url=$(this).find("image").text();
				$name=$(this).find("name").text();
				$post=$(this).find("post").text();
				$email=$(this).find("email").text();
				$phone=$(this).find("phone").text();
				$mobile=$(this).find("mobile").text();
				$qual=$(this).find("qualification").text();
				$spcl=$(this).find("specialization").text();
				$research=$(this).find("research").text();
				$notes_url=$(this).find("notes").text();
				$pub_url=$(this).find("publications").text();
				$cv_url=$(this).find("cv").text();
				
				$final="<table align='left' id='fac_tab' >"+
				"<tr><td rowspan='8' width='20%' id='bor'><img src="+$image_url+" width='100%' /></td><td>Name</td><td>"+$name+"&nbsp;(<i>"+$post+"</i>) &nbsp; <a href="+$notes_url+" target='_blank'><img src='images/note.jpg' height='40%'></a> <a href="+$pub_url+" target='_blank'><img src='images/pub.png' height='40%'></a>  <a href="+$cv_url+" target='_blank'><img src='images/cv2.png' height='40%'></a></td></tr>"
				/*+"<tr><td></td><td><i>"+$post+"</i></td></tr>"*/
				+"<tr class='alternate'><td>Email-ID</td><td>"+$email+"</td></tr>"
				+"<tr><td>Mobile</td><td>"+$mobile+"</td></tr>"
				+"<tr class='alternate'><td>Qualifications</td><td>"+$qual+"</td></tr>"
				+"<tr><td>Specialization</td><td>"+$spcl+"</td></tr>"
				+"<tr class='alternate'><td>Research Interests</td><td>"+$research+"</td></tr>"
				+"</table>";
				
				$("#test").append($final);
				//alert(Math.floor(index%2));
            });
			
			
		}
			/*<prof>
		<image>images/faculty/f1/abks.jpg</image>
		<name>Abhay Kumar Singh</name>
		<post>Assistant Proffesor</post>
		<email>itbhu81@gmail.com</email>
		<phone> +91-326-2235670  </phone>
		<mobile></mobile>
		<qualification>M.Sc (BHU), PhD (ITBHU), CSIR(JRF-NET), GATE</qualification>
		<specialization>  Theory of Rings and Modules </specialization>
		<research>Applied Algebra (Coding Theory and Cryptography) </research>
		<notes>http://www.ismdhanbad.ac.in/cv/notes_abhay.pdf</notes>
		<publications>http://www.ismdhanbad.ac.in/cv/pub_abhay.pdf</publications>
		<cv>http://www.ismdhanbad.ac.in/cv/cv_abhay.pdf</cv>
	</prof>*/
			
	
	
	
	
	});
	
	
	
	
	
	
}