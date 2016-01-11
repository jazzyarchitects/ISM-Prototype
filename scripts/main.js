// JavaScript Document
//$(document).ready(drag_sel);

//$(document).ready(click_sel);
$(document).ready(function(e) {
    drag_sel();
	$(".draggable").dblclick(function(e) {
        alert("Please drag it");
    });
});

function drag_sel(){
	common();
	drag_site();
}


function click_sel(){
	common();
	click_site();
}
function right_popout_onfocus()
{
		$right_popout.animate({width:'7.5%',opacity:'1',right:'0px'},500);
}
function right_popout_lostfocus()
{
		$right_popout.animate({width:'0%',right:'0px',opacity:'0'},500);
}
function display_this_pic()
{
		
		$window_width=window.innerWidth;
		$image_width=$(this).width();
		$image_height=$(this).height();
		$disp_height=$("#image_show_area").height();
		$multi=$disp_height/$image_height;
		$disp_width=$image_width*$multi;
		//alert($image_width);
		$leftpx=(($window_width-$disp_width)/2);
		$disp_width_percent=($leftpx/$window_width)*100;
		var source=$(this).attr('src');
		//alert(source);
		$("#image_view").css('left',$disp_width_percent+'%');
		$("#image_show_area").attr('src',source).attr('height','100%').attr('width','auto');
}
function hide_this_pic(){
//		$("#image_view").css('left','0%');
//		$("#image_show_area").attr('src','images/slideshow/default.jpg');
		
}

function show_phdjrf(){
	$("#admin_jee_info").show();
	$(".admissions").hide(150);
	$("#admin_phd").show(150);
}
	


function drag_site()
{ 


	$(".draggable").draggable({
		cursor:"move",
		overflow:'visible',
		helper:'clone'
	});
	
	
	
	//Drop About ISM
	$(".droppable").droppable({
		accept:".draggable",
		activeClass:"ui-state-hover",
		hoverClass:"ui-state-active",
		drop: function(event, ui){
			if($(ui.draggable).attr('id')=="draggable_fee_struct")
			{window.open("http://www.ismdhanbad.ac.in/academics/FEE.pdf","_blank");}
			else if($(ui.draggable).attr('id')=="draggable_clib")
			{window.open("http://www.ismlib.ac.in/","_blank");}
			else if($(ui.draggable).attr('id')=="draggable_acadamic_cal")
			{window.open("http://www.ismdhanbad.ac.in/wp-content/uploads/2012/04/academic_calendar.pdf","_blank");}
			else if($(ui.draggable).attr('id')=="draggable_dsc")
			{window.open("http://www.ismdhanbad.ac.in/exam/DSC.pdf","_blank");}
			else if($(ui.draggable).attr('id')=="draggable_phd")
			{window.open("http://www.ismdhanbad.ac.in/exam/PhD.pdf","_blank");}
			else if($(ui.draggable).attr('id')=="draggable_placements")
			{window.open("http://www.ismdhanbad.ac.in/student/placement/index.php","_blank");}
			else if($(ui.draggable).attr('id')=="draggable_alumni")
			{window.open("http://www.ismaa.in/","_blank");}
			else
			{
			
				$(".main_body").hide();
				if($(ui.draggable).attr('id')=="draggable_ism")
				{$("#about_ism").show();}
				else if($(ui.draggable).attr('id')=="draggable_hostels")
				{$("#about_hostels").show();}
				else if($(ui.draggable).attr('id')=="draggable_weather")
				{$("#about_weather").show();}
				else if($(ui.draggable).attr('id')=="draggable_concetto")
				{$("#about_concetto").show();}
				else if($(ui.draggable).attr('id')=="draggable_basant")
				{$("#about_basant").show();}
				else if($(ui.draggable).attr('id')=="draggable_parakram")
				{$("#about_parakram").show();}
				else if($(ui.draggable).attr('id')=="draggable_srijan")
				{$("#about_srijan").show();}
				else if($(ui.draggable).attr('id')=="draggable_pratibimb")
				{$("#about_pratibimb").show();}
				else if($(ui.draggable).attr('id')=="draggable_jee_info" || $(ui.draggable).attr('id')=="draggable_programmes")
				{$("#admin_jee_info, #admin_jee").show();
				$(".admissions").hide();
				$("#admin_jee").show();}
				else if($(ui.draggable).attr('id')=="draggable_dept")
				{$("#depts").show();}
				else if($(ui.draggable).attr('id')=="draggable_chair")
				{$("#chair_direct").show();
				$("#black_screen").css('height',$("#chair_direct").height());}
				/*else if($(ui.draggable).attr('id')=="draggable_governing_body")
				{window.location="admin.html";}
				else if($(ui.draggable).attr('id')=="draggable_acad-admin")
				{window.location="admin.html";}
				else if($(ui.draggable).attr('id')=="draggable_gen-admin")
				{window.location="admin.html";}
				else if($(ui.draggable).attr('id')=="draggable_hos-admin")
				{window.location="admin.html";}*/
				else if($(ui.draggable).attr('id')=="draggable_all_admin")
				{window.location="admin.html";}
				else if($(ui.draggable).attr('id')=="draggable_reach")
				{$("#how-to-reach").show();}
				else if($(ui.draggable).attr('id')=="draggable_faculty")
				{$("#disp_faculty").show();
				$("#sec_1").click();}
				else if($(ui.draggable).attr('id')=="draggable_research")
				{$("#research_div").show();}
				else {$(".main_body").html("Content Changed");}
			}
		}
	});}

