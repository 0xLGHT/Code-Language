let themes = ['fonts', 'images']; // Themes options
let theme; // This will be the active theme
let words = [
    "BEAUTY",
    "DISRUPT MONOTONY",
    "ACCELERATE THE RENAISSANCE",
    "ΞΞΞΞΞΞΞ",
    "FUTURENOW",
    "ZORA NETWORK",
    "LOVE",
    "PASSION",
    "ETHEREUM",
    "NEW INTERNET",
    "BITCOIN",
    "HODL",
    "CRYPTOART",
    "XCOPY",
    "01101100 01101001 01110110 01100101",
    "01100001 01110010 01110100",
    "333",
    "©",
    "⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆",
    "it's onchain not on-chain",
    "just mint it",
    "satoshi",
    "☺☺☺",
    "111",
    "222",
    "333",
    "444",
    "555",
    "666",
    "777",
    "888",
    "999",
    "DECENTRALIZED",
    "!floor",
    "ARTBLOCKS",
    " ⌐◨-◨",
    "<>∞</>",
    "MEMEWARE",
    "$$$",
    "®"
  ];
  let roboto = [], inter = [], arial = [], times = [];
  let fonts = [roboto, inter, arial, times];
  let images = [];
  let bgColors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF6633', '#66FF33', '#3366FF', '#FF3366',
    '#FF9933', '#99FF33', '#3399FF', '#FF3399', '#CCFF33', '#33CCFF', '#FF33CC', '#33FFCC', '#CC33FF', '#FFCC33',
    '#FF6600', '#00FF66', '#6600FF', '#FF0066', '#66FF00', '#0066FF', '#6600FF', '#66FF00', '#0066FF', '#FF6600',
    '#FF3300', '#00FF33', '#3300FF', '#FF0033', '#33FF00', '#0033FF', '#3300FF', '#33FF00', '#0033FF', '#FF3300',
    '#FF4500', '#D2691E', '#8B008B', '#FFD700', '#ADFF2F', '#FF1493', '#1E90FF', '#228B22', '#FFB6C1', '#FFA500',
    '#20B2AA', '#B22222', '#008080', '#191970', '#008B8B', '#4682B4', '#8B4513', '#2E8B57', '#DAA520', '#808080',
    '#B8860B', '#32CD32', '#8A2BE2', '#9400D3', '#FF69B4', '#4B0082', '#FFDAB9', '#708090', '#7B68EE', '#00FA9A',
    '#00CED1', '#2F4F4F', '#F08080', '#696969', '#6B8E23', '#DC143C', '#556B2F', '#CD5C5C', '#7CFC00', '#FF4500',
    '#DA70D6', '#FFA07A', '#3CB371', '#BDB76B', '#8FBC8F', '#7FFF00', '#DB7093', '#CD853F', '#FFC0CB', '#DDA0DD',
    '#800080', '#BC8F8F', '#4169E1', '#FA8072', '#F4A460', '#2E8B57', '#A0522D', '#C71585', '#D2B48C', '#708090',
    '#FFFAF0', '#F0E68C', '#E6E6FA', '#FFF0F5', '#7CFC00', '#FFFACD', '#ADD8E6', '#F08080', '#E0FFFF', '#FAFAD2',
    '#90EE90', '#D3D3D3', '#FFB6C1', '#FFA07A', '#20B2AA', '#87CEFA', '#778899', '#B0C4DE', '#FFFFE0', '#00FF00'
  ];
  
  
  function preload() {
  
    // add more weights if you have
  
    roboto[0] = loadFont('assets/Roboto-Regular.ttf');
    roboto[1] = loadFont('assets/Roboto-Bold.ttf');
    roboto[2] = loadFont('assets/Roboto-Italic.ttf');
    // add more weights if you have
  
    inter[0] = loadFont('assets/Inter-Regular.ttf');
    inter[1] = loadFont('assets/Inter-Bold.ttf');
    inter[2] = loadFont('assets/Inter-Black.ttf');
    // add more weights if you have
  
    arial[0] = loadFont('assets/Arial.ttf');
    arial[1] = loadFont('assets/Arial-Bold.ttf');
    arial[2] = loadFont('assets/Arial-Italic.ttf');
    // add more weights if you have 
  
    times[0] = loadFont('assets/Times-New-Roman.ttf');
    times[1] = loadFont('assets/Times-New-Roman-Bold.ttf');
    times[2] = loadFont('assets/Times-New-Roman-Italic.ttf');
    // add images as needed 
  
    images[0] = loadImage('assets/chains.png');
    images[1] = loadImage('assets/water wave.png');
    images[2] = loadImage('assets/globe with meridians.png');
    images[3] = loadImage('assets/rainbow.png');
    images[4] = loadImage('assets/artist palette.png');
    images[5] = loadImage('assets/bear.png');
    images[6] = loadImage('assets/black flag.png');
    images[7] = loadImage('assets/chart decreasing.png');
    images[8] = loadImage('assets/chart increasing.png');
    images[9] = loadImage('assets/clown face.png');
    images[10] = loadImage('assets/computer disk.png');
    images[11] = loadImage('assets/eggplant.png');
    images[12] = loadImage('assets/fire.png');
    images[13] = loadImage('assets/flushed face.png');
    images[14] = loadImage('assets/frog.png');
    images[15] = loadImage('assets/gorilla.png');
    images[16] = loadImage('assets/smiling face with horns.png');
    images[17] = loadImage('assets/thread.png');
    images[18] = loadImage('assets/trade mark.png');
    images[19] = loadImage('assets/unicorn.png');
    images[20] = loadImage('assets/rzorb.png');
    images[21] = loadImage('assets/web.png');
    images[22] = loadImage('assets/pain.png');
    images[23] = loadImage('assets/code4.png');
    images[24] = loadImage('assets/bas.png');
    images[25] = loadImage('assets/woj.png');
    images[26] = loadImage('assets/was.png');
    images[27] = loadImage('assets/check.png');
    images[28] = loadImage('assets/szorb.png');
    
  }
  
  function setup() {
    createCanvas(2400, 3000);
    noLoop();
    background(220);
    theme = random(themes); // Select a random theme each setup
  }
  
  function draw() {
    background(random(bgColors)); // Randomize background color
    
    switch (theme) {
      case 'fonts':
        drawItems(333, drawText);
        break;
      case 'images':
        drawItems(2000, drawImage); // Increase this number for more images
        break;
      default:
        console.error(`Invalid theme: ${theme}`);
    }
  }
  
  function drawItems(count, drawFunc) {
    for (let i = 0; i < count; i++) {
      push();
      let x = random(width);
      let y = random(height);
      drawFunc(x, y);
      pop();
    }
  }
  
  function drawText(x, y) {
    let size = random(10, 100);
    let font = random(random(fonts));
  
    fill('#000000'); // Black color for text
    textSize(size);
    textFont(font);
    text(random(words), x, y); // Choose a random word each time
  }
  
  function drawImage(x, y) {
    let img = random(images);
    let size = random(10, 100); // Set a random size for the image
    image(img, x, y, size, size);
  }
  
  function mousePressed() {
    theme = random(themes); // Select a new random theme each redraw
    redraw();
  }