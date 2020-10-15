function count(){
   
var options ={
    useEasing : true,
    useGrouping : true,
    separator:',',
    decimal :  '.',
    prefix : '',
    surffix : ''
};
var count = new CountUp("sid",0,5000,0,3,options);
count.start();

var count1 = new CountUp("sed",0,73201,0,3,options);
count1.start();

var count2 = new CountUp("sud",0,9012,0,3,options);
count2.start();

var count3 = new CountUp("sod",0,8723,0,3,options);
count3.start();
}
let one=document.querySelector('.statistics').apply(count())

