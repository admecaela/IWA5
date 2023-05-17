const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';
let shipping = null;
let currency = '$';
        
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

if (location === 'RSA') {
    shipping = 400 
    currency = 'R';
} else if (location === 'NAM') {
    shipping = 600
    currency = $;
} else {
    shipping = 800
    currency = $;
}

if (shoes + batteries + pens + shirts > 1000) {
    if (location === 'NAM' && customers < 2) {
        if (location === 'RSA') {
            shipping = 0 || calcShipping;
        }
    }
}

if (shoes + batteries + pens + shirts > 60) {
    if (location === 'NAM' && currency ==='$') {
        if (customers < 2) {
            shipping = 0 || calcShipping;
        }
    }
}

Location == 'NK'? ,console.log(BANNED_WARNING)
console.log ('price:', shoes + batteries + pens + shirts);