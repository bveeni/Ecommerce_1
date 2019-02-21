<!--A Design by W3layouts 
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE html>
<html>
<head>
<title>Shopin A Ecommerce Category Flat Bootstrap Responsive Website Template | Home :: w3layouts</title>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<!--theme-style-->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
<!--//theme-style-->
<link href="css/popup.css" rel="stylesheet" type="text/css" media="all" />	
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Shopin Responsive web template, Bootstrap Web Templates, Flat Web Templates, AndroId Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--theme-style-->
<link href="css/style4.css" rel="stylesheet" type="text/css" media="all" />	
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

 <script src="js/jquery.js"></script>
<script src="js/productadd.js"> </script>
<script src="js/product.js"> </script>
<script src="js/jquery.min.js"></script>
 <script src="js/crossdomain-ajax.js"></script>
 <script src="js/index.js"></script><!-- linking JS file-->
    <script src="cordova.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!--- start-rate---->
<script src="js/jstarbox.js"></script>
	<link rel="stylesheet" href="css/jstarbox.css" type="text/css" media="screen" charset="utf-8" />
	<link rel="stylesheet" href="css/bootstrap.min.css">
		<script type="text/javascript">
			jQuery(function() {
			jQuery('.starbox').each(function() {
				var starbox = jQuery(this);
					starbox.starbox({
					average: starbox.attr('data-start-value'),
					changeable: starbox.hasClass('unchangeable') ? false : starbox.hasClass('clickonce') ? 'once' : true,
					ghosting: starbox.hasClass('ghosting'),
					autoUpdateAverage: starbox.hasClass('autoupdate'),
					buttons: starbox.hasClass('smooth') ? false : starbox.attr('data-button-count') || 5,
					stars: starbox.attr('data-star-count') || 5
					}).bind('starbox-value-changed', function(event, value) {
					if(starbox.hasClass('random')) {
					var val = Math.random();
					starbox.next().text(' '+val);
					return val;
					} 
				})
			});
		});
		</script>
<!---//End-rate---->

</head>
<body>
<!--header-->
<div class="header">
<div class="container">
		<div class="head">
			<div class=" logo">
				<a href="index.html"><img src="images/logo.png" alt=""></a>	
			</div>
		</div>
	</div>
	<div class="header-top">
