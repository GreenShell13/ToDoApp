<?php
$response = [
    'success' => 'true',
    'error' => false,
    'errorMsg' => '',
    'data' => []
];

// Параметры подключения к базе данных
$dsn = "pgsql:host=postgres;port=5432;dbname=postgres";
$username = "admin";
$password = "12345";

try {
    // Создаем объект PDO
    $db = new PDO(
        $dsn, 
        $user, 
        $password, 
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]// Устанавливаем режим ошибок для PDO на выброс исключений
    );

    // SQL-запрос для добавления данных
    $query = "insert into admin.user 
    (login, password, name, surname, second_name, mail, created_at) 
    values (':login', ':password', ':name', ':surname', ':second_name', ':mail', CURRENT_DATE);";

    // Подготавливаем запрос
    $stmt = $db->prepare($query);

    // Задаем значения параметров запроса
    $login = "1";
    $password = "1";
    $name = "1";
    $surname = "1";
    $second_name = "1"; 
    $mail ="1";
    $stmt->bindParam(':login', $login);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':surname', $surname);
    $stmt->bindParam(':second_name', $second_name);
    $stmt->bindParam(':mail', $mail);

    // Выполняем запрос
    $stmt->execute();

    $response['data'] = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];
    if (!empty($response['data']))
        $response['data']['isAuth'] = true;
} catch(PDOException $e) {
    $response['error'] = true;
    $response['errorMsg'] = $e->getMessage();
    $response['data']['isAuth'] = false;
	$response['success'] = false;
}