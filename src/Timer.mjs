export {after};
export {cancelAfter};

export {periodic};
export {cancelPeriodic};

export {next};
export {wait};

function after(ms, callback, ...args) {
    return setTimeout(callback, ms, ...args);
}

function cancelAfter(id) {
    return clearTimeout(id);
}

function periodic(ms, callback, ...args) {
    return setInterval(callback, ms, ...args);
}

function cancelPeriodic(id) {
    return clearInterval(id);
}

function next(callback, ...args) {
    return setTimeout(callback, 0, ...args);
}

function wait(ms) {
    return new Promise((resolve) => after(ms, resolve));
}
