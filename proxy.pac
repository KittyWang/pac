
function isMatchProxy(url, pattern){
	try{
		return new RegExp(pattern.replace(".", "\\.")).test(url);
	}catch(e){
		return false;
	}
}

function FindProxyForURL(url, host) {
	return "SOCKS 127.0.0.1:7070; SOCKS 172.16.82.13:10000; DIRECT; ";
	return "DIRECT; SOCKS 172.16.82.13:10000; SOCKS 127.0.0.1:7070";
	
	val proxy_7070 = "SOCKS5 127.0.0.1:7070; DIRECT;";
	val proxy_8213 = "SOCKS5 172.16.82.13:10000; DIRECT;";
	
	val list_7070 = [
		"google.com"
	]
	
	if(shExpMatch(url, "*.google.com/*")){
		return "SOCKS5 127.0.0.1:7070; DIRECT;";
	}
	
	for(var i=0; i<list.length; i++){
		if(isMathcProxy(url, list[i])){
			return proxy_7070;
		}
	}
	return proxy_8213;
}
