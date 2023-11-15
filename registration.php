<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// 数据库连接参数
$host = 'localhost';
$user = 'dachui5014';
$password = '1999xxy2038';
$database = 'dachui5014';

// 创建数据库连接
$mysqli = new mysqli($host, $user, $password, $database);
$mysqli->set_charset('utf8mb4');

// 检查连接是否成功
if ($mysqli->connect_errno) {
    die("连接失败: " . $mysqli->connect_error);
}

// 处理POST请求
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 接收前端传递的用户账号、密码和其他信息
    $userAccount = $_POST['userAccount'];
    $userPassword = $_POST['userPassword'];
    $userType = $_POST['userType'];
    $appSecurityCode = $_POST['appSecurityCode'];

    if ($appSecurityCode != 'DAPP2023') {
        // 如果APP安全码不正确，返回错误信息
        http_response_code(401);
        echo json_encode(['error' => 'DAPP安全验证码错误，禁止访问！']);
        exit();
    }
    // 检查用户是否已经存在
    $checkUserQuery = "SELECT * FROM DAPP用户信息登记表 WHERE 用户昵称 = '$userAccount';";
    $checkUserResult = $mysqli->query($checkUserQuery);

    if ($checkUserResult !== false && $checkUserResult->num_rows > 0) {
        // 用户已存在，返回错误信息
        http_response_code(409); // 409 Conflict
        echo json_encode(['error' => '用户已存在，请选择其他用户名。']);
    } else {
        // 用户不存在，执行注册
        $insertUserQuery = "INSERT INTO DAPP用户信息登记表 (用户昵称, 用户密码, 用户身份代码) VALUES ('$userAccount', '$userPassword', '$userType');";
        $insertUserResult = $mysqli->query($insertUserQuery);

        if ($insertUserResult !== false) {
            // 注册成功
            http_response_code(201); // 201 Created
            echo json_encode(['message' => '用户注册成功。']);
        } else {
            // 注册失败，返回详细错误信息
            http_response_code(500); // 500 Internal Server Error
            echo json_encode(['error' => '用户注册失败。', 'details' => $mysqli->error]);
        }
    }

    // 关闭数据库连接
    $mysqli->close();
} else {
    // 如果不是POST请求，返回错误信息
    http_response_code(405); // 405 Method Not Allowed
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>
