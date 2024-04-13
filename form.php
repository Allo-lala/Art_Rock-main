<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = 'arocug@gmail.com';
    $subject = 'General Contact';
    
    $message = "Name: $name\n\n";
    $message .= "Email: $email\n\n";
    $message .= "Subject: $subject\n\n";
    $message .= "Message: $message\n\n";
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        // Redirect to home page
        echo '<script>window.location.href = "index.html";</script>';
        exit;
    } else {
        echo '<p>Oops! An error occurred while submitting. Please try again later.</p>';
    }
}
?>