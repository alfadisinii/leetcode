function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const digitToChar: Record<string, string[]> = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r","s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"],
    };

    const result: string[] = [];

    function backtrack(index: number, path: string) {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        for (const char of digitToChar[digits[index]]) {
            backtrack(index + 1, path + char);
        }
    }

    backtrack(0, "");
    return result;
}

// Example usages:
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // []
console.log(letterCombinations("2"));  // ["a","b","c"]