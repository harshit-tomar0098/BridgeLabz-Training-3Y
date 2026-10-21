// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // All four conditions must be true for the home to be secure.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // `||` and `!` are also used to identify any unsafe condition.
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    console.log(
        `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
        `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} => ` +
        `${isSecure && !isUnsafe ? "Secure" : "Unsafe"}`
    );
}

checkSecurity(true, true, true, true);    // Secure
checkSecurity(true, true, false, true);   // Unsafe: alarm is off
checkSecurity(false, true, true, true);   // Unsafe: door is unlocked
checkSecurity(true, false, true, true);   // Unsafe: window is open
checkSecurity(true, true, true, false);   // Unsafe: owner is outside
