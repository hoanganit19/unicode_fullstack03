<?php
function getProduct($productId)
{
    global $products;
    $product = [];
    foreach ($products as $item) {
        if ($item['id'] == $productId) {
            $product = $item;
            break;
        }
    }
    return $product;
}
