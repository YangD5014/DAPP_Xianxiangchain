// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./user.sol";

contract MyContract {
    UserRegulation userRegulationInstance;

    // 定义事件
    event UserDataFetched(uint256 userId, address userAddress, address[] userAsset, address[] userTransaction);

    // 在构造函数中初始化实例
    constructor(address _userRegulationAddress) {
        userRegulationInstance = UserRegulation(_userRegulationAddress);
    }

    // 现在你可以使用 userRegulationInstance 调用 UserRegulation 合约中的函数
    function myFunction() public {
        // 调用 UserRegulation 合约中的函数
        uint256 userId;
        address userAddress;
        address[] memory userAsset;
        address[] memory userTransaction;
        
        (userId, userAddress, userAsset, userTransaction) = userRegulationInstance.viewUserData(1);
        
        // 触发事件记录信息
        emit UserDataFetched(userId, userAddress, userAsset, userTransaction);

        // 在这里使用返回的数据...
    }
}

