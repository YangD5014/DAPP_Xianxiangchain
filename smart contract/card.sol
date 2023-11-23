// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract FreshGiftCardNFT is ERC721, Ownable {
    using SafeMath for uint256;

    // 用于生成唯一的 NFT 标识符的计数器
    uint256 private _tokenIdCounter;

    // 礼品卡的基本信息
    struct GiftCardInfo {
        string productName; // 商品名
        string origin; // 产地
        uint256 issueTime; // 发行时间
        uint256 expirationDate; // 有效期
    }

    // 存储每个 NFT 的详细信息
    mapping(uint256 => GiftCardInfo) private _giftCardInfo;

    // 构造函数，初始化 ERC721 合约
    constructor() ERC721("FreshGiftCardNFT", "FGC") {
        _tokenIdCounter = 1; // 从 1 开始计数
    }

    // 创建生鲜礼品卡的函数，只有合约所有者可以调用
    function createGiftCard(
        address recipient,
        string memory message,
        string memory productName,
        string memory origin,
        uint256 expirationDate
    ) external onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(recipient, tokenId);
        _tokenIdCounter = _tokenIdCounter.add(1);

        // 存储礼品卡信息
        _giftCardInfo[tokenId] = GiftCardInfo({
            productName: productName,
            origin: origin,
            issueTime: block.timestamp,
            expirationDate: expirationDate
        });
    }

    // 获取生鲜礼品卡的信息
    function getGiftCardInfo(uint256 tokenId)
        external
        view
        returns (
            string memory productName,
            string memory origin,
            uint256 issueTime,
            uint256 expirationDate
        )
    {
        require(_exists(tokenId), "Token does not exist");
        GiftCardInfo memory giftCardInfo = _giftCardInfo[tokenId];
        return (giftCardInfo.productName, giftCardInfo.origin, giftCardInfo.issueTime, giftCardInfo.expirationDate);
    }
}
