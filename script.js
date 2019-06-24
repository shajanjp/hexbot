function randomHex() {
  const hexMax = 256 * 256 * 256;
  return Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
}

function makeSVG(){
    let color = [
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex()
    ]
  let svgData = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.75'%3E%3Cpolygon 
fill='%23${color[0]}' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon 
fill='%23${color[1]}' points='270 150 360 0 180 0'/%3E%3Cpolygon 
fill='%23${color[2]}' points='450 150 360 300 540 300'/%3E%3Cpolygon 
fill='%23${color[3]}' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon 
fill='%23${color[2]}' points='630 150 720 0 540 0'/%3E%3Cpolygon 
fill='%23${color[0]}' points='810 150 720 300 900 300'/%3E%3Cpolygon 
fill='%23${color[4]}' points='810 150 900 0 720 0'/%3E%3Cpolygon 
fill='%23${color[2]}' points='990 150 900 300 1080 300'/%3E%3Cpolygon 
fill='%23${color[0]}' points='990 150 1080 0 900 0'/%3E%3Cpolygon 
fill='%23${color[2]}' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon 
fill='%23${color[5]}' points='270 450 180 600 360 600'/%3E%3Cpolygon 
fill='%23${color[1]}' points='270 450 360 300 180 300'/%3E%3Cpolygon 
fill='%23${color[2]}' points='450 450 360 600 540 600'/%3E%3Cpolygon 
fill='%23${color[3]}' points='450 450 540 300 360 300'/%3E%3Cpolygon 
fill='%23${color[3]}' points='630 450 540 600 720 600'/%3E%3Cpolygon 
fill='%23${color[4]}' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon 
fill='%23${color[2]}' points='810 450 900 300 720 300'/%3E%3Cpolygon 
fill='%23${color[1]}' points='990 450 900 600 1080 600'/%3E%3Cpolygon 
fill='%23${color[0]}' points='990 450 1080 300 900 300'/%3E%3Cpolygon 
fill='%23${color[6]}' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon 
fill='%23${color[2]}' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon 
fill='%23${color[0]}' points='630 750 720 600 540 600'/%3E%3Cpolygon 
fill='%23${color[1]}' points='810 750 720 900 900 900'/%3E%3Cpolygon 
fill='%23${color[5]}' points='810 750 900 600 720 600'/%3E%3Cpolygon 
fill='%23${color[3]}' points='990 750 900 900 1080 900'/%3E%3Cpolygon 
fill='%23${color[3]}' points='180 0 90 150 270 150'/%3E%3Cpolygon 
fill='%23${color[0]}' points='360 0 270 150 450 150'/%3E%3Cpolygon 
fill='%23${color[4]}' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon 
fill='%23${color[6]}' points='0 300 -90 450 90 450'/%3E%3Cpolygon 
fill='%23${color[4]}' points='0 300 90 150 -90 150'/%3E%3Cpolygon 
fill='%23${color[4]}' points='180 300 90 450 270 450'/%3E%3Cpolygon 
fill='%23${color[5]}' points='180 300 270 150 90 150'/%3E%3Cpolygon 
fill='%23${color[6]}' points='360 300 270 450 450 450'/%3E%3Cpolygon 
fill='%23${color[4]}' points='360 300 450 150 270 150'/%3E%3Cpolygon 
fill='%23${color[0]}' points='540 300 450 450 630 450'/%3E%3Cpolygon 
fill='%23${color[6]}' points='540 300 630 150 450 150'/%3E%3Cpolygon 
fill='%23${color[1]}' points='720 300 630 450 810 450'/%3E%3Cpolygon 
fill='%23${color[5]}' points='720 300 810 150 630 150'/%3E%3Cpolygon 
fill='%23${color[4]}' points='900 300 810 450 990 450'/%3E%3Cpolygon 
fill='%23${color[3]}' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon 
fill='%23${color[5]}' points='0 600 90 450 -90 450'/%3E%3Cpolygon 
fill='%23${color[1]}' points='180 600 90 750 270 750'/%3E%3Cpolygon 
fill='%23${color[0]}' points='180 600 270 450 90 450'/%3E%3Cpolygon 
fill='%23${color[0]}' points='360 600 270 750 450 750'/%3E%3Cpolygon 
fill='%23${color[3]}' points='360 600 450 450 270 450'/%3E%3Cpolygon 
fill='%23${color[5]}' points='540 600 630 450 450 450'/%3E%3Cpolygon 
fill='%23${color[6]}' points='720 600 630 750 810 750'/%3E%3Cpolygon 
fill='%23${color[4]}' points='900 600 810 750 990 750'/%3E%3Cpolygon 
fill='%23${color[6]}' points='900 600 990 450 810 450'/%3E%3Cpolygon 
fill='%23${color[2]}' points='0 900 90 750 -90 750'/%3E%3Cpolygon 
fill='%23${color[0]}' points='180 900 270 750 90 750'/%3E%3Cpolygon 
fill='%23${color[4]}' points='360 900 450 750 270 750'/%3E%3Cpolygon 
fill='%23${color[1]}' points='540 900 630 750 450 750'/%3E%3Cpolygon 
fill='%23${color[4]}' points='720 900 810 750 630 750'/%3E%3Cpolygon 
fill='%23${color[6]}' points='900 900 990 750 810 750'/%3E%3Cpolygon 
fill='%23${color[6]}' points='1080 300 990 450 1170 450'/%3E%3Cpolygon 
fill='%23${color[4]}' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon 
fill='%23${color[5]}' points='1080 600 1170 450 990 450'/%3E%3Cpolygon 
fill='%23${color[2]}' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E`
  let svg = svgData.replace(/\n/gm,"");
  return svg;
}

let bodyElement = document.getElementById('main-body');
bodyElement.style.backgroundImage = `url("${makeSVG()}")`;
