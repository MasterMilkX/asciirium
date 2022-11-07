
//random map generation
function randomMap(w,h){

    //make empty
    let m = [];
    for(let i=0;i<h;i++){
        m[i] = [];
        for(let j=0;j<w;j++){
            if(j == 0 || j == w-1 || i == 0 || i == h-1)
                m[i][j] = "#";
            else
                m[i][j] = ".";
            
        }
    }

    //add random trees
    for(let i=1;i<h-1;i++){
        for(let j=1;j<w-1;j++){
            if(Math.random() < 0.2)
                m[i][j] = "♠";
        }
    }

    return m;
}