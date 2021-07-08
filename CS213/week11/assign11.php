<?php

$first = $_GET['first_name'];
$last = $_GET['last_name'];
$address = $_GET['address'];
$phone = $_GET['phone'];

$item_0 = $_GET['item_0'];
$item_1 = $_GET['item_1'];
$item_2 = $_GET['item_2'];
$item_3 = $_GET['item_3'];

$item_0_cost = 5;
$item_1_cost = 2;
$item_2_cost = 1.5;
$item_3_cost = 4;

$card = $_GET['card'];
$exp_date = $_GET['exp_date'];
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Purchase confirmation</title>
    </head>
    <body>
        <h1>Purchase Confirmation</h1>
        <?php

            print "<h2> $first $last:</h2><br/>";
            print "<h5> <i> $address </i> </h5><br/>";
            print "<p> #$phone </p><br/>";

            $item_0 *= $item_0_cost;
            $item_1 *= $item_1_cost;
            $item_2 *= $item_2_cost;
            $item_3 *= $item_3_cost;
            $len = array('first_item' => $first_item , 'second_item' => $second_item,
            'third_item' => $third_item, 'fourth_item' => $fourth_item );
            for ($i = 0; $i < $len; $i++) {
                $total += $i; 
            }
            print "you're buying: <br/> ";
            print "$item_0 item 1 that cost: $$item_0_cost<br/>";
            print "$item_1 item 2 that cost: $$item_1_cost<br/>";
            print "$item_2 item 3 that cost: $$item_2_cost<br/>";
            print "$item_3 item 4 that cost: $$item_3_cost<br/>";

            print "<h4> The total cost is $total </h4> ";

            print "The credit card is $card type with expiration on $exp_date"
        ?>
        <form method="POST" action="assign11_a.php">
            <button type="submit" name ="confirm">Confirm</button>
            <button type="submit" name ="cancel">Cancel</button>
        </form>
    </body>
</html>