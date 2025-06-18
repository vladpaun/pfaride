<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$income = $input['income'] ?? '';
$situation = $input['situation'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';

// Validare de bază
if (empty($income) || empty($situation) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Toate câmpurile sunt obligatorii']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email invalid']);
    exit;
}

// Configurare email
$to = 'contact@pfaride.ro';
$subject = 'Cerere calcul taxe PFA - ' . date('Y-m-d H:i:s');

$message = "
Cerere nouă pentru calculul taxelor PFA:

Încasări săptămânale: {$income} lei
Regim fiscal: {$situation}
Email: {$email}
Telefon: {$phone}

Data cererii: " . date('Y-m-d H:i:s') . "
IP: " . $_SERVER['REMOTE_ADDR'] . "
";

$headers = [
    'From: noreply@pfaride.ro',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';
$mail = new PHPMailer(true);
/*
try {
// Server settings
$mail->SMTPDebug = 0; // Set to 2 for verbose debug output
$mail->isSMTP();
$mail->Host = 'mail.ssss.ro'; // Your SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'no-reply@de.ro'; // SMTP username
$mail->Password = 'wT z4$['; // SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Encryption type
$mail->Port = 465; // Port for SSL

// Recipients
$mail->setFrom('no-reply@ss.ro', 'Formular side ss.ro');
$mail->addAddress('office@s.ro'); // Add recipient

// Content
$mail->isHTML(true); // Set email format to HTML
$mail->Subject = $subject;
$mail->Body = $body_html;
$mail->AltBody = $body;

$mail->send();
echo json_encode(['success' => true]);}
 catch (Exception $e) {
 http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail failed']);

} */
$success = mail($to, $subject, $message, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email trimis cu succes']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Eroare la trimiterea emailului']);
}

?>