<div class="cart box_1" float="right" >						
						<h3> <div class="total">
						<div class="w3-dropdown-click">						
						<img src="images/user.jpg" alt="" onclick= "logout()" />	
						<div id="Demo" class="w3-dropdown-content w3-bar-block w3-border">
							  <a href="" class="w3-bar-item w3-button" onclick="signout()">Logout</a>							 
							</div>		
						
						</div>
						<p><a href="javascript:;" class="simpleCart_empty" id="profileid">Profile</a></p>			
						

					</div>	
	</div>	
	
		<div class="container">
		<div class="col-sm-5 col-md-offset-2  header-login">
					<ul >
						<li><a href="login.html">Login</a></li>
						<li><a href="register.html">Register</a></li>
						<li><a href="#checkout" onclick="showDiv1()">Checkout</a></li>						  
					</ul>
				</div>
				

				<div class="clearfix"> </div>
		</div>
		</div>
		
		<div class="container">
		
			<div class="head-top">
			
		 <div class="col-sm-8 col-md-offset-2 h_menu4">
				<nav class="navbar nav_bottom" role="navigation">
 
 <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header nav_2">
      <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
     
   </div> 
   <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
        <ul class="nav navbar-nav nav_1">
            <li><a class="color" href="index.html">Home</a></li>
			 <li><a class="color" href="new.html" id="Men" onclick="setGen(this);">Men</a></li>
			  <li><a class="color" href="women.html" id="Women" onclick="setGen(this);">Women</a></li>
			   <li><a class="color" href="kids.html">Kids</a></li>
			   
            
    		<!-- <li class="dropdown mega-dropdown active"> -->
			    <!-- <a class="color1" href="#" class="dropdown-toggle" data-toggle="dropdown">Women<span class="caret"></span></a>				 -->
				<!-- <div class="dropdown-menu "> -->
                    <!-- <div class="menu-top"> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu1</h4> -->
									<!-- <ul> -->
										<!-- <li><a href="product.html">Accessories</a></li> -->
										<!-- <li><a href="product.html">Bags</a></li> -->
										<!-- <li><a href="product.html">Caps & Hats</a></li> -->
										<!-- <li><a href="product.html">Hoodies & Sweatshirts</a></li> -->
										
									<!-- </ul>	 -->
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu2</h4> -->
								<!-- <ul> -->
										<!-- <li><a href="product.html">Jackets & Coats</a></li> -->
										<!-- <li><a href="product.html">Jeans</a></li> -->
										<!-- <li><a href="product.html">Jewellery</a></li> -->
										<!-- <li><a href="product.html">Jumpers & Cardigans</a></li> -->
										<!-- <li><a href="product.html">Leather Jackets</a></li> -->
										<!-- <li><a href="product.html">Long Sleeve T-Shirts</a></li> -->
									<!-- </ul>	 -->
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu3</h4> -->
									<!-- <ul> -->
										<!-- <li><a href="product.html">Shirts</a></li> -->
										<!-- <li><a href="product.html">Shoes, Boots & Trainers</a></li> -->
										<!-- <li><a href="product.html">Sunglasses</a></li> -->
										<!-- <li><a href="product.html">Sweatpants</a></li> -->
										<!-- <li><a href="product.html">Swimwear</a></li> -->
										<!-- <li><a href="product.html">Trousers & Chinos</a></li> -->
										
									<!-- </ul>	 -->
								
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu4</h4> -->
								<!-- <ul> -->
									<!-- <li><a href="product.html">T-Shirts</a></li> -->
									<!-- <li><a href="product.html">Underwear & Socks</a></li> -->
									<!-- <li><a href="product.html">Vests</a></li> -->
									<!-- <li><a href="product.html">Jackets & Coats</a></li> -->
									<!-- <li><a href="product.html">Jeans</a></li> -->
									<!-- <li><a href="product.html">Jewellery</a></li> -->
								<!-- </ul>	 -->
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1 col5"> -->
						<!-- <img src="images/me.png" class="img-responsive" alt=""> -->
						<!-- </div> -->
						<!-- <div class="clearfix"></div> -->
					<!-- </div>                   -->
				<!-- </div>				 -->
			<!-- </li> -->
			<!-- <li class="dropdown mega-dropdown active"> -->
			    <!-- <a class="color2" href="#" class="dropdown-toggle" data-toggle="dropdown">Men<span class="caret"></span></a>				 -->
				<!-- <div class="dropdown-menu mega-dropdown-menu"> -->
                    <!-- <div class="menu-top"> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu1</h4> -->
									<!-- <ul> -->
										<!-- <li><a href="product.html">Accessories</a></li> -->
										<!-- <li><a href="product.html">Bags</a></li> -->
										<!-- <li><a href="product.html">Caps & Hats</a></li> -->
										<!-- <li><a href="product.html">Hoodies & Sweatshirts</a></li> -->
										
									<!-- </ul>	 -->
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu2</h4> -->
								<!-- <ul> -->
										<!-- <li><a href="product.html">Jackets & Coats</a></li> -->
										<!-- <li><a href="product.html">Jeans</a></li> -->
										<!-- <li><a href="product.html">Jewellery</a></li> -->
										<!-- <li><a href="product.html">Jumpers & Cardigans</a></li> -->
										<!-- <li><a href="product.html">Leather Jackets</a></li> -->
										<!-- <li><a href="product.html">Long Sleeve T-Shirts</a></li> -->
									<!-- </ul>	 -->
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu3</h4> -->
								
