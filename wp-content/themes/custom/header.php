<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php wp_title(' | ', 'echo', 'right'); ?></title>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=yes">

  <?php wp_head(); ?>

</head>
<body>

  <?php
    get_template_part('partials/partial', 'notification-bar')
  ?>

  <header class="header">


  </header>


