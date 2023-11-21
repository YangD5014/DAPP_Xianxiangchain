<?php

header('Access-Control-Allow-Origin: *'); 
// header('Access-Control-Allow-Origin: http://localhost:8082');
// header('Access-Control-Allow-Origin: http://localhost:8080');
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
    // 接收前端传递的用户账号、密码和APP安全码
    $appSecurityCode = $_POST['appSecurityCode'];
    $requestType = isset($_POST['requestType']) ? $_POST['requestType'] : null;

    if (empty($requestType)) {
        // 如果requestType为空，返回错误信息
        http_response_code(400);
        echo json_encode(['error' => '缺少DAPP安全码或请求类型参数，禁止查询！','requestType' => $requestType,'appSecurityCode' => $appSecurityCode]);
        exit();
    }

    if ($appSecurityCode != 'DAPP2023') {
        // 如果APP安全码不正确，返回错误信息
        http_response_code(401);
        echo json_encode(['error' => 'DAPP安全验证码错误，禁止查询！']);
        exit();
    }

    // 构建查询SQL语句
    if ($requestType == 1) {
        // If request type is 1, return all data from the table
        $sql = "SELECT * FROM DAPP用户信息登记表;";
        $result = $mysqli->query($sql);

        // 检查是否存在匹配的记录
        if ($result !== false) {
            // If request type is 1, return all data
            $data = $result->fetch_all(MYSQLI_ASSOC);
            http_response_code(200);
            echo json_encode(['message' => '获取数据成功!', 'userData' => $data]);
        } else {
            // Query execution failed
            http_response_code(500);
            echo json_encode(['error' => 'Internal Server Error']);
        }
    } elseif ($requestType == 2) {
        // If request type is 2, perform login validation
        $userAccount = $_POST['userAccount'];
        $userPassword = $_POST['userPassword'];
        $sql = "SELECT * FROM DAPP用户信息登记表 WHERE 用户昵称 = '$userAccount' AND 用户密码 = '$userPassword';";
        $result = $mysqli->query($sql);

        // 检查是否存在匹配的记录
        if ($result !== false && $result->num_rows > 0) {
            // 登录成功,返回状态码200
            http_response_code(200);
            echo json_encode(['message' => 'Login successful', 'userData' => $result->fetch_assoc()]);
        } else {
            // 登录失败，返回错误信息
            http_response_code(401);
            echo json_encode(['error' => 'Login failed. Check your credentials.']);
        }
    } else {
        // Invalid request type
        http_response_code(400);
        echo json_encode(['error' => 'Invalid requestType.']);
    }

    // 关闭数据库连接
    $mysqli->close();
} else {
    // 如果不是POST请求，返回错误信息
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>
