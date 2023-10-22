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

    $response['data'] = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];
    if (!empty($response['data']))
        $response['data']['isAuth'] = true;
} catch(PDOException $e) {
    $response['error'] = true;
    $response['errorMsg'] = $e->getMessage();
    $response['data']['isAuth'] = false;
	$response['success'] = false;
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);