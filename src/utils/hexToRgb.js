export default function hexToRgb(hex, opacity) {
    hex = hex.replace(/^#/, '');

    var num = parseInt(hex, 16);

    var red = (num >> 16) & 255;
    var green = (num >> 8) & 255;
    var blue = num & 255;

    return `rgb(${red},${green},${blue},${opacity})`;
}
