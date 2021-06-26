<?php

//  This function reads the form "query string"
//  
// This function handles both an http "get".
$apr = $_GET['apr']; 
$term = $_GET['term'];
$amount = $_GET['amount'];

?>

<!DOCTYPE html>
<html lang = "en">
<meta charset = "utf-8" />
<title>Read Form!</title>
<body>
 <h3>The values and the payment of the form elements are: <br />
   <?php
        print "APR: $apr<br />";
        print "Term: $term<br />";
        print "Amount: $amount<br />";

        $apr = $apr / 1200;
        $term = $term * 12;
        $mPmt = calculatePayment($apr, $term, $amount);
        print "Monthly Payment: $mPmt<br/>";

        function calculatePayment($apr, $term, $amount) {
            $payment = $amount * ($apr * (pow((1 + $apr), $term))) / ((pow((1 + $apr), $term)) - 1);
            return $payment;
        }
   ?>  
</h3>

</body>
</html>
