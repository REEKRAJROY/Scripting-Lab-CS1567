function sum(n){
    var sum=0,copy=n;
    while(n)
    {
        sum+=n%10;
        n = Math.floor(n / 10);
    }
    //alert("Sum of digits of "+copy+" = "+sum);
    document.getElementById("test").innerHTML="Sum of digits of "+copy+" = "+sum;
}