function updateIframe() {
				$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssText").val() + "</style></head><body>" + $("#htmlText").val() + "</body></html>");

				document.getElementById("outputText").contentWindow.eval($("#javaText").val())
				
			}
			
			$(".navButton").click(function(){
				$(this).toggleClass("active")
				
				var panelId = $(this).attr("id") + "Text";
				$("#" + panelId).toggleClass("hidden");
				
				$(this).removeClass("highlightedButton")

				var activePanelsNumb = 4-$(".hidden").length
				$(".panel").width(($(window).width()/activePanelsNumb)-12);
			})

			$( ".navButton" ).hover(function() {
    			$( this ).addClass("highlightedButton");
  			}, function() {
   				$( this ).removeClass("highlightedButton");
 			});

 			$(".panel").height($(window).height() - $("#mainHeader").height());
 			$(".panel").width(($(window).width()/2)-12);

 			


 			updateIframe();
 			$("textarea").on("change keyup paste", function(){
 				updateIframe();
 			})