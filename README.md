## һ���򵥵��ļ��ϴ����

- ����KISSY 1.1.6

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