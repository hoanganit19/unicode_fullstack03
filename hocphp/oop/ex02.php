<?php
$data = [
    [
        'id' => 1,
        'name' => 'User 1',
        'email' => 'user1@gmail.com',
        'parent' => 0,
    ],
    [
        'id' => 2,
        'name' => 'User 2',
        'email' => 'user2@gmail.com',
        'parent' => 0,
    ],
    [
        'id' => 3,
        'name' => 'User 3',
        'email' => 'user3@gmail.com',
        'parent' => 0,
    ],
    [
        'id' => 4,
        'name' => 'User 2.1',
        'email' => 'user2.1@gmail.com',
        'parent' => 2,
    ],
    [
        'id' => 5,
        'name' => 'User 2.2',
        'email' => 'user2.2@gmail.com',
        'parent' => 2,
    ],
    [
        'id' => 6,
        'name' => 'User 2.3',
        'email' => 'user2.3@gmail.com',
        'parent' => 2,
    ],
    [
        'id' => 7,
        'name' => 'User 3.1',
        'email' => 'user3.1@gmail.com',
        'parent' => 3,
    ],
    [
        'id' => 8,
        'name' => 'User 3.2',
        'email' => 'user3.2@gmail.com',
        'parent' => 3,
    ],
    [
        'id' => 9,
        'name' => 'User 3.3',
        'email' => 'user3.3@gmail.com',
        'parent' => 3,
    ],
    [
        'id' => 10,
        'name' => 'User 3.2.1',
        'email' => 'user3.3@gmail.com',
        'parent' => 8,
    ],
    [
        'id' => 11,
        'name' => 'User 3.2.2',
        'email' => 'user3.3@gmail.com',
        'parent' => 8,
    ],
];

class Builder
{
    private $users = [];
    public function __construct($users)
    {
        $this->users = $users;
    }
    public function buildHtml($parent = 0)
    {
        echo '<ul>';
        foreach ($this->users as $key => $value) {

            if ($value['parent'] == $parent) {
                echo '<li>' . $value['name'] . ' - ' . $value['email'];
                $this->buildHtml($value['id']);
                echo '</li>';
            }

        }
        echo '</ul>';
    }
}

$builder = new Builder($data);
$builder->buildHtml();
?>
<!-- <ul>
    <li>User 1 - user1@gmail.com</li>
    <li>User 2 - user2@gmail.com
        <ul>
            <li>User 2.1 - user2.1@gmail.com</li>
            <li>User 2.1 - user2.2@gmail.com</li>
            <li>User 2.1 - user2.3@gmail.com</li>
        </ul>
    </li>
    <li>User 3 - user3@gmail.com</li>
</ul> -->