<!-- <ul> -->
										<!-- <li><a href="product.html">Shirts</a></li> -->
										<!-- <li><a href="product.html">Shoes, Boots & Trainers</a></li> -->
										<!-- <li><a href="product.html">Sunglasses</a></li> -->
										<!-- <li><a href="product.html">Sweatpants</a></li> -->
										<!-- <li><a href="product.html">Swimwear</a></li> -->
										<!-- <li><a href="product.html">Trousers & Chinos</a></li> -->
										
									<!-- </ul>	 -->
								
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1"> -->
							<!-- <div class="h_nav"> -->
								<!-- <h4>Submenu4</h4> -->
								<!-- <ul> -->
									<!-- <li><a href="product.html">T-Shirts</a></li> -->
									<!-- <li><a href="product.html">Underwear & Socks</a></li> -->
									<!-- <li><a href="product.html">Vests</a></li> -->
									<!-- <li><a href="product.html">Jackets & Coats</a></li> -->
									<!-- <li><a href="product.html">Jeans</a></li> -->
									<!-- <li><a href="product.html">Jewellery</a></li> -->
								<!-- </ul>	 -->
							<!-- </div>							 -->
						<!-- </div> -->
						<!-- <div class="col1 col5"> -->
						<!-- <img src="images/me1.png" class="img-responsive" alt=""> -->
						<!-- </div> -->
						<!-- <div class="clearfix"></div> -->
					<!-- </div>                   -->
				<!-- </div>				 -->
			<!-- </li> -->
		
		<li><a class="color3" href="sale.html">Sale</a></li>
			<li><a class="color4" href="about.html">About</a></li>
            <!-- <li><a class="color5" href="typo.html">Short Codes</a></li> -->
            <li ><a class="color6" href="contact.html">Contact</a></li>
        </ul>
     </div><!-- /.navbar-collapse -->

</nav>
			</div>
			<div class="col-sm-2 search-right">
				<ul class="heart">
				<li>
				<a href="wishlist.html" >
				<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
				</a></li>
				<li><a class="play-icon popup-with-zoom-anim" href="#small-dialog"><i class="glyphicon glyphicon-search"> </i></a></li>
					</ul>
					<div class="cart box_1">
						<a href="#checkout">
						<h3> <div class="total">
							<span class="simpleCart_total" id="simpleCart_total"></span></div>
							<!-- <h4> <span>Tot</span> <span id="totprice"></span></h4> -->
							<img src="images/cart.png" alt="" onclick="showDiv1()" /></h3>
				</a> 
						<p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>

					</div>

					<div class="clearfix"> </div>
					

						<!----->

						<!---pop-up-box---->					  
			<link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all"/>
			<script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
			<!---//pop-up-box---->
			<div id="small-dialog" class="mfp-hide">
				<div class="search-top">
					<div class="login-search">
						<input type="submit" value="">
						<input type="text" value="Search.." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search..';}">		
					</div>
					<p>Shoping</p>
				</div>				
			</div>
		 <script>
			$(document).ready(function() {
			$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
			});
																						
			});
		</script>		
						<!----->
			</div>
			<div class="clearfix"></div>
		</div>	
	</div>	
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
       <h1> <span id="modal-title"> </span></h1>
      </div>
      <div class="modal-body">
	  <h4> <span> Type: </span> <span id="typetitle"></span></h4>
        <h4> <span id="">Price/Item: $ </span> <span id="pricetitle"> </span> </h4>
		 <h4> <span id="title"> No.Of Items:<input type="text" id ="noofitems"/></span></h4>
		 <h4> <span>Total Price:$<span id ="totalpricetitle"/></span></h4>
		  <h4> <span>Count:<span id ="count" value ="0" /></span></h4>
		
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-primary" onclick="add();">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
<!--banner-->
<div class="banner">
<div class="container">
<section class="rw-wrapper">
				<h1 class="rw-sentence">
					<span>Panauti Fancy Store</span>
					<div class="rw-words rw-words-1">
						<span>Beautiful Designs</span>
						<span>Classy Style</span>
						<span>Adorable Outfit</span>
						<span>With</span>
						<span>Affordable & Worth Price</span>
						<span>Hurry Up</span>
					</div>
					<div class="rw-words rw-words-2">
						<span>Style is a way to say</span>
						<span>who you are!!!</span>
						<span>without having to speak</span>
						<span>Come and Join</span>
						<span>"Panauti Fancy Store"</span>
						<span>For showing your style Mantra</span>
					</div>
				</h1>
			</section>
			</div>
