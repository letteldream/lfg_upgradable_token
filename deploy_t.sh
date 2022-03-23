#!/bin/bash
# proxy version

rm -rf cache && rm -rf artifacts
CMD="npx hardhat run --network bsctestnet scripts/deployProxyLIFEGAME.ts"
echo "CMD: $CMD"
output=`eval $CMD`
echo "output: $output"
