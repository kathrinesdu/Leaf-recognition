/*$(document).ready(function(){
	$("#tree").treeview({
		collapsed: true,
		unique: true,
		animated: "normal",
		persist: "location"
	});

});
*/

function google300(){
google_ad_client = "pub-7766051296408314";
google_alternate_ad_url = "http://www.love-watches.com/Google Alternate Ad/google-alternate.htm";
google_ad_width = 300;
google_ad_height = 250;
google_ad_format = "300x250_as";
google_ad_channel ="2905411715";
google_color_border = "d7d7d7";
google_color_bg = "FFFFFF";
google_color_link = "990000";
google_color_url = "990000";
google_color_text = "000000";
document.writeln('<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>');
}

var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

function runGA()

{           
   var pageTracker = _gat._getTracker("UA-4856482-1");
   pageTracker._initData();
   pageTracker._trackPageview();                

}

/*custom google ad code*/
function ServeCustomGoogleAd(sChannelName, nPageID, wgScriptPath)
{

	var e = document.getElementById('customGoogleAd')
	if(e)
	{
		if (window.XMLHttpRequest)
		{
		    xhr = new XMLHttpRequest();
		}
		else if (window.ActiveXObject)
		{
		    try
		    {
			    xhr = new ActiveXObject("Microsoft.XMLHTTP");
		    }
		    catch(e)
		    {
			    xhr = false;
		    }
		}
		if (!xhr)
		{
		    alert('Cannot create XMLHTTP instance');
		    return false;
		}
		xhr.open('GET', wgScriptPath + '/skins/js/CustomGoogleAd.php?ref=".mt_rand()."&pageID='+nPageID+'&channel='+sChannelName, true);
		xhr.send(null);
	}
}

