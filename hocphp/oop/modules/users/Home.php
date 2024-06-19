<?php

namespace Home\User;

use Home\User\UserCourse;

class Home
{

    public function __construct()
    {
        echo 'Home Construct User <br/>';
        new UserCourse();
    }
}
