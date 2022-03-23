from secrets import token_bytes
from coincurve import PublicKey
from sha3 import keccak_256

f = open('wallets.txt', 'a')
for x in range (15):
	private_key = keccak_256(token_bytes(32)).digest()
	public_key = PublicKey.from_valid_secret(private_key).format(compressed=False)[1:]
	addr = keccak_256(public_key).digest()[-20:]

	print('eth addr: 0x' + addr.hex())
	print()
	

	f.write('eth addr: 0x' + addr.hex()+"\n")
	f.write('private_key:' + private_key.hex()+"\n")
	f.write('\n')

f.close()
