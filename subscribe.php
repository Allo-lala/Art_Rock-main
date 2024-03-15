<?php
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $email = $_POST['dmcimateview_email_sub'];

  // Compose email message
  $to = 'arocug@gmail.com';
  $subject = 'Subscription Request';
  $message = "Email Address: $email";

  // Send email
  $headers = "From: $email";
  if (mail($to, $subject, $message, $headers)) {
    // Clear the form data after successful submission
    $email = '';
    
    // Redirect to index.html
    header('Location: index.html');
    exit; // Make sure to exit after redirecting
  } else {
    echo 'Error sending the email. Please try again.';
  }
}
?>