function Check (x){
    try {
       let n = [ 10 , 20 , 30];
       console.lo("Happy Complete!");
    }
    catch(err){
        console.log("Kay tri Chuktey Bagh!  "+err);
    }finally{
        console.log("Every Time Execute Honar Aapn");
    }
}

Check(1);