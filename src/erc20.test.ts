//[7 0 112568767309172 6 0 155498244330488045306850287589664177200672003224113 21 1000]

import { test, expect } from "bun:test";
import { Erc20Parser } from "./erc20";

test("Process pending and settled correctly", () => {
    const contract = new Erc20Parser();

    const payload =
        "OCAwIDExMjU2ODc2NzMwOTE3MiA2IDEgMTgwNTk5NDkwMTA5OTg0MjExOTE3ODU1OTQ3OTcwMjU2NTU5Njk1MjUzOTE4MDIwMDk1MDc0ODM3NzYwNjc3MzY0NDU0NTM1NzM2IDYyODg5MTc2NTA5NzU0NTEwMjQyMTkzMTc1MDYwODU4OTEwMjM4MTI3MzE3NjU3ODI1MzYwOTM5ODgzMyAyNSAxMDA=";
    const data = new Uint8Array(Buffer.from(payload, "base64"));
    const parsedPayload = {
        identity: "0x1234",
        payloads: [
            {
                contractName: contract.contractName,
                data,
            },
        ],
    };

    expect(contract.balancesSettled).toEqual({});
    expect(contract.balancesPending).toEqual({});
    contract.balancesSettled["faucet"] = 100000;

    contract.consumePayload(parsedPayload, "1");
    contract.consumePayload(parsedPayload, "2");
    console.log(contract.balancesPending);
    expect(contract.balancesSettled["faucet"]).toBe(100000);
    expect(contract.balancesPending["faucet"]).toBe(99800);
    expect(contract.balancesPending["f77e0dd4547db1f6ac5e81bc22ad228d00d8f1bf.ecdsa_secp256r1"]).toBe(200);
    contract.consumePayload(parsedPayload, "3");
    contract.settleTx("1", true);
    expect(contract.balancesSettled["faucet"]).toBe(99900);
    expect(contract.balancesSettled["f77e0dd4547db1f6ac5e81bc22ad228d00d8f1bf.ecdsa_secp256r1"]).toBe(100);
    expect(contract.balancesPending["faucet"]).toBe(99800);
    expect(contract.balancesPending["f77e0dd4547db1f6ac5e81bc22ad228d00d8f1bf.ecdsa_secp256r1"]).toBe(200);
    contract.settleTx("2", false);
    expect(contract.balancesSettled["faucet"]).toBe(99900);
    expect(contract.balancesSettled["f77e0dd4547db1f6ac5e81bc22ad228d00d8f1bf.ecdsa_secp256r1"]).toBe(100);
    expect(contract.balancesPending["faucet"]).toBe(99900);
    expect(contract.balancesPending["f77e0dd4547db1f6ac5e81bc22ad228d00d8f1bf.ecdsa_secp256r1"]).toBe(100);
    contract.settleTx("3", true);
    expect(contract.balancesSettled["faucet"]).toBe(99800);
    expect(contract.balancesSettled["f77e0dd4547db1f6ac5e81bc22ad228d00d8f1bf.ecdsa_secp256r1"]).toBe(200);
});