function renderCustomAd(sChannelName)
{
	
	try {
	if (window.google_ad_skip > 0 ) {
	var google_skip = window.google_ad_skip;
	}
	}
	catch (e) {}
	try {
	if (typeof(google_page_url) == 'undefined') {
	var google_page_url = window.location.toString();
	window.google_page_url = window.location.toString();
	}
	}
	catch (e) {window.google_page_url = window.location.toString();}
	try {
	if ((google_page_url.toLowerCase().indexOf('how__') != -1) || (google_page_url.toLowerCase().indexOf('buy__') != -1)) {
	google_page_url = window.location.toString();
	}
	}
	catch (e) {}
	try {
	if (google_page_url.toLowerCase().indexOf('local3.') != -1) {
	google_page_url = google_page_url.replace(/local3./i, "www.");
	}
	}
	catch (e) {}
	try {
	if (google_page_url.toLowerCase().indexOf('staging.') != -1) {
	google_page_url = google_page_url.replace(/staging./i, "www.");
	}
	}
	catch (e) {}
	try {
	if (google_page_url.toLowerCase().indexOf('beta.') != -1) {
	google_page_url = google_page_url.replace(/beta./i, "www.");
	}
	}
	catch (e) {}
	try {
	window.google_page_location = google_page_url;
	}
	catch (e) {}
	try {
	window.google_page_channel = google_ad_channel;
	}
	catch (e) {}
	try {
	if (typeof(adsense_GoogleAd_336x280) == 'undefined') {
	var adsense_GoogleAd_336x280 = new Object();
	}
	}
	catch (e) {}
	try {
	adsense_GoogleAd_336x280.google_ad_channel = '1443390891';
	adsense_GoogleAd_336x280.google_ad_client = 'pub-3619764495662405';
	adsense_GoogleAd_336x280.google_ad_output = 'js';
	if (sChannelName=="EngagementRings" || sChannelName=="Hair")
	{
		adsense_GoogleAd_336x280.google_ad_type = 'image';
	}
	else
	{
		adsense_GoogleAd_336x280.google_ad_type = 'text_image';
	}
	adsense_GoogleAd_336x280.google_abtest_channel = '';
	adsense_GoogleAd_336x280.google_contents = '';
	if (sChannelName=="Hair")
	{
		adsense_GoogleAd_336x280.google_image_size = '300x250';
	}
	else
	{	
		adsense_GoogleAd_336x280.google_image_size = '468x60';
	}	
	adsense_GoogleAd_336x280.google_kw = '';
	adsense_GoogleAd_336x280.google_kw_type = '';
	adsense_GoogleAd_336x280.google_max_num_ads = '3';
	if (sChannelName=="Hair")
	{
		adsense_GoogleAd_336x280.google_ad_div = '300x250_1';
	}
	else
	{
		adsense_GoogleAd_336x280.google_ad_div = '468x60_1';
	}
	google_feedback = 'on';
	if (sChannelName=="Hair")
	{
		google_image_size = '300x250';
	}
	else
	{
		google_image_size = '468x60';
	}
	adsense_GoogleAd_336x280.articleid = '';
	}
	catch (e) {}
	try {
	AdInput.push(adsense_GoogleAd_336x280);
	}
	catch (e) {}
	// -->
	//google_ad_request_done('google_ads');
	
}
function google_ad_request_done(google_ads) {
	var s = '';
	var i;
	var image_width='336';
	var image_height='280';
	if (google_ads.length == 0) {
	return;
	}
	if (google_ads[0].type == "flash") {
	s += '<div id="customGoogleAd"><a href="' +
	google_info.feedback_url + '" style="text-decoration:none;font-size:10px;color:#000000;">Ads by Google</a></div>' + 
	'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
	' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="' + 
	google_ad.image_width + '" HEIGHT="' + 
	google_ad.image_height + '"> <PARAM NAME="movie" VALUE="' + 
	image_url + '">' + '<PARAM NAME="quality" VALUE="high">' + '<PARAM NAME="AllowScriptAccess" VALUE="never">' + '<EMBED src="' + 
	google_ad.image_url + '" WIDTH="' + 
	google_ad.image_width + '" HEIGHT="' + 
	google_ad.image_height + '" TYPE="application/x-shockwave-flash"' + ' AllowScriptAccess="never" ' + ' PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>';
	} else if (google_ads[0].type == "image") {
	s += '<div id="customGoogleAd"><a href="' + 
	google_info.feedback_url + '" style="text-decoration:none;font-size:10px;color:#000000;">Ads by Google</a></div> <a href="' + 
	google_ads[0].url + '" target="_top" title="go to ' + 
	google_ads[0].visible_url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
	google_ads[0].visible_url + '\';return true"><img border="0" src="' + 
	google_ads[0].image_url + '"width="' + 
	google_ads[0].image_width + '"height="' + 
	google_ads[0].image_height + '"></a>';
	} else if (google_ads[0].type == "html") {
	s += google_ads[0].snippet;
	} else {
	if (google_ads.length == 1) {
	s += '<div id="customGoogleAd"><a href="' + 
	google_info.feedback_url + '" style="text-decoration:none;font-size:10px;color:#000000;">Ads by Google</a></div> <a style="text-decoration:none" href="' + 
	google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
	google_ads[0].visible_url + '\';return true"> <span style="color:#0000cc;text-decoration:underline;font-size:20pt"> <b>' + 
	google_ads[0].line1 + '</b><br></span></a> <span style="color:#000000;font-size:16pt">' +
	google_ads[0].line2 + '&nbsp;' +
	google_ads[0].line3 + '<br></span> <span><a style="color:#aaaaaa;font-size:14pt;text-decoration:none" href="' + 
	google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
	google_ads[0].visible_url + '\';return true">' + 
	google_ads[0].visible_url + '</span></a><br>';
	} else if (google_ads.length > 1) {
	s += '<div class="ad-custom"><p class="heading"><a href="' + google_info.feedback_url + '">Ads by Google</a></p>'; 
	for(i = 0; i < google_ads.length; ++i) 
	{ 
	s += '<p class="ad"><a class="headline" href="' + 
	google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + 
	google_ads[i].visible_url + '\';return true">' + 
	google_ads[i].line1 + '</a> - ' + 
	google_ads[i].line2 + ' ' + 
	google_ads[i].line3 + ' <a class="url" href="' + 
	google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + 
	google_ads[i].visible_url + '\';return true">' + 
	google_ads[i].visible_url + '</a></p>'; 
	} 
	s += '</div>'; 
	}
	}
	document.write(s);
	return;
}
/*end custom google ad code*/

