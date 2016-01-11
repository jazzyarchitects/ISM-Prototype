// JavaScript Document

$(document).ready(function(e) {
	$show_notice=true;
    $("#black_screen").hide();
	$("#feedback_form").hide();
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
		collapsible:true,
		active:1});
	});
	$("#acad_coun").click(function(e){
		
			$("#frame").prop('src','http://www.ismdhanbad.ac.in/wp-content/uploads/2012/07/AcademicCouncilMmemebers.pdf');
		
	}); 
	
	$("#res_coun").click(function(e){
		
			$("#frame").prop('src','pdfs/res_mem.pdf');
		
	}); 
	
	$("#deans").click(function(e){
		
			$("#frame").prop('src','sub_sites/deans.html');
		
	});  
	
	$("#pce").click(function(e){
		
			$("#frame").prop('src','sub_sites/pce.html');
		
	}); 
	
	$("#asso_dean").click(function(e){
		
			$("#frame").prop('src','sub_sites/asso_dean.html');
		
	}); 
	
	$("#hod").click(function(e){
		
			$("#frame").prop('src','sub_sites/hod.html');
		
	});    
	
	$("#lib").click(function(e){
		
			$("#frame").prop('src','sub_sites/lib.html');
		
	});  
	
	$("#reg").click(function(e){
		
			$("#frame").prop('src','sub_sites/registrar.html');
		
	});
	$("#acad_sec").click(function(e){
		
			$("#frame").prop('src','sub_sites/acad_sec.html');
		
	});  
	
	$("#acc_sec").click(function(e){
		
			$("#frame").prop('src','sub_sites/acc_sec.html');
		
	});  
	
	$("#estb_sec").click(function(e){
		
			$("#frame").prop('src','sub_sites/estb_sec.html');
		
	});  
	
	$("#exam_sec").click(function(e){
		
			$("#frame").prop('src','sub_sites/exam_sec.html');
		
	});   
	
	$("#store_sec").click(function(e){
		
			$("#frame").prop('src','sub_sites/store_sec.html');
		
	});  
	
	$("#camp_admin").click(function(e){
		
			$("#frame").prop('src','sub_sites/camp_admin.html');
		
	});   
	
	$("#camp_main").click(function(e){
		
			$("#frame").prop('src','sub_sites/camp_main.html');
		
	});
	$("#hostel_admin").click(function(e){
		
			$("#frame").prop('src','sub_sites/hostel_admin.html');
		
	});	
	
	
	$("#written_expanded").hide();
	$("#bottom_ribbon").hoverIntent({ over: function(){
										//if(!gallery_icon_click)
										//{
										$(this).animate({height:'30%', top:'70%'},250);
										$("#lower_ribbon_expand, #bottom_popout").hide(250);
										$("#written_expanded").show(250);
										//$("#notice").hide(250);
										//$(this).html($bottom_ribbon_expand_content);
										//}
										}, out: function(){
													$(this).animate({height:'3.912363067%', top:'96.08763693%'},300);
													$("#lower_ribbon_expand, #bottom_popout").show(250);
													$("#written_expanded").hide(250);
													//$("#notice").show(250);
													//$(this).html('');
													}, timeout:150 });
	



	$("#notice").dialog({
		closeOnEscape:false,
		maxHeight:250,
		maxWidth:450,
		minHeight:150,
		minWidth:250,
		width:400,
		height:200,
		position:{my:"bottom", at:"right bottom", of:'#frame'},
		close:function(e){$("#check_notice").prop('checked',false); $show_notice=false;},
		open:function(e){$("#check_notice").prop('checked',true); $show_notice=true;}
	});
	
	
	/*$("#notice").on("focus",function(event, ui){ $("#notice").css('background','#000');});*/
	$("#notice_kudos").hide();
	
	/*
	$("#drop").change(function(e){
		if($("#drop").val()=="i")
		{
			$("#notice_kudos").hide();
			$("#notice_imp").show();
		}
		else
		{
			 $("#notice_kudos").show();
			 $("#notice_imp").hide();
		}
	});*/
	
	
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

});