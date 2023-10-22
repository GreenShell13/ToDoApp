<?php

$response = [
    'success' => 'true',
    'error' => false,
    'errorMsg' => '',
    'data' => []
];

$request = $_GET ?: [];

$dsn = 'pgsql:host=postgres;port=5432;dbname=postgres';
$user ='admin';
$password = '12345';

try {
    $db = new PDO(
        $dsn, 
        $user, 
        $password, 
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $query = 'select * from admin.user where login = :login and password = :password';
    $params = [
        ':login' => $request['login'],
        ':password' => $request['password']
    ];

    $stmt = $db->prepare($query);
    $stmt->execute($params);

    $user_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $response['data'] = !empty($user_data) ? $user_data[0] : [];

    if (count($response['data']) !== 0)
        $response['data']['isAuth'] = true;
} catch(PDOException $e) {
    $response['error'] = true;
    $response['errorMsg'] = $e->getMessage();
    $response['data']['isAuth'] = false;
	$response['success'] = false;
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);