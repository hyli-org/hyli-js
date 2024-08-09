function bigIntToAscii(value: bigint) {
    let asHex = value.toString(16);
    // Pad with 0s
    if (asHex.length % 2 !== 0) asHex = "0" + asHex;
    const asBytes = [];
    for (let i = 0; i < asHex.length; i += 2) {
        asBytes.push(String.fromCharCode(parseInt(asHex.slice(i, i + 2), 16)));
    }
    return asBytes.join("");
}

/**
 *
 * @param data Decimal encoded number as a string
 * @returns
 */
export function deserByteArray(data: (bigint | string | number)[]) {
    const words = Number(data[0]);
    const remaining = +data.slice(-1);
    let result = "";
    for (let i = 1; i <= words; i++) {
        result += bigIntToAscii(BigInt(data[i]));
    }
    if (remaining > 0) result += bigIntToAscii(BigInt(data.slice(-2, -1)[0]));
    return result;
}

export type ByteArray = string;

export function serByteArray(arr: ByteArray): string {
    // Get quotient of euclidian division
    const pending_word = (arr.length / 31) >> 0;
    let words = [];
    for (let i = 0; i < pending_word; i += 1) {
        // Take each letter, encode as hex
        words.push(
            BigInt(
                "0x" +
                    arr
                        .slice(0, 31)
                        .split("")
                        .map((x) => x.charCodeAt(0).toString(16))
                        .join("")
            ).toString()
        );
        arr = arr.substring(31);
    }
    // Add the rest of arr to words
    const pending_word_len = arr.length;
    words.push(
        BigInt(
            "0x" +
                arr
                    .split("")
                    .map((x) => x.charCodeAt(0).toString(16))
                    .join("")
        ).toString()
    );

    return `${pending_word} ${words.join(" ")} ${pending_word_len}`;
}
