<?php
    $confirm = $_POST['confirm'];
    $cancel = $_POST['cancel']
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Confiramtion Message</title>
    </head>
    <body>
        <?php
        if ($confirm){
            print "The purchase was confirmed succesfully"
        }
        elseif ($cancel){
            print "The purchase was canceled"
        }
        ?>
        <h2>Thanks for your preference!</h2>
    </body>
</html>