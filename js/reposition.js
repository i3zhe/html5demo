window.addEvent("domready", function(){
    function getRandom(min, max)
    {		
    	var randomNum = Math.random() * (max-min); 
    	return(Math.round(randomNum) + min); 
    }
    
    var maxLengthBig = 174;
    var counterFluid = 1;
    
    var w = [];
    
    var cb = function(items){
           items.each(function(e, i){
               // Azzera counter
               if( counterFluid > maxLengthBig ) counterFluid = 1;
               var a = new Element("img[src=imgs/"+counterFluid+".jpg]");
                   a.inject(e.node);
                   e.node.setStyle("background", "url(/imgs/thewall-null-150x150.gif) no-repeat center center");
               counterFluid++;
           })
       }
    
    var prop = {
                "draggable":true,
                "autoposition":true,
				"preload":true,
                "width":150,
                "inertia":true,
                "height":150,
				"speed":2000,
                "callOnUpdate": cb
                }
    
    for(var i=1; i<13;i++ ){
        
        if(i%2 == 1){
            prop["rangex"] = [-10,10];
            prop["rangey"] = [0,1];
          }else{
              prop["rangey"] = [-10,10];
              prop["rangex"] = [0,1];
          }
        
        var wl = new Wall("wall"+i, prop);
            wl.initWall();
        w[i-1] = wl;
    }
    
    $("shuffle").addEvent("click", function(e){
        e.stop();
        $each(w, function(e,i){
            i%2 == 1 ? e.moveTo(0,getRandom(-9,9)) : e.moveTo(getRandom(-9,9),0);
        })
    }.bind( this ))
});