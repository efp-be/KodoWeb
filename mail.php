<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  try {
    // Retrieve form data
    $payload = file_get_contents("php://input");
    $data = json_decode($payload, true);

    // Sanitize data
    $name = htmlspecialchars(trim($data['name']));
    $email = htmlspecialchars(trim($data['email']));
    $message = htmlspecialchars(trim($data['message']));

    // Validate data
    if (empty($name) || empty($email) || empty($message)) {
      echo json_encode([
        'status' => 'error',
        'message' => 'Veuillez remplir tous les champs'
      ]);
      
      exit();
    }

    // Email recipient
    $to = "john.doe@gmail.com";

    // Email subject
    $subject = "New message from contact form - Web2Risk";
    
    // Email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
      echo json_encode([
        'status' => 'success',
        'message' => 'Your message has been sent successfully. We will get back to you shortly.'
      ]);

      exit();
    }

    throw new Exception('Email sending failed');
  } catch (Exception $e) {
    echo json_encode([
      'status' => 'error',
      'message' => $e->getMessage()
    ]);

    exit();
  }
} else {
  echo json_encode([
    'status' => 'error',
    'message' => 'Unauthorized access'
  ]);

  exit();
}
?>