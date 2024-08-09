import { test, expect } from "bun:test";
import { hexToUint8Array } from "./utils";
test("hexToUint8Array", () => {
    expect(hexToUint8Array("")).toEqual(new Uint8Array());
    expect(hexToUint8Array("00")).toEqual(new Uint8Array([0]));
    expect(hexToUint8Array("01")).toEqual(new Uint8Array([1]));
    expect(hexToUint8Array("ff")).toEqual(new Uint8Array([255]));
    expect(hexToUint8Array("0001")).toEqual(new Uint8Array([0, 1]));
    expect(hexToUint8Array("0102")).toEqual(new Uint8Array([1, 2]));
    expect(hexToUint8Array("fffe")).toEqual(new Uint8Array([255, 254]));
    expect(hexToUint8Array("1E38BF5827C26CA1938D411F1F3E1D7678B91A7EDCA609EE521084FCFCD553D8")).toEqual(
        new Uint8Array([
            30, 56, 191, 88, 39, 194, 108, 161, 147, 141, 65, 31, 31, 62, 29, 118, 120, 185, 26, 126, 220, 166, 9, 238, 82, 16, 132, 252,
            252, 213, 83, 216,
        ])
    );
});
