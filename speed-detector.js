let carSpeed=80

function carSpeedometer(carSpeed){ 
    if(carSpeed<70){
    return "Ok"
}else if(carSpeed>70){
   //by doing the car speed -70 we establish how much over 70 we are
   //for example if the speed = 80 , 80-70=10 then if we divide that by 5 we get 2
   //hence two demerits(points) will be awarded
    const points = Math.floor((carSpeed-70)/5)
    if(points>12){
       return "Licence terminated"
    }else{
       return `Total points are, ${points}`
    }
}
}
//testing
console.log(carSpeedometer(80))