</div>
	<!--content-->
		<div class="content" id="contenthome">
			<div class="container">
				<div class="content-top">
					<div class="col-md-6 col-md">
						<div class="col-1">
						 <a href="index.html" class="b-link-stroke b-animate-go  thickbox">
		   <img src="images/pi.jpg" class="img-responsive" alt=""/><div class="b-wrapper1 long-img"><p class="b-animate b-from-right    b-delay03 ">Lorem ipsum</p><label class="b-animate b-from-right    b-delay03 "></label><h3 class="b-animate b-from-left    b-delay03 ">Trendy</h3></div></a>

							<!---<a href="single.html"><img src="images/pi.jpg" class="img-responsive" alt=""></a>-->
						</div>
						<div class="col-2">
							<span>Hot Deal. Buy Now</span>
							<h2><a href="single.html">Luxurious &amp; Trendy</a></h2>
							<p>Very Good Deal!!!Grab the chance to get stylish with good attitude with shopping on this store.</p>
							<!-- <a href="single.html" class="buy-now">Buy Now</a> -->
						</div>
					</div>
					<div class="col-md-6 col-md1">
						<div class="col-3" id="Men" onclick="setGen(this);">
							<a href="new.html"><img src="images/men.jpg" class="img-responsive" alt="">
							<div class="col-pic">								
								<h5>MEN</h5>
							</div></a>
						</div>
						<div class="col-3" id="Women" onclick="setGen(this);">
							<a href="women.html"><img src="images/women.jpg" class="img-responsive" alt="">
							<div class="col-pic">								
								<h5>WOMEN</h5>
							</div></a>
						</div>
						<div class="col-3" id="kids" onclick="setGen(this);">
							<a href="Kids.html"><img src="images/kid.jpg" class="img-responsive" alt="">
							<div class="col-pic">								
								<h5>KIDS</h5>
							</div></a>
						</div>
					</div>
					

</div>
<div class="content-mid">
				<h3 align="center">Choices</h3>
				<label class="line"></label>
				<h3 align="center">Trending Items</h3>
				<div class="mid-popular">
				<div class="col-md-3 item-grid simpleCart_shelfItem">
					<h2>Men Bags</h2>

<div class="w3-content w3-display-container">
<div class=" mid-pop">
	<div class="pro-img">
	
  <img class="mySlides" src="images/bag1.jpg" style="width:100%">
  <img class="mySlides" src="images/bag8.jpg" style="width:100%">
  <img class="mySlides" src="images/bag2.jpg" style="width:100%">
  <img class="mySlides" src="images/bag3.jpg" style="width:100%">
  <img class="mySlides" src="images/bag4.jpg" style="width:100%">
  <img class="mySlides" src="images/bag5.jpg" style="width:100%">
  <img class="mySlides" src="images/bag6.jpg" style="width:100%">
  <img class="mySlides" src="images/bag7.jpg" style="width:100%">
  <img class="mySlides" src="images/bag9.jpg" style="width:100%">
  

  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="w3-button w3-black w3-display-right" id="G1" onclick="plusDivs(1,this)">&#10095;</button>
  </div>
  
   </div>
    </div>
	 </div>
	 
	 <div class="col-md-3 item-grid simpleCart_shelfItem">
					<h2>Women Bags </h2>

<div class="w3-content w3-display-container">
<div class=" mid-pop">
	<div class="pro-img">
	
  <img class="mySlides2" src="images/lbag1.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag2.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag3.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag4.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag5.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag6.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag7.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag8.jpg" style="width:100%">
  <img class="mySlides2" src="images/lbag9.jpg" style="width:100%">

  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10096;</button>
  <button class="w3-button w3-black w3-display-right" id="G2" onclick="plusDivs(1,this)">&#10097;</button>
  </div>
  
   </div>
    </div>
	 </div>
	  <div class="col-md-3 item-grid simpleCart_shelfItem">
					<h2>Meb Clothes </h2>

