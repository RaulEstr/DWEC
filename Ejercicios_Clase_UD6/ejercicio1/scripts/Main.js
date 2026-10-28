function executeWidgetCode() {
    require(["DS/WAFData/WAFData"], function(WAFData) {
		
        var myWidget = {
			dataFull: [],
			
            onLoadWidget: function() {
                widget.body.innerHTML = "<p>Hello, World !</p>" + "<br>" ;
            }
        };
        widget.myWidget = myWidget;
        widget.addEvent("onLoad", myWidget.onLoadWidget);
    });
}