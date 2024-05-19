function greet(userName, callback){
    console.log(`hello there ${userName}`);
    callback();
    }
    function intro(){
    console.log(`this is me`);
    };
    greet("Helen",intro)
    // SetTimeout method, run instruction after a certain time once.
    setTimeout(intro, 3000)
    // setInterval returns instruction after every specified time
    let stop = setInterval(function(){console.log('This is an interval');}, 3000);
    
    React
    
    Reply
    
    
    
    
    
    
    
    