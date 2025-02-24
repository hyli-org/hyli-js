# Hyle js SDK

## Usage 

```ts
import { Blob, blob_builder, BlobTransaction } from "hyle";

const transfer: Blob = blob_builder.token.transfer(
 "alice.mmid",
 "usdc",
 4,
 null,
);

const blobs = [transfer];

const { nonce, signature, account } = signBlobs(blobs); // Function defined in you project

const verifyIdentity: Blob = blob_builder.metamask.verifyIdentity(
  nonce,
  signature,
);

const blobTx: BlobTransaction = {
  identity: account,
  blobs: [verifyIdentity, ...blobs],
};
```

## Build

```sh 
bun run build
```

## Development

To build whenever you make a change:
```sh 
bun run watch
```

To use you local copy of the repo in another project, run here:
```
bun link 
```

And in your project run:
```sh 
bun link hyle
```
