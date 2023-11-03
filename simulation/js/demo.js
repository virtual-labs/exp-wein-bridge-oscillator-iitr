;
(function () {
    
    
    var yy=document.getElementById("check")
    yy.onclick=checkk;
    function checkk()
    {

        if(connections.length==0)  {
            alert("Please make the connections first");
            return false;

        }

       if(connections.length<2)

       {
        alert("Wrong Connections\nPlease go through the instructions once")
        
       return false
    }
        
        if (connections.length > 0) {
            var listDiv = []
             for (var j = 0; j < connections.length; j++) {
                listDiv.push(connections[j].sourceId)
                listDiv.push(connections[j].targetId)       
            }
            var f=1
			var num=[]
			for(i=0;i<4;i++){
			 num[i]=Number(listDiv[i].substring(14))
				//alert(num[i])
			}
         for(var i=0;i<4;i+=2)
         {
			 if((num[i]+1==num[i+1])||(num[i]-1==num[i+1])) continue
			 else {f=0;break;}
         }
         
         if(f==0) {
         alert("Wrong Connections\nPlease go through the instructions once");
		 return false;
		 }
        }
		if (f==1) {
			alert("Right connections.\nYou can start your experiment.");
			document.getElementById("check").remove();
			document.getElementById("start").disabled=false;
			document.getElementById("start").style.cursor='pointer';
			document.getElementById("start").style.backgroundColor='green';
			document.getElementById("start").style.color='white';
			return true;
		 }
    }

        showConnectionInfo = function (listDiv) {
           
                 console.log(listDiv)
        },
        hideConnectionInfo = function () {
            listDiv.style.display = "none";
        },
        connections = [],
        updateConnections = function (conn, remove) {
            if (!remove) connections.push(conn);
            else {
                var idx = -1;
                for (var i = 0; i < connections.length; i++) {
                    if (connections[i] == conn) {
                        idx = i;
                        break;
                    }
                }
                if (idx != -1) connections.splice(idx, 1);
            }
            if (connections.length > 0) {
                var listDiv = []
                 for (var j = 0; j < connections.length; j++) {
                    listDiv.push(connections[j].sourceId)
                    listDiv.push(connections[j].targetId)

                        
                }
                showConnectionInfo(listDiv);
            } else
                hideConnectionInfo();
        };

    jsPlumb.ready(function () {

        var instance = jsPlumb.getInstance();

        // suspend drawing and initialise.
        instance.batch(function () {

            // bind to connection/connectionDetached events, and update the list of connections on screen.
            instance.bind("connection", function (info, originalEvent) {
                updateConnections(info.connection);
            });
            instance.bind("connectionDetached", function (info, originalEvent) {
                updateConnections(info.connection, true);
            });

            instance.bind("connectionMoved", function (info, originalEvent) {
                //  only remove here, because a 'connection' event is also fired.
                // in a future release of jsplumb this extra connection event will not
                // be fired.
                updateConnections(info.connection, true);
            });


            // configure some drop options for use by all endpoints.
            var exampleDropOptions = {
                tolerance: "touch",
                hoverClass: "dropHover",
                activeClass: "dragActive"
            };

            var exampleEndpoint2 = {
                endpoint: ["Dot", { radius: 10 }],
                paintStyle: { fill: "red" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "red", strokeWidth: 5 },
                connector: ["Bezier", { curviness: -10 } ],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions
            };
			var exampleEndpoint21 = {
                endpoint: ["Dot", { radius: 5 }],
                paintStyle: { fill: "red" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "red", strokeWidth: 5 },
                connector: ["Bezier", { curviness: -10 } ],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions
            };
			var exampleEndpoint3 = {
                endpoint: ["Dot", { radius: 10 }],
                paintStyle: { fill: "black" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "black", strokeWidth: 5 },
                connector: ["Bezier", { curviness: 10 } ],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions
            };
			var exampleEndpoint31 = {
                endpoint: ["Dot", { radius: 5 }],
                paintStyle: { fill: "black" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "black", strokeWidth: 5 },
                connector: ["Bezier", { curviness: 10 } ],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions
            };
            
			instance.addEndpoint("dragDropWindow1", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint2);
            instance.addEndpoint("dragDropWindow2", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint21);
            instance.addEndpoint("dragDropWindow3", { anchor: [0.75,0 , 0, -1] }, exampleEndpoint3);
            instance.addEndpoint("dragDropWindow4", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint31);
            
			
            instance.draggable(jsPlumb.getSelector(".drag-drop-demo .window"));

            var hideLinks = jsPlumb.getSelector(".drag-drop-demo .hide");
            instance.on(hideLinks, "click", function (e) {
                instance.toggleVisible(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            var dragLinks = jsPlumb.getSelector(".drag-drop-demo .drag");
            instance.on(dragLinks, "click", function (e) {
                var s = instance.toggleDraggable(this.getAttribute("rel"));
                this.innerHTML = (s ? 'disable dragging' : 'enable dragging');
                jsPlumbUtil.consume(e);
            });

            var detachLinks = jsPlumb.getSelector(".drag-drop-demo .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {

                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
           
        });

        jsPlumb.fire("jsPlumbDemoLoaded", instance);

    });
    
})

()
;
