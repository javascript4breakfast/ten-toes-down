function sanitizeValue(value) {
    if (typeof value === 'boolean') {
        return value ? 'true' : 'false';
    }

    if (typeof value === 'object') {
        return 'null';
    }
    return value.toString();
}

function format (seconds) {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    
    if (hh) {
        return `${hh}:${pad(mm)}:${ss}`
    }
    
    return `${mm}:${ss}`
}
  
function pad (string) {
    return ('0' + string).slice(-2)
}

export {
    pad,
    format,
    sanitizeValue,
}