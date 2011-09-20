## 一个简单的文件上传组件

- 基于KISSY 1.1.6

## Example

	K.use( 'fileUpload', function(){
		var formID = 'fileUpload',
		url = 'fileHandle.php',
		submit = 'formSubmit';
		
		var uploader = new K.fileUpload( url, formID, function( data ){
			console.log( data );
		});
		K.one( '#' + submit ).on( 'click', function(){
			uploader.upload();
			return false;
		});
	});