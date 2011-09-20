<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=cp936"/>
		<title>formValid</title>
		<script language="javascript" type="text/javascript" src="http://a.tbcdn.cn/??s/kissy/1.1.6/kissy-min.js"></script>
		<script language="javascript" type="text/javascript" src="../fileUpload.js"></script>
	</head>
	<body>
		<form method="POST" id="fileUpload" accept-charset="cp936" enctype="multipart/form-data">
			<input type="file" name="file" value="" />
			<input id="formSubmit" type="submit" name="name" value="submit"/>
		</form>
		<script language="javascript" type="text/javascript">
			var K = KISSY;
			K.use( 'fileUpload', function(){
				var uploader = new K.fileUpload( 'fileHandle.php', 'fileUpload', function( data ){
					var key, str = '';
					for( key in data ){
						str += key + ': ' + data[ key ] + '\n\t';
					}
					alert( str );
				});
				K.one( '#formSubmit' ).on( 'click', function(){
					uploader.upload();
					return false;
				});
			});
		</script>
	</body>
</html>
