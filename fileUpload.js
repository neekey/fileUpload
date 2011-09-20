/**
 * @description
 *	文件异步上传
 *	基于kissy 1.1.6
 *
 * @author: 倪云建 <niyunjian.pt@taobao.com>
 */
KISSY.add( 'fileUpload', function( K ){

var E = K.Event, UNID = 0;
/**
 * setting {
 *   url
 *   form_id
 *   submit_id
 *   complete(data<json>)
 * }
 */
var fileUpload = function( url, formID, cb ){
	this.init.apply( this, arguments );
};
fileUpload.prototype = {
	/**
	 * 初始化
	 */
	init: function( url, formID, cb ){
		this.url = url;
		this.formID = formID;
		this.callback = cb;
		this.form = K.one( '#' + formID );
		if( !this.form ){
			throw new error('指定的form不存在!');
		}
		this.form.attr( 'action', this.url );
	},
	/**
	 * 上传文件 
	 */
  	upload: function(){
    
    	// 用于闭包this
    	var that = this,
			newID = this.iframeID(),
			newIfm = this.buildIframe( newID );

		E.on( newIfm, 'load', function(){
			var responseText, jsonData;
      		if( this.contentWindow ){
         		responseText = this.contentWindow.document.body?this.contentWindow.document.body.innerHTML:null;
      		}
			else if(this.contentDocument){
         		responseText = this.contentDocument.document.body?this.contentDocument.document.body.innerHTML:null;
      		} 
      		responseText = ( !responseText ? '[]' : responseText );
			// 删除iframe
			K.one( newIfm ).remove();
			// 执行回调
			try{
				jsonData = JSON.parse(responseText);
			} catch( e ){
				jsonData = '';
			}
      		that.callback( jsonData );
		});
   		
		this.form.attr( 'target', newID );
		this.form[ 0 ].submit();
  	},
	/**
	 * 创建一个用于上传的iframe
	 */
  	buildIframe: function( newID ){
    	// 建立一个iframe
    	var iframeHtml = '<iframe id="' + newID + '" name="' + newID + '" style="position:absolute; top:-9999px; left:-9999px"',
			iframe = null;
    	if(	window.ActiveXObject )
    	{
      		if( typeof uri== 'boolean' ){
        		iframeHtml += ' src="' + 'javascript:false' + '"';
      		}
      		else if(typeof uri== 'string'){
        		iframeHtml += ' src="' + uri + '"';
      		} 
    	}
    	iframeHtml += ' />';
    	iframe = K.DOM.create( iframeHtml );
		document.body.appendChild( iframe );

		return iframe;
  	},
	iframeID: function(){
		UNID++;
		return 'fileUpload-iframe-' + UNID;
	}
};

K.namespace( 'fileUpload' );
K.fileUpload = fileUpload;
});


