setInterval(()=>{
    // console.log('app is running');
    d = new Date();
    t_hour = d.getHours();
    t_minute = d.getMinutes();
    t_second = d.getSeconds();
    
    hrotation = 30 * t_hour + t_minute/2;
    mrotation = 6 * t_minute + t_second/10;
    srotation = 6 *t_second;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
