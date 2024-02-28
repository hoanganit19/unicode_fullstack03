<?php
//Câu điều kiện: if else, switch case
//Vòng lặp: for, while, do while
?>
<style>
    td {
        height: 100px;

    }

    td.black {
        background: black;
    }
</style>
<table width="100%" border="1" cellpadding="0" cellspacing="0">
    <?php
    $columnNumber = 10; //Đọc ở trên database
    $rowNumber = 10;
    for ($rows = 1; $rows <= $rowNumber; $rows++) {
    ?>
        <tr>
            <?php

            for ($cols = 1; $cols <= $columnNumber; $cols++) {
                $total = $cols + $rows;
                $class = $total % 2 !== 0 ? "black" : "";
                echo '<td class="' . $class . '"></td>';
            } ?>
        </tr>
    <?php } ?>

</table>