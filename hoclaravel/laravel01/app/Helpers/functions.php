<?php
function getOrderByUrl($type = 'latest')
{
    // $query = request()->query(); //Trả về 1 array
    // $query['order-by'] = $type;

    return '?' . http_build_query([...request()->query(), 'order-by' => $type]);
}

//Pagination
//Validate