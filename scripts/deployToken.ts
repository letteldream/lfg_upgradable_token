import {ethers} from 'hardhat'

async function main(): Promise<string> {
    const [deployer] = await ethers.getSigners()
    if (deployer === undefined) throw new Error('Deployer is undefined.')
    //console.log('Deploying contracts with the account:', deployer.address)

    //console.log('Account balance:', (await deployer.getBalance()).toString())

    // const ProjectX = await ethers.getContractFactory('ProjectX')
    const LIFEGAMES = await ethers.getContractFactory('LIFEGAMES')

    //[0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7,0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3,0x6EFF4835385b8D683431290356eE668193D18Efe,0xcF2370872F7628b3e41c3A6e30b5BA9cfE95CdF9,0x7A260df520bEFe9217EB546a3232f4Df11138423]
    const args = [
        "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
        "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
        "0x6EFF4835385b8D683431290356eE668193D18Efe",
        "0xd235eD438FB2D6Bd428F5AEdF67bc8AB03bcFB96",
        "0x09f33F64aAADf6A02956C9732b25d42DD9c2d4bC",
    ]
    const LIFEGAMES_Deployed = await LIFEGAMES.deploy(
        args
    )
    return LIFEGAMES_Deployed.address;
}

main()
    .then((r: string) => {
        console.log(r);
        return r;
    })
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

// 0x2D99ABD9008Dc933ff5c0CD271B88309593aB921


/*
Address:      0xcF2370872F7628b3e41c3A6e30b5BA9cfE95CdF9
Private Key:  e2a51d2a8323e806b7c334665b60ec6a3633f628856fc88438f44dde5b1092ae


Address:      0x7A260df520bEFe9217EB546a3232f4Df11138423
Private Key:  2c6f097a8cd842c2ee7811d5ae5180142aa30525ea3db3362032bbea47acf121

*/