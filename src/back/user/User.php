<?php

namespace user;

class User
{
    private static ?User $instance = null;

    public static function getInstance(): self
    {
        if (!self::$instance)
            self::$instance = new self();

        return self::$instance;
    }
}