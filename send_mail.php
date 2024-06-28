<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera i dati dal modulo
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email destinatario
    $to = 'sales@aisol.it';

    // Oggetto dell'email
    $subject = 'Nuovo messaggio dal modulo di contatto';

    // Corpo dell'email
    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Messaggio:\n$message\n";

    // Intestazioni dell'email
    $headers = "From: $name <$email>";

    // Invia l'email
    if (mail($to, $subject, $email_content, $headers)) {
        // Reindirizza a una pagina di conferma
        header("Location: thank_you.html");
        exit();
    } else {
        // Mostra un messaggio di errore
        echo "C'è stato un errore nell'invio del messaggio. Riprova più tardi.";
    }
} else {
    // Se il modulo non è stato inviato correttamente, mostra un messaggio di errore
    echo "Si è verificato un errore. Per favore, riprova.";
}
?>
