// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FreshGiftCard is ERC721, Ownable {
    uint256 public nextTokenId;
    
    enum CardStatus { UNUSED, USED }
    struct GiftCard {
        uint256 value;
        CardStatus status;
        address owner;
    }

    mapping(uint256 => GiftCard) public giftCards;
    mapping(address => bool) public blacklist;

    event GiftCardIssued(uint256 tokenId, uint256 value, address owner);
    event GiftCardTransferred(uint256 tokenId, address from, address to);
    event GiftCardUsed(uint256 tokenId, address owner);
    event Blacklisted(address user);

    constructor() ERC721("FreshGiftCard", "FGC") {}

    function issueGiftCard(uint256 value) external onlyOwner {
        uint256 tokenId = nextTokenId++;
        _safeMint(msg.sender, tokenId);
        giftCards[tokenId] = GiftCard(value, CardStatus.UNUSED, msg.sender);
        emit GiftCardIssued(tokenId, value, msg.sender);
    }

    function transferGiftCard(uint256 tokenId, address to) external {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "Not approved or not owner");
        require(!blacklist[to], "Recipient is blacklisted");
        
        _transfer(_msgSender(), to, tokenId);
        giftCards[tokenId].owner = to;
        emit GiftCardTransferred(tokenId, _msgSender(), to);
    }

    function useGiftCard(uint256 tokenId) external {
        require(giftCards[tokenId].status == CardStatus.UNUSED, "Gift card already used");
        require(_msgSender() == giftCards[tokenId].owner, "Not the card owner");
        
        giftCards[tokenId].status = CardStatus.USED;
        emit GiftCardUsed(tokenId, _msgSender());
    }

    function addToBlacklist(address user) external onlyOwner {
        blacklist[user] = true;
        emit Blacklisted(user);
    }

    function removeFromBlacklist(address user) external onlyOwner {
        blacklist[user] = false;
    }
}
