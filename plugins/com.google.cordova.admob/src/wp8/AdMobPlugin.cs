
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Runtime.Serialization;
using System.Windows;
using System.Windows.Controls;
using Microsoft.Phone.Controls;
//using Windows.Devices.Geolocation;
//using Windows.UI.Core;

using WPCordovaClassLib;
using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;
using GoogleAds;

namespace Cordova.Extension.Commands
{
	/// 
	/// Google AD Mob wrapper for showing banner and interstitial adverts
	/// 
	public class AdMobPlugin : BaseCommand
	{
		// ad size
		// only banner and smart banner supported on windows phones, see:
		// https://developers.google.com/mobile-ads-sdk/docs/admob/wp/banner
		
		public const string ADSIZE_BANNER = "BANNER";
		public const string ADSIZE_SMART_BANNER = "SMART_BANNER";
		//public const string ADSIZE_MEDIUM_RECTANGLE = "MEDIUM_RECTANGLE";
		//public const string ADSIZE_FULL_BANNER = "FULL_BANNER";
		//public const string ADSIZE_LEADERBOARD = "LEADERBOARD";
		//public const string ADSIZE_SKYSCRAPER = "SKYSCRAPPER";
		//public const string ADSIZE_CUSTOM = "CUSTOM";
		
		// ad event
		public const string EVENT_AD_LOADED = "onAdLoaded";
		public const string EVENT_AD_FAILLOAD = "onAdFailLoad";
		public const string EVENT_AD_PRESENT = "onAdPresent";
		public const string EVENT_AD_LEAVEAPP = "onAdLeaveApp";
		public const string EVENT_AD_DISMISS = "onAdDismiss";
		public const string EVENT_AD_WILLPRESENT = "onAdWillPresent";
		public const string EVENT_AD_WILLDISMISS = "onAdWillDismiss";

		// ad type
		public const string ADTYPE_BANNER = "banner";
		public const string ADTYPE_INTERSTITIAL = "interstitial";
		public const string ADTYPE_NATIVE = "native";
		
		// options 
		public const string OPT_ADID = "adId";
		public const string OPT_AUTO_SHOW = "autoShow";
		
		public const string OPT_IS_TESTING = "isTesting";
		public const string OPT_LOG_VERBOSE = "logVerbose";
		
		public const string OPT_AD_SIZE = "adSize";
		public const string OPT_WIDTH = "width";
		public const string OPT_HEIGHT = "height";
		public const string OPT_OVERLAP = "overlap";
		public const string OPT_ORIENTATION_RENEW = "orientationRenew";
		
		public const string OPT_POSITION = "position";
		public const string OPT_X = "x";
		public const string OPT_Y = "y";
		
		public const string OPT_BANNER_ID = "bannerId";
		public const string OPT_INTERSTITIAL_ID = "interstitialId";
		
		private const string TEST_BANNER_ID = "ca-app-pub-6869992474017983/9375997553";
		private const string TEST_INTERSTITIAL_ID = "ca-app-pub-6869992474017983/1355127956";
		
		// banner positions 
		public const int NO_CHANGE = 0;
		public const int TOP_LEFT = 1;
		public const int TOP_CENTER = 2;
		public const int TOP_RIGHT = 3;
		public const int LEFT = 4;
		public const int CENTER = 5;
		public const int RIGHT = 6;
		public const int BOTTOM_LEFT = 7;
		public const int BOTTOM_CENTER = 8;
		public const int BOTTOM_RIGHT = 9;
		public const int POS_XY = 10;
		
		protected bool isTesting = false;
		protected bool logVerbose = false;
		
		protected string bannerId = "";
		protected string interstitialId = "";
		
		protected AdFormats adSize = AdFormats.SmartBanner;
		protected int adWidth = 320;
		protected int adHeight = 50;
		protected bool overlap = false;
		protected bool orientationRenew = true;
		
		protected int adPosition = BOTTOM_CENTER;
		protected int posX = 0;
		protected int posY = 0;
		
		protected bool autoShowBanner = true;
		protected bool autoShowInterstitial = false;
		
		protected bool bannerVisible = false;
		
		private const string UI_LAYOUT_ROOT = "LayoutRoot";
		private const string UI_CORDOVA_VIEW = "CordovaView";
		
		private const int BANNER_HEIGHT_PORTRAIT = 50;
		private const int BANNER_HEIGHT_LANDSCAPE = 32;
		
		private RowDefinition row = null;
		
		private AdView bannerAd = null;
		private InterstitialAd interstitialAd = null;

