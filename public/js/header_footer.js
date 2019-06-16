document.getElementById("DESKTOP_HEADER").innerHTML =  

			'<div class="container-menu-header">'+
				'<div class="wrap_header">'+
					'<!-- Logo -->'+
					'<a href="index.html" class="logo">'+
						'<img src="images/icons/logo.png" alt="IMG-LOGO" dim=80>'+
					'</a>'+

					'<!-- Menu -->'+
					'<div class="wrap_menu">'+
						'<nav class="menu">'+
							'<ul class="main_menu">'+

								'<li>'+
									'<a href="index.html">'+'Home'+'</a>'+
								'</li>'+
								
								'<td>'+
									'<a href="books.html" >'+'Books'+'</a>'+
								'</td>'+

								
									'<div class="header-wrapicon2">'+
										'<img src="images/icons/icon-dropdown.png"  class="header-icon1 js-show-header-dropdown header-cart-item-book" alt="ICON">'+
										
											'<div class="header-cart header-dropdown">'+
													
													'<ul class="toBeCentered header-cart-wrapitem">'+
													'<hr>'+
													'<a href="genres.html" >'+'All generes'+'</a>'+ '<br>'+
													'<a href="themes.html" >'+'All themes'+'</a>'+ '<br>'+
													'<hr>'+
													'</ul>' +
											'</div>'+						
									'</div>'+
								

								'<li>'+
									'<a href="authors.html">'+'Authors'+'</a>'+
								'</li>'+

								

								'<li>'+
									'<a href="events.html">'+'Events'+'</a>'+
								'</li>'+

								'<li>'+
									'<a href="about.html">'+'About'+'</a>'+
								'</li>'+

								'<li>'+
									'<a href="contact.html">'+'Contacts'+'</a>'+
								'</li>'+
							'</ul>'+
						'</nav>'+
					'</div>'+

					'<!-- Header Icon -->'+
					'<div class="header-icons" >'+

						'<div class="header-wrapicon2">'+
							'<img src="images/icons/icon-magnifier.png"  class="header-icon1 js-show-header-dropdown" alt="ICON">'+

							'<!-- Header cart noti -->'+
							'<div class="header-cart header-dropdown">'+
								'<form action="javascript:onSearchEnterDesktop()">'+
								'<ul class="header-cart-wrapitem">'+
									'<div class="search-product pos-relative bo11 of-hidden">'+
										'<input class="s-text7 size16 p-l-23 p-r-50" type="text" id="SEARCH_LABEL_D" name="search-product" placeholder="Search in Booky...">'+
										'<button class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">'+
											'<i class="fs-12 fa fa-search" aria-hidden="true">'+'</i>'+
										'</button>'+	
									'</div>'+									
									'<div class="flex-w">'+
										'<div class="rs2-select2 bo20 of-hidden w-size12 m-t-5 m-b-5 m-r-10">'+
											'<div class="wrap_menu">Search for...</div>'+
											
										'</div>'+
									'</div>'+	
									'<div class="toBeCentered">'+
												'<input type="checkbox" class="selection-2" id="RADIO_SEARCH_BOOK_D" checked>Books</input>'+ '&nbsp'+ '&nbsp'+
												'<input type="checkbox" class="selection-2" id="RADIO_SEARCH_AUTHOR_D" checked>Authors</input>'+ '&nbsp'+ '&nbsp'+
												'<input type="checkbox" class="selection-2" id="RADIO_SEARCH_EVENT_D" checked>Events</input>'+ 
											'</div>'+					
								'</ul></form>'+
							'</div>'+						
						'</div>'+

						'<span class="linedivide1">'+'</span>'+

						'<div class="header-wrapicon2">'+
							'<img src="images/icons/icon-header-01.png" class="header-icon1 js-show-header-dropdown" alt="ICON">'+
							
							
							'<!-- Header cart noti- login -->'+
							'<div class="header-cart header-dropdown" id="HEADER_LOGIN_D">'+
								'<form id="LOGIN_FORM_D" action="javascript:onLoginDesktopSubmit()">'+
									'<ul class="header-cart-wrapitem">'+
										'<label for="uname">'+'<b>'+'Username'+'</b>'+'</label>'+
										'&nbsp'+ '&nbsp'+
										'<input type="text" placeholder="Enter Username" name="uname" id="unameD" required>'+
										'<br/>'+
										'<br>'+
										'<label for="pwd">'+'<b>'+'Password'+'</b>'+'</label>'+
										'&nbsp'+ '&nbsp'+ '&nbsp'+ '&nbsp'+
										'<input type="password" placeholder="Enter Password" name="pwd" id="pwdD" required>'+
										'<br>'+
										'<br>'+
									'</ul>'+
								
								
									'<div class="header-cart-buttons">'+
										'<div class="header-cart-wrapbtn1">'+
											'<button class="flex-c-m size26 bg1 bo-rad-20 hov1 s-text1 trans-0-4 all123" align="right" type="submit" background-color: #4CAF50>'+'Login'+'</button>'+
										'</div>'+
										'<br>'+
										'<br>'+
									'</div>'+
								'</form>'+
								'<br/>'+
								'<br/>'+
								
								'<hr>' +

								'<div class="header-cart-buttons">'+
									'<div class="header-cart-wrapbtn2">'+
										'<!-- Button -->'+
										'<a href="register.html" class="flex-c-m size25 bg9 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'Register'+
										'</a>'+
									'</div>'+

									'<div class="header-cart-wrapbtn2">'+
										'<!-- Button -->'+
										'<a href="#" class="flex-c-m size25 bg9 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'User Profile'+
										'</a>'+
									'</div>'+
								'</div>'+
							'</div>'+
							
						'</div>'+

						'<span class="linedivide1">'+'</span>'+

						'<div class="header-wrapicon2">'+
							'<img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">'+
							'<span id="POP_NUM_ITEMS_D"></span>'+
							
							'<!-- Header cart noti -->'+
							'<div class="header-cart header-dropdown">'+
								'<ul class="header-cart-wrapitem" id="CART_LIST_D"></ul>'+

								'<div class="header-cart-total" id="CART_TOTAL_D"></div>'+

								'<div class="header-cart-buttons">'+
									'<div class="header-cart-wrapbtn">'+
										'<!-- Button -->'+
										'<a href="cart.html" class="flex-c-m size26 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'View Cart'+
										'</a>'+
									'</div>'+

									'<div class="header-cart-wrapbtn">'+
										'<!-- Button -->'+
										'<a href="cart.html#anchor" class="flex-c-m size26 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'Check Out'+
										'</a>'+
									'</div>'+
								'</div>'+
							'</div>'+
							
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';