/*
function click_site()
{ 
$("#draggable_ism").click(function(e){$(".main_body").hide(); $("#about_ism").show();});
$("#draggable_hostels").click(function(e){$(".main_body").hide(); $("#about_hostels").show();});
$("#draggable_weather").click(function(e){$(".main_body").hide(); $("#about_weather").show();});
$("#draggable_concetto").click(function(e){$(".main_body").hide(); $("#about_concetto").show();});
$("#draggable_basant").click(function(e){$(".main_body").hide(); $("#about_basant").show();});
$("#draggable_parakram").click(function(e){$(".main_body").hide(); $("#about_parakram").show();});
$("#draggable_srijan").click(function(e){$(".main_body").hide(); $("#about_srijan").show();});
$("#draggable_pratibimb").click(function(e){$(".main_body").hide(); $("#about_pratibimb").show();});
$("#draggable_jee_info, #draggable_programmes").click(function(e){$(".main_body").hide(); $("#admin_jee_info, #admin_jee").show();
				$(".admissions").hide();
				$("#admin_jee").show();});
$("#draggable_dept").click(function(e){$(".main_body").hide(); $("#depts").show();});
$("#draggable_chair").click(function(e){$(".main_body").hide(); $("#chair_direct").show();
				$("#black_screen").css('height',$("#chair_direct").height());});
$("#draggable_all_admin").click(function(e){window.location="admin.html";});
$("#draggable_reach").click(function(e){$(".main_body").hide(); $("#how-to-reach").show();});
$("#draggable_faculty").click(function(e){$(".main_body").hide(); $("#disp_faculty").show();
				$("#sec_1").click();});
$("#draggable_research").click(function(e){$(".main_body").hide(); $("#research_div").show();});
$("#draggable_fee_struct").click(function(e){window.open("http://www.ismdhanbad.ac.in/academics/FEE.pdf","_blank");});
$("#draggable_clib").click(function(e){window.open("http://www.ismlib.ac.in/","_blank");});
$("#draggable_acadamic_cal").click(function(e){window.open("http://www.ismdhanbad.ac.in/wp-content/uploads/2012/04/academic_calendar.pdf","_blank");});
$("#draggable_dsc").click(function(e){window.open("http://www.ismdhanbad.ac.in/exam/DSC.pdf","_blank");});
$("#draggable_phd").click(function(e){window.open("http://www.ismdhanbad.ac.in/exam/PhD.pdf","_blank");});
$("#draggable_placements").click(function(e){window.open("http://www.ismdhanbad.ac.in/student/placement/index.php","_blank");});


}
*/
function common()
{//Animation of right out popout
	$("#loading").hide();
	var gallery_icon_click=false;
	//alert($window_width);
	
	var hover_count=0;
	$("#black_screen").hide();
	$("#feedback_form").hide();
	$("#written_expanded").hide();
	$("#disp_on_expand").hide();
	$("#vision_container").hide();
	$("#crest_container").hide();
	$(".main_body").hide();
	$(".admissions").hide();
	$(".admins").hide();
	//$("#admin_jee").show();
	$("#about_ism").show();
	//$("#govern_body").show();
	
	
	$show_notice=true;
	$right_popout_button=$("#right_popout_button");
	$right_popout=$("#right_popout");
	$right_popout_button.mouseenter(right_popout_onfocus).mouseleave(right_popout_lostfocus);
	//To show or hide the photostrip according to clicks//
	$("#image_show_area").css('height','100%');
	$("#gallery_icon").click(function(){
		if(!gallery_icon_click)
		{$("#top_thumb").animate({right:'0%'},500);
		$("#bottom_thumb").animate({left:'0%'},500);
		$("#photoview_div").animate({bottom:'9.73270892%'},500);
		$("#left_notice").animate({width:'0',right:'100%'},500);
		//$("#container_content").animate({position:'absolute',height:'0%',top:'-10000px'},500);
		$("#container_content").hide(500);
		//$("#image_show_area").attr('src','images/slideshow/default.jpg');
		
		$window_width=window.innerWidth;
		$image_width=$("#image_show_area").width();
		$image_height=$("#image_show_area").height();
		$disp_height=$("#image_show_area").height();
		$multi=$disp_height/$image_height;
		$disp_width=$image_width*$multi;
		//alert($image_width);
		$leftpx=(($window_width-$disp_width)/2);
		$disp_width_percent=($leftpx/$window_width)*100;
		$("#image_view").css('left',$disp_width_percent+'%');
		//$("#image_show_area").attr('src','images/slideshow/default.jpg');
		//$("#bottom_ribbon").hide(500);
		$("#notice").dialog("close");
		gallery_icon_click=true;
		}
		else
		{
		$("#top_thumb").animate({right:'150%'},500);
		$("#bottom_thumb").animate({left:'150%'},500);
		$("#photoview_div").animate({bottom:'125%'},500);
		$("#left_notice").animate({width:'20%',left:'0%'},500);
		//$("#container_content").animate({height:'auto',top:'0%'},500);
		$("#container_content").show(500);
		$("#written_expanded").hide();
		if($show_notice){
		$("#notice").dialog("open");
		}
		gallery_icon_click=false;
		}
	});
	
	$(".image_thumbnail").hover(display_this_pic,hide_this_pic);
	
	
	//$bottom_ribbon_expand_content=''
	/*To expand the bottom ribbon on hovering*/
	
	$("#bottom_ribbon").hoverIntent({ over: function(){
										if(!gallery_icon_click)
										{
										$(this).animate({height:'30%', top:'70%'},250);
										$("#lower_ribbon_expand, #bottom_popout").hide(250);
										$("#written_expanded").show(250);
										//$("#notice").hide(250);
										//$(this).html($bottom_ribbon_expand_content);
										}
										}, out: function(){
													$(this).animate({height:'3.912363067%', top:'96.08763693%'},300);
													$("#lower_ribbon_expand, #bottom_popout").show(250);
													$("#written_expanded").hide(250);
													//$("#notice").show(250);
													//$(this).html('');
													}, timeout:150 });
													
												
													
													
													
													
	$("#feedback_link").click(function(e) {
        $("#feedback_form").show(500);
		$("#black_screen").show(500);
			$("#black_screen").click(function(e){
			$("#feedback_form").hide(500);
			$("#black_screen").hide(500);
	});
	});												
		
	$(function() {
    $( "#accordion" ).accordion({
		heightStyle:"content",
		collapsible:true});
	});
	
	
	
	$("#intro").dialog({modal:true});
	
	/*About ism menu*/
	$("#abt_ism_css_menu_crest").click(function(e){
		$("#vision_container").hide(500);
		$(".to-color").hide(500);
		$("#crest_container").show(500);
	});
	
	$("#abt_ism_css_menu_vision").click(function(e){
		$("#vision_container").show(500);
		$(".to-color").hide(500);
		$("#crest_container").hide(500);
	});
	
	$("#abt_ism_css_menu_default, #about_ism_crest_black, #about_ism_ism_vision_black, #abt_ism_css_menu_annual_report").click(function(e){
		$("#crest_container, #vision_container").hide(500);
		$(".to-color").show(10);
	});


	$(".hostel").mouseenter(function(e) {
        $url=$(this).attr('id');
		$("#hostel_images").attr('src','images/'+$url+'.jpg').css('border','groove #000000').attr('alt',$url+' hostel');
    });
	
	/*Admissions menu bar*/
	$("#jee_btech").click(function(e){
		$(".admissions").hide(150);
		$("#admin_btech").show(150);
	});
	$("#jee_mtech").click(function(e){
		$(".admissions").hide(150);
		$("#admin_mtech").show(150);
	});
	$("#jee_dual_degree").click(function(e){
		$(".admissions").hide(150);
		$("#admin_dual_degree").show(150);
	});
	$("#jee_msc").click(function(e){
		$(".admissions").hide(150);
		$("#admin_msc").show(150);
	});
	$("#jee").click(function(e){
		$(".admissions").hide(150);
		$("#admin_jee").show(150);
	});
	$("#jee_msctech").click(function(e){
		$(".admissions").hide(150);
		$("#admin_msctech").show(150);
	});
	$("#jee_intmsc").click(function(e){
		$(".admissions").hide(150);
		$("#admin_integrated").show(150);
	});
	$("#jee_mba").click(function(e){
		$(".admissions").hide(150);
		$("#admin_mba").show(150);
	});
	$("#jee_mphil").click(function(e){
		$(".admissions").hide(150);
		$("#admin_mphil").show(150);
	});
	$("#jee_phd").click(function(e){
		$(".admissions").hide(150);
		$("#admin_phd").show(150);
	});
	
	$("#dept").click(function(e){
		$("#dept > .ui-accordion .ui-accordion-content").css('padding','0px 0px');
	});
	
	
	$("#notice").dialog({
		closeOnEscape:false,
		maxHeight:250,
		maxWidth:450,
		minHeight:150,
		minWidth:250,
		width:400,
		height:200,
		position:{my:"bottom", at:"bottom", of:'.main_body'},
		close:function(e){$("#check_notice").prop('checked',false); $show_notice=false;},
		open:function(e){$("#check_notice").prop('checked',true); $show_notice=true;}
	});
	
	
	
	$("#notice_kudos").hide();
	
	
	
	$("#imp").click(function(e){ $("#notice_imp").show(); $("#notice_kudos").hide();});
	$("#kudos").click(function(e){$("#notice_kudos").show(); $("#notice_imp").hide();});
	
	
	
	
	
	$("#check_notice").change(function(e){
		if($(this).is(":checked"))
		{
			$("#notice").dialog("open");
			$show_notice=true;
		}
		else
		{
			$("#notice").dialog("close");
			$show_notice=false;
		}
	});
	
	$("#check").click(function(e) {
        if($show_notice)
		{
			$("#notice").dialog("close");
			$show_notice=false;
		}
		else
		{
			$("#notice").dialog("open");
			$show_notice=true;
		}
    });
	
	$("#menu_campus-admin").click(function(e){
		$(".admins").hide(150);
		$("#campus_admin").show(150);
	});
	
	$("#menu_campus-main").click(function(e){
		$(".admins").hide(150);
		$("#campus_main").show(150);
	});
	
	$("#associate").show();
	
 }
