function loadScript(src,callback){
    if(typeof src=== "object"){
        let script;
        src.forEach(el =>{
            script= document.createElement('script');
            script.src= el;
           
            document.body.insertAdjacentElement('beforeend', script);
        })
        script.onload= callback;
    }else if(typeof src=== 'function'){
        src()
    }else{
   const script= document.createElement('script');
   script.src= src;
   script.onload= callback;
   document.body.insertAdjacentElement('beforeend', script);
    }
}



loadScript('./common.js',()=>{
  
   greeting();
   console.log('Script has been loaded');
})

loadScript(["./common.js",'./test.js'],()=>{
    greeting();
    greetingtest();
})

loadScript(()=>{
    console.log('callback');
})