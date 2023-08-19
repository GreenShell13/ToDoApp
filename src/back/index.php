<?php

require './user/User.php';

use user\User;

$user = User::getInstance();

var_dump($user);