<div class="w3-content w3-display-container">
<div class=" mid-pop">
	<div class="pro-img">
	
  <img class="mySlides3" src="images/pc.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc1.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc2.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc7.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc3.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc4.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc5.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc6.jpg" style="width:100%">
  <img class="mySlides3" src="images/pc7.jpg" style="width:100%">

  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10096;</button>
  <button class="w3-button w3-black w3-display-right" id="G3" onclick="plusDivs(1,this)">&#10097;</button>
  </div>
  
   </div>
    </div>
	 </div>
  </div>
</div>
</div>	
 <!-- slideshow -->
				<!--products-->
			<!-- <div class="content-mid"> -->
				<!-- <h3>Trending Items</h3> -->
				<!-- <label class="line"></label> -->
				<!-- <div class="mid-popular"> -->
					<!-- <div class="col-md-3 item-grid simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Women</span> -->
							<!-- <h6><a href="single.html">Sed ut perspiciati</a></h6> -->
							<!-- </div>									 -->
							<!-- <div class="img item_add" id = "0" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
					<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc1.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc1.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Women</span> -->
							<!-- <h6><a href="single.html">At vero eos</a></h6> -->
							<!-- </div> -->
									<!-- <div class="img item_add" id = "1" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
					<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc2.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc2.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Men</span> -->
							<!-- <h6><a href="single.html">Sed ut perspiciati</a></h6> -->
							<!-- </div> -->
									<!-- <div class="img item_add" id = "2" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
						<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc3.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc3.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Women</span> -->
							<!-- <h6><a href="single.html">On the other</a></h6> -->
							<!-- </div> -->
								<!-- <div class="img item_add" id = "3" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
					<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc4.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc4.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Men</span> -->
							<!-- <h6><a href="single.html">On the other</a></h6> -->
							<!-- </div> -->
									<!-- <div class="img item_add" id = "4" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
					<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc5.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc5.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Men</span> -->
							<!-- <h6><a href="single.html">Sed ut perspiciati</a></h6> -->
							<!-- </div> -->
									<!-- <div class="img item_add" id = "5" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
					
					<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc6.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc6.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Women</span> -->
							<!-- <h6><a href="single.html">At vero eos</a></h6> -->
							<!-- </div> -->
									<!-- <div class="img item_add" id = "6" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a>							</div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->
					<!-- <div class="col-md-3 item-grid1 simpleCart_shelfItem"> -->
					<!-- <div class=" mid-pop"> -->
					<!-- <div class="pro-img"> -->
						<!-- <img src="images/pc7.jpg" class="img-responsive" alt=""> -->
						<!-- <div class="zoom-icon "> -->
						<!-- <a class="picture" href="images/pc7.jpg" rel="title" class="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a> -->
						<!-- <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a> -->
						<!-- </div> -->
						<!-- </div> -->
						<!-- <div class="mid-1"> -->
						<!-- <div class="women"> -->
						<!-- <div class="women-top"> -->
							<!-- <span>Men</span> -->
							<!-- <h6><a href="single.html">Sed ut perspiciati</a></h6> -->
							<!-- </div> -->
									<!-- <div class="img item_add" id = "7" onclick= "myFunction(this);"> -->
							<!-- <a><img src="images/ca.png" alt=""></a> -->
							<!-- </div> -->
							<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							<!-- <div class="mid-2"> -->
								<!-- <p ><label>$100.00</label><em class="item_price">$70.00</em></p> -->
								  <!-- <div class="block"> -->
									<!-- <div class="starbox small ghosting"> </div> -->
								<!-- </div> -->
								
								<!-- <div class="clearfix"></div> -->
							<!-- </div> -->
							
						<!-- </div> -->
					<!-- </div> -->
					<!-- </div> -->

					<!-- <div class="clearfix"></div> -->
				<!-- </div> -->
			<!-- </div> -->
			<!-- 
			<!--//products-->
			<!--brand-->
			<div class="brand">
				<div class="col-md-3 brand-grid">
					<img src="images/ic.png" class="img-responsive" alt="">
				</div>
				<div class="col-md-3 brand-grid">
					<img src="images/ic1.png" class="img-responsive" alt="">
				</div>
				<div class="col-md-3 brand-grid">
					<img src="images/ic2.png" class="img-responsive" alt="">
				</div>
				<div class="col-md-3 brand-grid">
					<img src="images/ic3.png" class="img-responsive" alt="">
				</div>
				<div class="clearfix"></div>
			</div>
			<!--//brand-->
			</div>
			
		</div>
		
	<!--//content-->
