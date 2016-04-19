 $(function(){
	 lol('.btn1 li','.btn li');
	 lol('.btn4 li','.btn3 li');
	 lol('.btn6 li','.btn5 li');
	 lol('.btn8 li','.btn7 li');
	 lol('.btn10 li','.btn9 li');
	 lol('.btn12 li','.btn11 li');
	 lol('.btn14 li','.btn13 li');
	 lol('.btn16 li','.btn15 li');
	 lol('.btn18 li','.btn17 li');
	 lol('.btn20 li','.btn19 li');
	 lol('.btn22 li','.btn21 li');
	 lol('.btn24 li','.btn23 li');
	 lol('.btn26 li','.btn25 li');
	 lol('.btn28 li','.btn27 li');
	 lol('.btn30 li','.btn29 li');
	 lol('.btn32 li','.btn31 li');
	 lol('.btn34 li','.btn33 li');
	 lol('.btn36 li','.btn35 li');
	 lol('.btn38 li','.btn37 li');
	 lol('.btn40 li','.btn39 li');
	 lol('.btn42 li','.btn41 li');
	 lol('.btn44 li','.btn43 li');
	 lol('.btn46 li','.btn45 li');
	 lol('.btn48 li','.btn47 li');
	 lol('.btn50 li','.btn49 li');
	 lol('.btn52 li','.btn51 li');
	 lol('.btn54 li','.btn53 li');
	 lol('.btn56 li','.btn55 li');
	 lol('.btn58 li','.btn57 li');
	 lol('.btn60 li','.btn59 li');
	 lol('.btn62 li','.btn61 li');
	 lol('.btn64 li','.btn63 li');
	 lol('.btn66 li','.btn65 li');
	 lol('.btn68 li','.btn67 li');
	 lol('.btn70 li','.btn69 li');
	 lol('.btn72 li','.btn71 li');
	 lol('.btn74 li','.btn73 li');
	 
	 lol('.btn76 li','.btn75 li');
	 lol('.btn78 li','.btn77 li');
	 lol('.btn80 li','.btn79 li');
	 lol('.btn82 li','.btn81 li');
	 lol('.btn84 li','.btn83 li');
	 
	 
	 
	 
	 ez('.btn2 li','.jqbox');
	 ez('.btn222 li','.jqbox1');
	 ez('.btn333 li','.jqbox2');
	 ez('.btn444 li','.jqbox3');
	 ez('.btn555 li','.jqbox5');
	 ez('.btn666 li','.jqbox6');
	 ez('.btn777 li','.jqbox7');
	 ez('.btn888 li','.jqbox8');
	 ez('.btn999 li','.jqbox9');
	 	 
		 function lol(a,b){
	 	$(a).mouseover(function(){
		$(a).removeClass('active');
		$(b).removeClass('show');
		$(this).addClass('active');
		$(b).eq($(this).index()).addClass('show');
		});
	};		
	
	 
	 	 function ez(a,b){
	     $(a).mouseover(function(){
		  $(a).removeClass('active');
		   $(b).animate({'margin-left':-790*$(this).index()+'px'},400);
		   $(this).addClass('active');
	});
	}
	
	
	
	
	
	
	});