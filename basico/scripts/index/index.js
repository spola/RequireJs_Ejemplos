define(['jquery','jquery-ui'],
	function($) {
		var $dlg = $('#dialogo').dialog(
			{autoOpen: false}
		);
		
		$('#btnDialogo').click(function(){
			$dlg.dialog("open");
		});
	}
);