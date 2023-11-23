// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "tests/seller.sol";

contract FreshEnjoyCard is ERC721, ERC721Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant SELLER_ROLE = keccak256("SELLER_ROLE");
    SellerRegulation  SellerRegulationInstance;

    uint256 private _nextTokenId;

    struct FreshEnjoyNFT {
        string Name; //礼品卡名称
        string TypeName; //礼品卡品类名
        string Description; //礼品卡描述
        string ImageURI; //礼品卡卡面图片url
        uint256 Index; //礼品卡在本品类下的序号
        uint256 MaxNumber; //礼品卡本品类下的最大发行数量
        uint256 PublishTime; //礼品卡发行时间 时间戳
        uint256 ValidTime; //礼品卡最终有效时间 时间戳
        address CurrentOwner; //礼品卡目前的主人 地址
        //address NFTCode;  //礼品卡NFT编码 地址类型
        address Minter; //礼品卡发行者(联盟链的卖方地址)
        address Auditor; //礼品卡审核者(联盟链的运营方账号地址)
        address[] NFTTransaction; // 本礼品卡的所有交易历史
    }
    // tokenId到NFT元数据的映射
    mapping(uint256 => FreshEnjoyNFT) public FreshEnjoyCardInfo;
    //初始化的时候需要提供运营方、卖方、消费者的合约地址
    constructor(address defaultAdmin, address minter,address _sellercontrctaddress)
        ERC721("FreshEnjoyCard", "FEC")
    {
        SellerRegulationInstance = SellerRegulation(_sellercontrctaddress);
         for (uint i = 0; i < SellerRegulationInstance.sellerArray.length; ++i) {
            _grantRole(SELLER_ROLE,SellerRegulationInstance.sellerArray[i].sellerAddress);
        } 
        
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(MINTER_ROLE, minter);
    }

    function safeMint(
        string memory name,
        string memory typeName,
        string memory description,
        string memory imageURI,
        uint256 index,
        uint256 maxNumber,
        uint256 validTime,
        //address currentOwner, //礼品卡目前的主人 地址
        address minter, //礼品卡铸造者 卖家地址
        //address nftCode,
        address auditor
    ) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _nextTokenId++;

        // 创建 FreshEnjoyNFT 结构体
        FreshEnjoyNFT memory newNFT = FreshEnjoyNFT({
            Name: name,
            TypeName: typeName,
            Description: description,
            ImageURI: imageURI,
            Index: index,
            MaxNumber: maxNumber,
            PublishTime: block.timestamp,
            ValidTime: validTime,
            CurrentOwner: minter, //刚创建的时候 主人是创建者
            //NFTCode: nftCode,
            Minter: minter, // 使用发行者地址
            Auditor: auditor,
            NFTTransaction: new address[](0)
        });

        // 存储 NFT 元数据
        FreshEnjoyCardInfo[tokenId] = newNFT;

        // 发行 NFT
        _safeMint(minter, tokenId);
    }

    function getFreshEnjoyCards(uint256 _NFTId) external view returns (FreshEnjoyNFT memory) {
        return FreshEnjoyCardInfo[_NFTId];
    }

    // function addSeller(address seller) public onlyOwner {
    //     _grantRole(SELLER_ROLE, seller);
    //     sellers.push(seller);
    //     }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}
