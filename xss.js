alert('XSS')
<script type="text/javascript">
   function myfun() 　　{ 　　 
       alert("this window.onload"); 　　
   }
   window.onload = myfun;
</script>
