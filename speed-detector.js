let carSpeed=80
if(carSpeed<70){
    console.log("Ok")
}else if(carSpeed>70){
   //by doing the car speed -70 we establish how much over 70 we are
   //for example if the speed = 80 , 80-70=10 then if we divide that by 5 we get 2
   //hence two demerits(points) will be awarded
    const points = Math.floor((carSpeed-70)/5)
    if(points>12){
        console.log("Licence terminated")
    }else{
        console.log("Total points are", points)
    }
}
//testing
