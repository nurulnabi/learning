var createRandomObjects = function (same,nfield) {
    var obj = {};
    var name = ['noor','nabi','ansari'];
    var company = ['creatiosoft','google','redhat'];
    var a = [true,false];
    if(nfield==0){
        if(same){
            obj['name'] = name[1];
            obj['company'] = company[1];
            obj['age'] = 5;
        }else{
            obj['name'] = name[Math.floor(Math.random()*3)];
            obj['company'] = company[Math.floor(Math.random()*3)];
            obj['age'] = Math.floor(Math.random()*6);
        }
    }else{
       if(same){
            obj['name'] = name[1];
            obj['company'] = company[1 ];
            obj['age'] = 5;
            obj['isAdult'] = true;
        }else{
            obj['name'] = name[Math.floor(Math.random()*3)];
            obj['company'] = company[Math.floor(Math.random()*3)];
            obj['num'] = Math.floor(Math.random()*3);
            obj['isAdult'] = a[Math.floor(Math.random()*2)]
        } 
    }
    return obj;
}


module.exports = createRandomObjects;

