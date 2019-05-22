//register.jsp button control
	//1. district region activation switch
$(document).ready(function() {
  $('.view-radio-group-object').hide();
  $('.view-radio-group').change(
    function (){
  		if($('input:radio[id=transport]').is(':checked')){
  			$('.view-radio-group-object').show();
    	}else{
    		$('.view-radio-group-object').hide();
    	}
  	})
});

	//2. trans button deactivation switch
var transSwitch = $('.on-off-control').attr('value');
if(transSwitch == 'off') {
  $('#transport').attr('disabled',true);
};
// end of register.jsp button control -------------------


//file upload button setting
$('input[type="file"]').change(function(e){
  var fileName = e.target.files[0].name;
  $('.displayFileName').attr('value',fileName); // input text에 가져온 파일이름 표시
});
// end of file upload button setting --------------------
  

//dataTable lib setting : export html table to csv file
  //1. dataTable lib setting and hiding button
$(document).ready(function() {
	    $('#dataTable').DataTable( {
	        dom: 'Bfrtip',
	        buttons: [{
	            extend: 'csvHtml5',
	            text: 'Export CSV',
	            footer: true,
	            className: 'exportCSVFile', //class추가 가능 : 다른 script, css설정에서 불러서 사용가능
	        }]
	    } );
	} );

  //2. set other button
$('#excuteWriteCSV').click(function() {
	  $('.exportCSVFile').click();
});
// end of dataTable lib setting -------------------------