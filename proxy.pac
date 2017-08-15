function FindProxyForURL(url, host) {
    if(shExpMatch(url, "*git.iflytek.com*")){
       return "DIRECT";
    }
    if(shExpMatch(url, "*.google.com/*")){
	return "SOCKS5 127.0.0.1:7070"
    }
    return "SOCKS 172.16.82.13:10000";
}