document.getElementById("MOBILE_HEADER").innerHTML = 
			'<div class="wrap_header_mobile">'+
				'<!-- Logo moblie -->'+
				'<a href="index.html" class="logo-mobile">'+
					'<img src="images/icons/logo.png" alt="IMG-LOGO">'+
				'</a>'+

				'<!-- Button show menu -->'+
				'<div class="btn-show-menu">'+
					'<!-- Header Icon mobile -->'+
					'<div class="header-icons-mobile" id="HEADER_ICONS_MOBILE">'+
						'<div class="header-wrapicon2">'+
										
						'</div>'+
						'<span class="linedivide2"></span>'+
						'<div class="header-wrapicon2">'+
							'<img src="images/icons/icon-header-01.png" class="header-icon1 js-show-header-dropdown" alt="ICON">'+
							
							
							'<!-- Header cart noti- login -->'+
							'<div class="header-cart header-dropdown" id="HEADER_LOGIN_M">'+
								'<form id="LOGIN_FORM_M" action="javascript:onLoginMobileSubmit()">'+
									'<ul class="header-cart-wrapitem">'+
									'<label for="uname">'+'<b>'+'Username'+'</b>'+'</label>'+
									'&nbsp'+ '&nbsp'+
									'<input type="text" placeholder="Enter Username" name="uname" id="unameD" required>'+
									'<br/>'+
									'<br>'+
									'<label for="pwd">'+'<b>'+'Password'+'</b>'+'</label>'+
									'&nbsp'+ '&nbsp'+ '&nbsp'+ '&nbsp'+
									'<input type="password" placeholder="Enter Password" name="pwd" id="pwdD" required>'+
									'<br>'+
									'<br>'+

									'</ul>'+
								
								
									'<div class="header-cart-buttons">'+
										'<div class="header-cart-wrapbtn">'+
											'<button class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4" align="right" type="submit" background-color: #4CAF50>'+'Login'+'</button>'+
										'</div>'+
									'</div>'+
								'</form>'+
								'<br/>'+
								
								'<hr>'+

								'<div class="header-cart-buttons">'+
									'<div class="header-cart-wrapbtn">'+
										'<!-- Button -->'+
										'<a href="register.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'Register'+
										'</a>'+
									'</div>'+

									'<div class="header-cart-wrapbtn">'+
										'<!-- Button -->'+
										'<a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'Profile'+
										'</a>'+
									'</div>'+
								'</div>'+
							'</div>'+
							
						'</div>'+


						'<span class="linedivide2">'+'</span>'+

						'<div class="header-wrapicon2">'+
							'<img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">'+
							'<span id="POP_NUM_ITEMS_M"></span>'+

							'<!-- Header cart noti -->'+
							'<div class="header-cart header-dropdown">'+
								'<ul class="header-cart-wrapitem" id="CART_LIST_M"></ul>'+

								'<div class="header-cart-total" id="CART_TOTAL_M"></div>'+

								'<div class="header-cart-buttons">'+
									'<div class="header-cart-wrapbtn">'+
										'<!-- Button -->'+
										'<a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'View Cart'+
										'</a>'+
									'</div>'+

									'<div class="header-cart-wrapbtn">'+
										'<!-- Button -->'+
										'<a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">'+
											'Check Out'+
										'</a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+

					'<div class="btn-show-menu-mobile hamburger hamburger--squeeze">'+
						'<span class="hamburger-box">'+
							'<span class="hamburger-inner">'+'</span>'+
						'</span>'+
					'</div>'+
				'</div>'+
			'</div>'+

			'<!-- Menu Mobile -->'+
			'<div class="wrap-side-menu" >'+
				'<nav class="side-menu">'+
					'<ul class="main-menu">'+
		

						'<li class="item-menu-mobile">'+
							'<a href="index.html">'+'Home'+'</a>'+
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="books.html">'+'Books'+'</a>'+
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="genres.html">'+ 'All books genres'+'</a>'+ 
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="themes.html">'+ 'All books themes'+'</a>'+ 
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="authors.html">'+'Authors'+'</a>'+
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="events.html">'+'Events'+'</a>'+
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="about.html">'+'About'+'</a>'+
						'</li>'+

						'<li class="item-menu-mobile">'+
							'<a href="contact.html">'+ 'Contacts'+'</a>'+ 
						'</li>'+
					'</ul>'+
				'</nav>'+
			'</div>';

