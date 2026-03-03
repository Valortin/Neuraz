pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NeurazINFT is ERC721, ERC2981, Ownable {
    uint256 private _tokenIdCounter;
    string private _baseTokenURI;

    // Royalty: 5% default to contract owner/creator
    constructor(string memory baseURI) ERC721("Neuraz Intelligent NFT", "INFT") Ownable(msg.sender) {
        _baseTokenURI = baseURI; // e.g. "https://ipfs.io/ipfs/"
        _setDefaultRoyalty(msg.sender, 500); // 5.00%
    }

    // Mint INFT with strategy/model metadata (IPFS hash)
    function mintStrategy(address to, string calldata ipfsMetadataHash) external onlyOwner returns (uint256) {
        _tokenIdCounter++;
        uint256 newTokenId = _tokenIdCounter;
        _safeMint(to, newTokenId);
        // Store metadata hash on-chain or emit event for off-chain indexing
        emit MetadataUpdated(newTokenId, ipfsMetadataHash);
        return newTokenId;
    }

    // Override for royalty info (ERC-2981)
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    event MetadataUpdated(uint256 tokenId, string ipfsHash);
}