<div class="check-out" id="checkout">
<div class="container">	
	<div class="bs-example4" data-example-id="simple-responsive-table">
	<div id="myDynamicTable">
	 </div>
   </div>
	<div class="produced">
	<a href="single.html" class="hvr-skew-backward">Produced To Buy</a>
	 </div>
</div>
</div>
	<!--//footer-->
	<div class="footer">
	<div class="footer-middle">
				<div class="container">
					<div class="col-md-3 footer-middle-in">
						<a href="index.html"><img src="images/log.png" alt=""></a>
						<p>Suspendisse sed accumsan risus. Curabitur rhoncus, elit vel tincidunt elementum, nunc urna tristique nisi, in interdum libero magna tristique ante. adipiscing varius. Vestibulum dolor lorem.</p>
					</div>
					
					<div class="col-md-3 footer-middle-in">
						<h6>Information</h6>
						<ul class=" in">
							<li><a href="404.html">About</a></li>
							<li><a href="contact.html">Contact Us</a></li>
							<li><a href="#">Returns</a></li>
							<li><a href="contact.html">Site Map</a></li>
						</ul>
						<ul class="in in1">
							<li><a href="#">Order History</a></li>
							<li><a href="wishlist.html">Wish List</a></li>
							<li><a href="login.html">Login</a></li>
						</ul>
						<div class="clearfix"></div>
					</div>
					<div class="col-md-3 footer-middle-in">
						<h6>Tags</h6>
						<ul class="tag-in">
							<li><a href="#">Lorem</a></li>
							<li><a href="#">Sed</a></li>
							<li><a href="#">Ipsum</a></li>
							<li><a href="#">Contrary</a></li>
							<li><a href="#">Chunk</a></li>
							<li><a href="#">Amet</a></li>
							<li><a href="#">Omnis</a></li>
						</ul>
					</div>
					<div class="col-md-3 footer-middle-in">
						<h6>Newsletter</h6>
						<span>Sign up for News Letter</span>
							<form>
								<input type="text" value="Enter your E-mail" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='Enter your E-mail';}">
								<input type="submit" value="Subscribe">	
							</form>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<ul class="footer-bottom-top">
						<li><a href="#"><img src="images/f1.png" class="img-responsive" alt=""></a></li>
						<li><a href="#"><img src="images/f2.png" class="img-responsive" alt=""></a></li>
						<li><a href="#"><img src="images/f3.png" class="img-responsive" alt=""></a></li>
					</ul>
					<p class="footer-class">&copy; 2016 Shopin. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
								<div class="col-sm-5 header-social">		
					<ul >
						<li><a href="#"><i></i></a></li>
						<li><a href="#"><i class="ic1"></i></a></li>
						<li><a href="#"><i class="ic2"></i></a></li>
						<li><a href="#"><i class="ic3"></i></a></li>
						<li><a href="#"><i class="ic4"></i></a></li>
					</ul>
					
			</div>
					<div class="clearfix"> </div>
					
				</div>
				
			</div>
		</div>
		<!--//footer-->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- <script src="js/simpleCart.min.js"> </script> -->

<!-- slide -->
<script src="js/bootstrap.min.js"></script>
<!--light-box-files -->
		<script src="js/jquery.chocolat.js"></script>
		<link rel="stylesheet" href="css/chocolat.css" type="text/css" media="screen" charset="utf-8">
		<!--light-box-files -->
		<script type="text/javascript" charset="utf-8">
		$(function() {
			$('a.picture').Chocolat();
		});
		</script>


</body>
</html>