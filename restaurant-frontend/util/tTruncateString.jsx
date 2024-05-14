export const TruncateString = (str) => {
 if (str.length > 50) {
        return str.substring(0, 50) + "...";
    } else {
        return str;
    }
}
