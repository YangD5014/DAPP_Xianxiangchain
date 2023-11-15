<?php

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
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

// 处理GET请求
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // 从GET参数中获取用户ID
    $userId = isset($_GET['userId']) ? $_GET['userId'] : null;

    // 构建SQL查询语句
    $sql = "SELECT * FROM DAPP用户信息登记表 WHERE 用户ID = " . $mysqli->real_escape_string($userId);

    // 执行查询
    $result = $mysqli->query($sql);

    // 检查查询是否成功
    if ($result) {
        // 将查询结果转换为关联数组
        $userData = $result->fetch_assoc();

        // 返回JSON格式的数据
        echo json_encode($userData);
    } else {
        // 查询失败时返回错误信息
        echo json_encode(['error' => $mysqli->error]);
    }

    // 关闭数据库连接
    $mysqli->close();
} else {
    // 如果不是GET请求，返回错误信息
    echo json_encode(['error' => 'Invalid request method']);
}
?>
