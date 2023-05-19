<?php
// Include the necessary Zen Cart files
require('/includes/configure.php');
require('/includes/database_tables.php');
require('/includes/functions/database.php');

// Connect to the database
$db = new ezSQL_mysql(DB_SERVER, DB_SERVER_USERNAME, DB_SERVER_PASSWORD, DB_DATABASE);
$db->query("SET NAMES 'utf8'");

// Function to disable categories recursively
function disableCategories($categoryId) {
    global $db;

    // Disable the category
    $sql = "UPDATE " . TABLE_CATEGORIES . " SET categories_status = 0 WHERE categories_id = " . (int)$categoryId;
    $db->query($sql);

    // Disable sub-categories without active products
    $sql = "UPDATE " . TABLE_CATEGORIES . " SET categories_status = 0 WHERE parent_id = " . (int)$categoryId . "
            AND categories_id NOT IN (
                SELECT DISTINCT categories_id FROM " . TABLE_PRODUCTS_TO_CATEGORIES . "
                WHERE products_id IN (
                    SELECT products_id FROM " . TABLE_PRODUCTS . " WHERE products_status = 1
                )
            )";
    $db->query($sql);

    // Disable parent categories without sub-categories containing active products
    $sql = "UPDATE " . TABLE_CATEGORIES . " SET categories_status = 0 WHERE categories_id = " . (int)$categoryId . "
            AND parent_id != 0 AND categories_id NOT IN (
                SELECT DISTINCT parent_id FROM " . TABLE_CATEGORIES . "
                WHERE categories_status = 1 AND categories_id IN (
                    SELECT DISTINCT categories_id FROM " . TABLE_PRODUCTS_TO_CATEGORIES . "
                    WHERE products_id IN (
                        SELECT products_id FROM " . TABLE_PRODUCTS . " WHERE products_status = 1
                    )
                )
            )";
    $db->query($sql);

    // Fetch sub-categories
    $sql = "SELECT categories_id FROM " . TABLE_CATEGORIES . " WHERE parent_id = " . (int)$categoryId;
    $subCategories = $db->get_results($sql, ARRAY_A);

    // Process sub-categories recursively
    foreach ($subCategories as $subCategory) {
        disableCategories($subCategory['categories_id']);
    }
}

// Disable categories without active products or sub-categories with active products
disableCategories(0);

// Close the database connection
$db->disconnect();
?>
