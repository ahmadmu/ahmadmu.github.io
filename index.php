<!DOCTYPE html>
<html>

    <head>
        <title>Ahmad's Showcase</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed|Indie+Flower" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
        <style>
            body {
                background-color: 
            }
            .container{
                font-family: 'Saira Semi Condensed', sans-serif;
            }
            h1 {
                font-family: 'Indie Flower', cursive;
            }
            img {
                border-radius: 2px;
            }
            p {
                margin: 8px;
            }
            #header {
                padding: 20px;
            }
            .thumbnail {
                padding: 0px;
            }
            a:hover {
                text-decoration: none;
            }
            .date {
                display: block;
            }
            .col-md-4 {
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <?php
            class Item {
                
                protected $title;
                protected $image;
                protected $date;
                protected $description;
                protected $link;

                public static $numberOfItems = 0;

                function __construct($title, $image, $date, $description, $link){
                    $this->title = $title;
                    $this->image = $image;
                    $this->date = $date;
                    $this->description = $description;
                    $this->link = $link;
                    Item::$numberOfItems++;
                }

                public function getDate(){ return $this->date; }
                public function getTitle() { return $this->title; }
                public function getImage() { return $this->image; }
                public function getDescription() { return $this->description; }
                public function getLink() { return $this->link; }

            }

            $eKalender = new Item('Eventkalender', 'http://i.imgur.com/Uq2tdV5.png',
                                    'December 2014', 'Uni Project', '../eventkalender2015/eventkalender.html');
            $yoCamp = new Item('YoCamp', 'http://i.imgur.com/Qw0xP0o.png',
                                    'May 2017', 'node.js Project', 'https://mudquat.herokuapp.com/');
            $shopList = new Item('ShoppingList', 'http://i.imgur.com/RB5fmjD.png', 
                                    'June 2017', 'Angular Project', '../shoppinglist/index.html');
            $burogi = new Item('Burogi', 'http://i.imgur.com/XUNJVRp.png', 
                                    'July 2017', 'Angular Project', '../burogy/index.html');
            $lakeBled = new Item('Lake Bled', 'http://i.imgur.com/g5t0pRn.jpg',
                                    'August 2017', 'css jquery materialize website', '../lakebledslovenia.html');            

            $items = array($eKalender, $yoCamp, $shopList, $burogi, $lakeBled);
        ?>

        <div class="container text-center">
            <div id="header">
                <h1>Ahmad Moudallal</h1>
                <p>A recreation for my showcase with php. <a href="../">Click Here to go back to showcase</a></p>
            </div>
            <div class="row">
                <h3>Number of Items: <?php echo Item::$numberOfItems ?></h3>
                <?php  foreach ($items as $item) { ?>
                    <div class="col-md-4">
                        <a href=<?php echo $item->getLink() ?>> <img class="img-responsive thumbnail" src=<?php echo $item->getImage() ?> alt=<?php $item->getTitle() ?>> </a>
                        <a href=<?php echo $item->getLink() ?>>
                            <p> <?php echo $item->getTitle() ?> </p>
                        </a>
                        <p><?php echo $item->getDescription() ?></p>
                        <p class="date">Date Created: <?php echo $item->getDate() ?></p>
                    </div>
                <?php } ?>
            </div>

        <script>
            $(document).ready(function () {
                $('img').hover( function () {
                    $(this).css('opacity', '0.8');
                }, function() {
                    $(this).css('opacity', '1');
                })
            });
        </script>
    </body>
</html>