document.getElementById("FOOTER").innerHTML = '<div class="flex-w p-b-90">'+
'<div class="w-size6 p-t-30 p-l-15 p-r-15 respon4">'+
	'<h4 class="s-text12 p-b-30">'+
		'GET IN TOUCH'+
	'</h4>'+

	'<div>'+
		'<p class="s-text7 w-size27">'+
			'<a href="contact.html">'+'Contacts'+'</a>'+
		'</p>'+
	'</div>'+
'</div>'+

'<div class="w-size6 p-t-30 p-l-15 p-r-15 respon4">'+
	'<h4 class="s-text12 p-b-30">'+
		'Categories'+
	'</h4>'+

	'<ul>'+
		'<li class="p-b-9">'+
			'<a href="#" class="s-text7">'+
				'<a href="books.html">'+'Books'+'</a>'+
			'</a>'+
		'</li>'+

		'<li class="p-b-9">'+
			'<a href="#" class="s-text7">'+
				'<a href="authors.html">'+'Authors'+'</a>'+
			'</a>'+
		'</li>'+

		'<li class="p-b-9">'+
			'<a href="#" class="s-text7">'+
				'<a href="events.html">'+'Events'+'</a>'+
			'</a>'+
		'</li>'+

	'</ul>'+
'</div>'+

'<div class="w-size6 p-t-30 p-l-15 p-r-15 respon4">'+
	'<h4 class="s-text12 p-b-30">'+
		'LINKS'+
	'</h4>'+
	'<ul>'+
		'<li class="p-b-9">'+
			'<a href="#" class="s-text7">'+
				'<a href="cart.html">'+'Cart'+'</a>'+
			'</a>'+
		'</li>'+
		'<li class="p-b-9">'+
			'<a href="#" class="s-text7">'+
				'<a href="shippingInfo.html">'+'Shipping Info'+'</a>'+
			'</a>'+
		'</li>'+
		'<li class="p-b-9">'+
			'<a href="#" class="s-text7">'+
				'<a href="about.html">'+'About Us'+'</a>'+
			'</a>'+
		'</li>'+
	'</ul>'+
'</div>'+


'</div>'+

'<div class="t-center p-l-15 p-r-15">'+

'<div class="t-center s-text8 p-t-20">'+
	'Copyright © 2019 All rights reserved.'+
'</div>'+
'</div>';