		private double initialViewHeight = 0.0;
		private double initialViewWidth = 0.0;
		
		private AdFormats adSizeFromString(String size) {
			if (ADSIZE_BANNER.Equals (size)) { 
				return AdFormats.Banner; //Banner (320x50, Phones and Tablets)
			} else {
				return AdFormats.SmartBanner; //Smart banner (Auto size, Phones and Tablets)
			}
		}
		
		public void setOptions(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.setOptions: " + args);

			try {
				string[] inputs = JsonHelper.Deserialize<string[]>(args);
				if (inputs != null && inputs.Length >= 1) {
					Dictionary<string, string> options = JsonHelper.Deserialize<Dictionary<string, string>>(inputs[0]);
					__setOptions(options);
				}
			} catch (Exception ex) {
				DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, ex.Message));
				return;
			}

			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}
		
		protected void __setOptions(Dictionary<string, string> options) {
			if (options.ContainsKey (OPT_IS_TESTING))
				isTesting = Convert.ToBoolean (options [OPT_IS_TESTING]);
			
			if (options.ContainsKey (OPT_LOG_VERBOSE)) 
				logVerbose = Convert.ToBoolean (options [OPT_LOG_VERBOSE]);
			
			if (options.ContainsKey (OPT_OVERLAP))
				overlap = Convert.ToBoolean (options [OPT_OVERLAP]);
			
			if(options.ContainsKey(OPT_ORIENTATION_RENEW))
				orientationRenew = Convert.ToBoolean(options[OPT_ORIENTATION_RENEW]);
			
			if (options.ContainsKey (OPT_POSITION))
				adPosition = Convert.ToInt32 (options [OPT_POSITION]);
			if (options.ContainsKey (OPT_X))
				posX = Convert.ToInt32 (options [OPT_X]);
			if (options.ContainsKey (OPT_Y))
				posY = Convert.ToInt32 (options [OPT_Y]);
			
			if (options.ContainsKey (OPT_BANNER_ID))
				bannerId = options [OPT_BANNER_ID];
			
			if (options.ContainsKey (OPT_INTERSTITIAL_ID)) 
				interstitialId = options [OPT_INTERSTITIAL_ID];
			
			if (options.ContainsKey (OPT_AD_SIZE)) {
				adSize = adSizeFromString(options[OPT_AD_SIZE]);
			}
		}
		
		public void createBanner(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.createBanner: " + args);
			
			try {
				string[] inputs = JsonHelper.Deserialize<string[]>(args);
				if (inputs != null && inputs.Length >= 1) {
					Dictionary<string, string> options = JsonHelper.Deserialize<Dictionary<string, string>>(inputs[0]);
					
					if(options.Count > 1) __setOptions(options);
					
					string adId = TEST_BANNER_ID;
					bool autoShow = true;
					
					if(options.ContainsKey(OPT_ADID))
						adId = options[OPT_ADID];
					
					if(options.ContainsKey(OPT_AUTO_SHOW))
						autoShow = Convert.ToBoolean(options[OPT_AUTO_SHOW]);
					
					__createBanner(adId, autoShow);
					
				}
			} catch (Exception ex) {
				DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, ex.Message));
				return;
			}
			
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}
		
		protected void __createBanner(string adId, bool autoShow) {
			if (isTesting)
				adId = TEST_BANNER_ID;
			
			if ((adId!=null) && (adId.Length > 0))
				bannerId = adId;
			else
				adId = bannerId;

			autoShowBanner = autoShow;
			
			// Asynchronous UI threading call
			Deployment.Current.Dispatcher.BeginInvoke(() => {
				if(bannerAd == null) {
					bannerAd = new AdView {
						Format = adSize,
						AdUnitID = bannerId
					};

					// Add event handlers
					bannerAd.FailedToReceiveAd += banner_onAdFailLoad;
					bannerAd.LeavingApplication += banner_onAdLeaveApp;
					bannerAd.ReceivedAd += banner_onAdLoaded;
					bannerAd.ShowingOverlay += banner_onAdPresent;
					bannerAd.DismissingOverlay += banner_onAdDismiss;
				}

				bannerVisible = false;
				
				AdRequest adRequest = new AdRequest();
				adRequest.ForceTesting = isTesting;
				bannerAd.LoadAd( adRequest );
				
				if(autoShowBanner) {
					__showBanner(adPosition, posX, posY);
				}
			});
		}

		protected void showBanner(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.showBanner: " + args);
			try {
				string[] inputs = JsonHelper.Deserialize<string[]>(args);
				if (inputs != null && inputs.Length >= 1) {
					int position = Convert.ToInt32(inputs[0]);

					__showBanner(position, 0, 0);

				}
			} catch (Exception ex) {
				DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, ex.Message));
				return;
			}
			
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}

		protected void showBannerAtXY(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.showBannerAtXY: " + args);
			try {
				string[] inputs = JsonHelper.Deserialize<string[]>(args);
				if (inputs != null && inputs.Length >= 1) {
					int x = Convert.ToInt32(inputs[0]);
					int y = Convert.ToInt32(inputs[1]);
					
					__showBanner(POS_XY, x, y);
					
				}
			} catch (Exception ex) {
				DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, ex.Message));
				return;
			}
			
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}

		protected void __showBanner(int argPos, int argX, int argY) {
			if (bannerAd == null) {
				if(logVerbose) Debug.WriteLine("banner is null, call createBanner() first.");
				return;
			}
			
			// Asynchronous UI threading call
			Deployment.Current.Dispatcher.BeginInvoke(() => {
				PhoneApplicationFrame frame;
				PhoneApplicationPage page;
				CordovaView view;
				Grid grid;
				if (TryCast(Application.Current.RootVisual, out frame) &&
				    TryCast(frame.Content, out page) &&
				    TryCast(page.FindName(UI_CORDOVA_VIEW), out view) &&
				    TryCast(page.FindName(UI_LAYOUT_ROOT), out grid)) {
				    
					if(grid.Children.Contains(bannerAd)) grid.Children.Remove(bannerAd);
					
					if(overlap) {
						__showBannerOverlap(grid, adPosition);
	
					} else {
						if(! bannerVisible) {
							initialViewHeight = view.ActualHeight;
							initialViewWidth = view.ActualWidth;
							frame.OrientationChanged += onOrientationChanged;
						}
						__showBannerSplit(grid, view, adPosition);
						setCordovaViewHeight(frame, view);
					}
	
					bannerAd.Visibility = Visibility.Visible;
					bannerVisible = true;
				}
			});
		}

		protected void __showBannerOverlap(Grid grid, int position) {
			switch ((position - 1) % 3) {
			case 0: 
				bannerAd.HorizontalAlignment = HorizontalAlignment.Left;
				break;
			case 1: 
				bannerAd.HorizontalAlignment = HorizontalAlignment.Center;
				break;
			case 2: 
				bannerAd.HorizontalAlignment = HorizontalAlignment.Right;
				break;
			}

			switch ((position - 1) / 3) {
			case 0:
				bannerAd.VerticalAlignment = VerticalAlignment.Top;
				break;
			case 1:
				bannerAd.VerticalAlignment = VerticalAlignment.Center;
				break;
			case 2:
				bannerAd.VerticalAlignment = VerticalAlignment.Bottom;
				break;
			}

			grid.Children.Add (bannerAd);
		}

		protected void __showBannerSplit(Grid grid, CordovaView view, int position) {
			if(row == null) {
				row = new RowDefinition();
				row.Height = GridLength.Auto;
			}

			grid.Children.Add(bannerAd);

			switch((position-1)/3) {
			case 0:
				grid.RowDefinitions.Insert(0,row);
				Grid.SetRow(bannerAd, 0);
				Grid.SetRow(view, 1);
				break;
			case 1:
			case 2:
				grid.RowDefinitions.Add(row);
				Grid.SetRow(bannerAd, 1);
				break;
			}
		}
		
		public void hideBanner(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.hideBanner: " + args);
			__hideBanner ();
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}
		
		protected void __hideBanner() {
			// Asynchronous UI threading call
			Deployment.Current.Dispatcher.BeginInvoke(() => {
				PhoneApplicationFrame frame;
				PhoneApplicationPage page;
				CordovaView view;
				Grid grid;
				if (TryCast(Application.Current.RootVisual, out frame) &&
				    TryCast(frame.Content, out page) &&
				    TryCast(page.FindName(UI_CORDOVA_VIEW), out view) &&
				    TryCast(page.FindName(UI_LAYOUT_ROOT), out grid)) {

					grid.Children.Remove(bannerAd);
					grid.RowDefinitions.Remove(row);
					row = null;
	
					bannerAd.Visibility = Visibility.Collapsed;
					bannerVisible = false;
	
					if(! overlap) {
						frame.OrientationChanged -= onOrientationChanged;
						setCordovaViewHeight(frame, view);
					}
				}
			});
		}
		
		public void removeBanner(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.removeBanner: " + args);
			
			// Asynchronous UI threading call
			Deployment.Current.Dispatcher.BeginInvoke(() => {
				__hideBanner ();
				
				// Remove event handlers
				bannerAd.FailedToReceiveAd -= banner_onAdFailLoad;
				bannerAd.LeavingApplication -= banner_onAdLeaveApp;
				bannerAd.ReceivedAd -= banner_onAdLoaded;
				bannerAd.ShowingOverlay -= banner_onAdPresent;
				bannerAd.DismissingOverlay -= banner_onAdDismiss;

				bannerAd = null;
			});
			
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
		}
		
		public void prepareInterstitial(string args) {
			if(logVerbose) Debug.WriteLine("AdMob.prepareInterstitial: " + args);
			
			string adId = "";
			bool autoShow = false;
			
			try {
				string[] inputs = JsonHelper.Deserialize<string[]>(args);
				if (inputs != null && inputs.Length >= 1) {
					Dictionary<string, string> options = JsonHelper.Deserialize<Dictionary<string, string>>(inputs[0]);

					if(options.Count > 1) __setOptions(options);

					if (options.ContainsKey (OPT_ADID))
						adId = options [OPT_ADID];
					
					if (options.ContainsKey (OPT_AUTO_SHOW))
						autoShow = Convert.ToBoolean (options [OPT_AUTO_SHOW]);
					
					__prepareInterstitial (adId, autoShow);
				}
			} catch (Exception ex) {
				DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, ex.Message));
				return;
			}

			DispatchCommandResult (new PluginResult (PluginResult.Status.OK));
		}
		
		protected void __prepareInterstitial(string adId, bool autoShow) {
			if (isTesting)
				adId = TEST_INTERSTITIAL_ID;

			if ((adId != null) && (adId.Length > 0)) {
				interstitialId = adId;
			} else {
				adId = interstitialId;
			}

			autoShowInterstitial = autoShow;

			// Asynchronous UI threading call
			Deployment.Current.Dispatcher.BeginInvoke(() => {
				interstitialAd = new InterstitialAd( interstitialId );
				
				// Add event listeners
				interstitialAd.ReceivedAd += interstitial_onAdLoaded;
				interstitialAd.FailedToReceiveAd += interstitial_onAdFailLoad;
				interstitialAd.ShowingOverlay += interstitial_onAdPresent;
				interstitialAd.DismissingOverlay += interstitial_onAdDismiss;
				
				AdRequest adRequest = new AdRequest();
				adRequest.ForceTesting = isTesting;
				interstitialAd.LoadAd(adRequest);
			});
		}

		protected void __showInterstitial() {
			if (interstitialAd == null) {
				if(logVerbose) Debug.WriteLine("interstitial is null, call prepareInterstitial() first.");
				return;
			}

			Deployment.Current.Dispatcher.BeginInvoke(() => {
				interstitialAd.ShowAd ();
			});
		}
		
		public void showInterstitial(string args) {
			if(logVerbose) Debug.WriteLine ("AdMob.showInterstitial: " + args);

			if (interstitialAd != null) {
				__showInterstitial ();
				
			} else {
				__prepareInterstitial(interstitialId, true);
			}

			DispatchCommandResult (new PluginResult (PluginResult.Status.OK));
		}

		// Events --------
		
		// Device orientation
		private void onOrientationChanged(object sender, OrientationChangedEventArgs e)
		{
			// Asynchronous UI threading call
			Deployment.Current.Dispatcher.BeginInvoke(() => {
				PhoneApplicationFrame frame;
				PhoneApplicationPage page;
				CordovaView view;
				Grid grid;
				if (TryCast(Application.Current.RootVisual, out frame) &&
				    TryCast(frame.Content, out page) &&
				    TryCast(page.FindName(UI_CORDOVA_VIEW), out view) &&
				    TryCast(page.FindName(UI_LAYOUT_ROOT), out grid)) {

					setCordovaViewHeight(frame, view);
				}
			});
		}

		/// Set cordova view height based on banner height and frame orientation
		private void setCordovaViewHeight(PhoneApplicationFrame frame, CordovaView view) {
			bool deduct = bannerVisible && (! overlap);

			if (frame.Orientation == PageOrientation.Portrait ||
			    frame.Orientation == PageOrientation.PortraitDown ||
			    frame.Orientation == PageOrientation.PortraitUp) {
				view.Height = initialViewHeight - (deduct ? BANNER_HEIGHT_PORTRAIT : 0);
			} else {
				view.Height = initialViewWidth - (deduct ? BANNER_HEIGHT_LANDSCAPE : 0);
			}

			fireEvent ("window", "resize", null);
		}

		// Banner events
		private void banner_onAdFailLoad(object sender, AdErrorEventArgs args) {
			fireAdErrorEvent (EVENT_AD_FAILLOAD, ADTYPE_BANNER, getErrCode(args.ErrorCode), getErrStr(args.ErrorCode));
		}
		
		private void banner_onAdLoaded(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_LOADED, ADTYPE_BANNER);

			if( (! bannerVisible) && autoShowBanner ) {
				__showBanner(adPosition, posX, posY);
			}
		}
		
		private void banner_onAdPresent(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_PRESENT, ADTYPE_BANNER);
		}
		
		private void banner_onAdLeaveApp(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_LEAVEAPP, ADTYPE_BANNER);
		}
		
		private void banner_onAdDismiss(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_DISMISS, ADTYPE_BANNER);
		}
		
		// Interstitial events
		private void interstitial_onAdFailLoad(object sender, AdErrorEventArgs args) {
			fireAdErrorEvent (EVENT_AD_FAILLOAD, ADTYPE_INTERSTITIAL, getErrCode(args.ErrorCode), getErrStr(args.ErrorCode));
		}
		
		private void interstitial_onAdLoaded(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_LOADED, ADTYPE_INTERSTITIAL);

			if (autoShowInterstitial) {
				__showInterstitial ();
			}
		}
		
		private void interstitial_onAdPresent(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_PRESENT, ADTYPE_INTERSTITIAL);
		}
		
		private void interstitial_onAdDismiss(object sender, AdEventArgs args) {
			fireAdEvent (EVENT_AD_DISMISS, ADTYPE_INTERSTITIAL);
		}

		private int getErrCode(AdErrorCode errorCode) {
			switch(errorCode) { 
			case AdErrorCode.InternalError: return 0;
			case AdErrorCode.InvalidRequest: return 1;
			case AdErrorCode.NetworkError: return 2;
			case AdErrorCode.NoFill: return 3;
			case AdErrorCode.Cancelled: return 4;
			case AdErrorCode.StaleInterstitial: return 5;
			case AdErrorCode.NoError: return 6;
			}
			
			return -1;
		}

		private string getErrStr(AdErrorCode errorCode) {
			switch(errorCode) { 
			case AdErrorCode.InternalError: return "Internal error";
			case AdErrorCode.InvalidRequest: return "Invalid request";
			case AdErrorCode.NetworkError: return "Network error";
			case AdErrorCode.NoFill: return "No fill";
			case AdErrorCode.Cancelled: return "Cancelled";
			case AdErrorCode.StaleInterstitial: return "Stale interstitial";
			case AdErrorCode.NoError: return "No error";
			}
			
			return "Unknown";    
		}

		protected void fireAdEvent(string adEvent, string adType) {
			string json = "{'adNetwork':'AdMob','adType':'" + adType + "','adEvent':'" + adEvent + "'}";
			fireEvent("document", adEvent, json);
		}
		
		protected void fireAdErrorEvent(string adEvent, string adType, int errCode, string errMsg) {
			string json = "{'adNetwork':'AdMob','adType':'" + adType 
				+ "','adEvent':'" + adEvent + "','error':" + errCode + ",'reason':'" + errMsg + "'}";
			fireEvent("document", adEvent, json);

		}
		
		protected void fireEvent(string obj, string eventName, string jsonData) {
			string js = "";
			if("window".Equals(obj)) {
				js = "var evt=document.createEvent('UIEvents');evt.initUIEvent('" + eventName 
					+ "',true,false,window,0);window.dispatchEvent(evt);";
			} else {
				js = "javascript:cordova.fireDocumentEvent('" + eventName + "'";
				if(jsonData != null) {
					js += "," + jsonData;
				}
				js += ");";
			}

			Deployment.Current.Dispatcher.BeginInvoke(() => {
				PhoneApplicationFrame frame;
				PhoneApplicationPage page;
				CordovaView view;
			
				if (TryCast(Application.Current.RootVisual, out frame) &&
				    TryCast(frame.Content, out page) &&
				    TryCast(page.FindName(UI_CORDOVA_VIEW), out view)) {
				    
					// Asynchronous threading call
					view.Browser.Dispatcher.BeginInvoke(() =>{
						try {
							view.Browser.InvokeScript("eval", new string[] { js });
						} catch {
							if(logVerbose) Debug.WriteLine("AdMob.fireEvent: Failed to invoke script: " + js);
						}
					});
				}
			});
		}
		
		static bool TryCast<T>(object obj, out T result) where T : class {
			result = obj as T;
			return result != null;
		}
	}
}

