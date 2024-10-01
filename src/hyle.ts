import { getNetworkApiUrl } from "./network.ts";
import { BlobTx } from "./transactions.ts";
import { uint8ArrayToBase64 } from "./utils.ts";

// Proof should be base64, hash should be hex
export async function broadcastProofTx(network: string, hash: string, blobIndex: number, contractName: string, proof: Uint8Array) {
    const proofTx = {
        txHash: hash,
        blobs_references: [{
            contract_name: contractName,
            blob_tx_hash: hash,
            blob_index: blobIndex,
        }],
        proof: uint8ArrayToBase64(proof),
    };

    const response = await fetch(`${getNetworkApiUrl(network)}/v1/tx/send/proof`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proofTx),
    });
    if (!response.ok) {
        throw new Error(`Failed to broadcast blob transaction: ${response.statusText}. ${await response.text()}`);
    }

    let proofTxHash = await response.json(); 
    return proofTxHash
}

export async function broadcastBlobTx(network: string, blobTx: BlobTx) {
    const camelCasedBlobs = blobTx.blobs.map(blob => ({
        contract_name: blob.contractName,
        data: blob.data
    }));

    const camelCasedBlobTx = {
        identity: blobTx.identity,
        blobs: camelCasedBlobs,
    };

    const response = await fetch(`${getNetworkApiUrl(network)}/v1/tx/send/blob`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(camelCasedBlobTx),
    });

    if (!response.ok) {
        throw new Error(`Failed to broadcast blob transaction: ${response.statusText}. ${await response.text()}`);
    }

    const blobTxHash = await response.json();
    return String(blobTxHash);
}


export async function checkTxesStatus(network: string, hashes: string[]) {
    for (const hash of hashes) {
        const resp2 = await checkTxStatus(network, hash);
        if (resp2.status == "failed") {
            return resp2;
        }
    }
    return {
        status: "success",
    };
}

export async function checkTxStatus(network: string, txHash: string) {
    const response = await fetch(`${getNetworkApiUrl(network)}/v1/indexer/transaction/hash/${txHash}`, {
        method: 'GET',
    });
    if (!response.ok) {
        return {
            status: "failed",
            error: "Tx not found",
        };
    }
    return {
        status: "success",
    };
}

export async function checkContractExists(network: string, contractName: string) {
    const checkExists = await fetch(`${getNetworkApiUrl(network)}/v1/indexer/contract/${contractName}`);

    try {
        let data = await checkExists.json();
        return data.contract_name == contractName;
    } catch (e) {
        return false;
    }
}

export async function registerContract(network: string, verifier: string, contractName: string, programId: Uint8Array, stateDigest: Uint8Array) {
    var owner = "todo"; 
    let contractRegister = {
        owner: owner,
        verifier,
        contract_name: contractName,
        program_id: Array.from(programId),
        state_digest: Array.from(stateDigest),
    };

    const response = await fetch(`${getNetworkApiUrl(network)}/v1/contract/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contractRegister),
    });

    return await response.json();
}
