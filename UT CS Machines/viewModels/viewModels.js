(function($, console, doc) {
	var machinesViewModel;

	machinesViewModel = kendo.observable({
		machines : [],
        
		loadMachines: function() {
			var that = this;
			var i;
			var machines = [];
            
            $.ajax({
               type: "GET",
                url: "http://apps.cs.utexas.edu/unixlabstatus/",
                error: function() {
                    alert("error!");
                },
                success: function(data) {
                    //alert(data.responseText);
                    machines = parseScrapedData(data);
                    //alert(machines);
                    that.set("machines", machines);
                }
            });
            
            
            
            
            
            //var machine1 = new Object();
            //machine1.status = "up";
            //machine1.machineName = "charity";
            //machine1.cpuType = "32-bit";
            //machine1.load = 0;
            //machine1.users = 0;
            //machines.push(machine1);
            
            //var machine2 = new Object();
            //machine2.status = "down";
            //machine2.machineName = "diligence";
            //machine2.cpuType = "64-bit";
            //machine2.load = 1.1;
            //machine2.users = 5;
            //machines.push(machine2);
            
            //var machine3 = new Object();
            //machine3.status = "up";
            //machine3.machineName = "patience";
            //machine3.cpuType = "64-bit";
            //machine3.load = 0.4;
            //machine3.users = 10;
            //machines.push(machine3);

			//alert(machines);
			//that.set("machines", machines);
		},

		
	});

	$.extend(window, {
		machinesViewModel: machinesViewModel
	});
    
})(jQuery, console, document);