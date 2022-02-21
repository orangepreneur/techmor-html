<?php
$to = "prateek.datta@techmorml.com";
$subject = "Contact Request from TechMor";
$headers  = 'From: TechMor Contact <"webmaster@techmorml.com">';
$message = 'You have received an contact request\n\n\nName: '.$_POST['name']."\nEmail: ".$_POST['email']."\nPhone: ".$_POST['phone']."\nOrganization: ".$_POST['org']."\nJob Title: ".$_POST['jobTitle']."\nCountry: ".$_POST['country']."\n\nMessage: ".$_POST['message']."\n\n\n\n This email is generated from Techmorml.com/contact.html";
mail($to,$subject,$message,$headers);

header("Location: https://techmorml.com/thank-you.html");
die();
?>