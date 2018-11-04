<?php
/**
 * Created by Carlos de la Sierra.
 * Date: 17/10/16
 * Time: 11:07
 */

date_default_timezone_set('Etc/UTC');
require 'lib/PHPMailer/PHPMailerAutoload.php';

$postdata = file_get_contents("php://input");
$user_request = json_decode($postdata);

$sender_name = $user_request->name;
$sender_email = $user_request->email;
$email_subject = "contact from web form";
$email_body = $user_request->message;

function sendEmailPhpMailer($sender_name, $sender_email, $email_subject, $email_body)
{

    /**
     *
     * CUBENODE MAIL SMTP CONFIGURATION
     *
     * Secure SSL/TLS Settings
     * (Recommended)
     * Username: dominio@tudominio.com
     * Password:    Use the email account’s password.
     * Incoming Server:    cp96.zonasprivadasdns.com
     * IMAP Port: 993
     * POP3 Port: 995
     * Outgoing Server:    cp96.zonasprivadasdns.com
     * SMTP Port: 465
     * Authentication is required for IMAP, POP3, and SMTP.
     */


    //SMTP needs accurate times, and the PHP time zone MUST be set
    //This should be done in your php.ini, but this is how to do it if you don't have access to that

    //Create a new PHPMailer instance
    $mail = new PHPMailer;

    //Tell PHPMailer to use SMTP
    $mail->isSMTP();

    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    //$mail->SMTPDebug = 3;

    //Ask for HTML-friendly debug output
    $mail->Debugoutput = 'html';

    //Set the hostname of the mail server
//    $mail->Host = 'smtp.gmail.com';
    $mail->Host = 'cp96.zonasprivadasdns.com';
    // use
    // $mail->Host = gethostbyname('smtp.gmail.com');
    // if your network does not support SMTP over IPv6

    //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
    $mail->Port = 465; //465 for ssl - 587 for TLS

    //Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'ssl';//tls

    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;

    //Username to use for SMTP authentication - use full email address for gmail
    // $mail->Username = "studio@carlosdelasierra.com";
    $mail->Username = "cs@carlosdelasierra.com";

    //Password to use for SMTP authentication
    // $mail->Password = "297jvXSiVC48";
    $mail->Password = "166871Sonor";

    //Set who the message is to be sent from
    $mail->setFrom('studio@carlosdelasierra.com', 'Web carlosdelasierra');

    //Set an alternative reply-to address
    $mail->addReplyTo($sender_email, $sender_name);

    //Set who the message is to be sent to
    //$mail->addAddress($to, $name.' '.$surname);
    $mail->addAddress('cs@carlosdelasierra.com', 'Carlos de la Sierra');

    //Set the subject line
    $mail->Subject = $sender_name.' - '.$email_subject;

    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    // $mail->msgHTML('<p>email de test.</p><p>Haz click <a href="#"><strong>Aquí</strong></a> para ver el vídeo:</p>');

    //Replace the plain text body with one created manually
    $mail->Body = $email_body;

    //Attach an image file
//    if (!empty($image_dir) && !empty($image_unique_name)) {
//        $mail->addAttachment($image_dir . $image_unique_name);
//    }
//send the message, check for errors
// if (!$mail->send() && !empty($last_insert)) {
if (!$mail->send()) {
    echo json_encode(array('status' => 'error', 'msg' => 'error, wrong email', 'sender_name' => $sender_name, 'sender_email' => $sender_email, 'email_subject' => $email_subject, 'email_body' => $email_body));
    // return;
} else {
    // echo json_encode(array('status' => 'OK', 'msg' => 'email sent successfully'));
    echo json_encode(array('status' => 'OK', 'msg' => 'email sent successfully'));
    // return;
}
$mail->ClearAllRecipients( );

}

sendEmailPhpMailer($sender_name, $sender_email, $email_subject, $email_body);

