module.exports = function reverse (n) {
    n =Math.abs(n);
    let temp;
    let f = 0;
    let s = 0;
    let t = 0;
    let fi = 0;
  if( n / 1000 >= 1){
    temp = n % 1000;
    f = (n - temp) /1000;
    n -= f*1000;
    temp = n % 100;
    s = (n-temp) /100;
    n -= s*100;
    temp = n % 10;
    t = (n-temp)/10;
    n -= f*10;
    fi = n;
        return (fi*1000+t*100+s*10+f)
  }
    else{
      
    temp = n % 100;
    f = (n - temp) /100;
    n -= f*100;
    temp = n % 10;
    s = (n-temp) /10;
    t = n - s*10;
    return (t*100+s*10+f)
    }
}
