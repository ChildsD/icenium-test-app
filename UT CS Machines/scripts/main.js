
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}

(function($, doc) {
	var _app,
    	_private,
    	_appData = new AppData(),
    	_isOnline = true;
    
	//Private methods
	_private = {};
    
	_app = {
		init: function() {
            
            machinesViewModel.loadMachines();
		},
	};
    
	_app.init();
        
	$.extend(window, {
		machinesViewModel: _app.machinesViewModel
	});
}(jQuery, document));

function parseScrapedData(data)
{
    var cpuType = "unknown";
    var machines = [];
    var count = 0;
    //alert(data);
    $(data).find("tr").each(function(){
        //alert(count);
        
        //Make sure the row has 5 columns (1 for host, status, uptime, users, and load)
        if($(this).children(".ruptime").length == 5)
        {
            if($(this).children(".ruptime").eq(1).text() == "up" ||$(this).children(".ruptime").eq(1).text() == "down")
            {
                var machine = new Object();
                machine.status = $(this).children(".ruptime").eq(1).text();
                machine.machineName = $(this).children(".ruptime").eq(0).text();
                machine.cpuType = cpuType;
                machine.load = $(this).children(".ruptime").eq(4).text();
                machine.users = $(this).children(".ruptime").eq(3).text();
                machines.push(machine);
            }
        }
        
        else if($(this).children(".ruptime").length == 1)
        {
            if($(this).children(':contains("32-bit")').length == 1)
            {
                cpuType="32-bit";
            }
            
            else if($(this).children(':contains("64-bit")').length == 1)
            {
                cpuType="64-bit";
            }
        }
    });
    return machines;
}