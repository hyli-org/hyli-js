import { test, expect } from "bun:test";
import { deserByteArray } from "./ByteArray";

test("deserByteArray", () => {
    expect(deserByteArray([0, 0, 0])).toBe("");
    expect(deserByteArray([0, 112568767309172, 6])).toBe("faucet");
    expect(deserByteArray([0, 155498244330488045306850287589664177200672003224113n, 21])).toBe("jenny.ecdsa_secp256r1");
    expect(
        deserByteArray([
            2,
            155498244330488045306850287589664177200672003224113n,
            "155498244330488045306850287589664177200672003224113",
            155498244330488045306850287589664177200672003224113n,
            21,
        ])
    ).toBe("jenny.ecdsa_secp256r1jenny.ecdsa_secp256r1jenny.ecdsa_secp256r1");
});
