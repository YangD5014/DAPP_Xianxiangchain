// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract SellerRegulation {
    // FreshEnjoyCard FreshEnjoyCardInstance;
    // 定义结构体
    struct SellerInfo {
        uint256 sellerId;           // 联盟链中卖家的ID
        address sellerAddress;      // 联盟链中卖家的地址
        address[] sellerAsset;      // 卖家所发行的NFT财产(目前未被交易的剩余财产)
        address[] sellerTransaction; // 卖方的交易历史
    }

    // 存储用户数据的数组
    SellerInfo[] public sellers;
    mapping (uint256=>SellerInfo) public sellerArray;

    function allocateAddress(uint256 _sellerId) public {
        // require(!addressAssigned[msg.sender], "Address already assigned to a user ID");
        
        address uniqueAddress = address(uint160(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, _sellerId)))));

        SellerInfo memory seller = SellerInfo({
            sellerId: _sellerId,
            sellerAddress: uniqueAddress,
            sellerAsset: new address[](0),
            sellerTransaction: new address[](0)
        });

        // addressAssigned[uniqueAddress] = true;

        sellers.push(seller);
        sellerArray[_sellerId] = seller;
    }

    // Function to view user data based on user ID
    function viewSellerData(uint256 _sellerId) public view returns (uint256, address, address[] memory, address[] memory) {
        require(_sellerId <= sellers.length, "Invalid user ID");
        SellerInfo storage seller = sellers[_sellerId];
        return (seller.sellerId,seller.sellerAddress,seller.sellerAsset,seller.sellerTransaction);
    }
    
}
