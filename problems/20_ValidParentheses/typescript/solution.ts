function isValid(s: string): boolean {
    let stack: string[] = [];
    const openBracket: string[] = ['(', '[', '{'];
    const closeBracketMap = {
        '}': '{',
        ')': '(',
        ']': '['
    };

    for(let bracket of s) {
        if(openBracket.includes(bracket)) {
            stack.push(bracket)
        } else {
            if(closeBracketMap[bracket] === stack[stack.length-1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};