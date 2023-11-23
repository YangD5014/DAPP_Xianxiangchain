// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract UserRegulation {
    // 定义结构体
    struct UserInfo {
        uint256 userId;           // 联盟链中用户的ID
        address userAddress;      // 联盟链中用户的地址
        address[] userAsset;      // 用户所拥有的NFT财产
        address[] userTransaction; // 用户的交易历史
    }

    // 存储用户数据的数组
    UserInfo[] public users;
    function allocateAddress(uint256 _userId) public {
        // require(!addressAssigned[msg.sender], "Address already assigned to a user ID");
        
        address uniqueAddress = address(uint160(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, _userId)))));

        UserInfo memory user = UserInfo({
            userId: _userId,
            userAddress: uniqueAddress,
            userAsset: new address[](0),
            userTransaction: new address[](0)
        });

        // addressAssigned[uniqueAddress] = true;

        users.push(user);
    }

    // Function to view user data based on user ID
    function viewUserData(uint256 _userId) public view returns (uint256, address, address[] memory, address[] memory) {
        require(_userId > 0 && _userId <= users.length, "Invalid user ID");

        UserInfo storage user = users[_userId - 1];
        return (user.userId, user.userAddress, user.userAsset, user.userTransaction);
    }

    
}
